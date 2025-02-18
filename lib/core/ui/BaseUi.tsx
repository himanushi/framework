import { css, cx } from "@emotion/css";
import type * as CSS from "csstype";
import type { MotionProps } from "motion/react";
import { motion as Motion } from "motion/react";
import { allowedDOMPropKeys, breakpoints, colors } from "~/core/ui/values";

// --- Types ---

type BreakpointKeys = keyof typeof breakpoints;
export type ResponsiveProp<T> = T | Partial<Record<BreakpointKeys, T>>;
type ColorValue = string;
type ResponsiveColor = ColorValue | Partial<Record<BreakpointKeys, ColorValue>>;

type ExtendedCSSProperties = {
  [K in keyof CSS.Properties<string | number>]: K extends `${string}Color`
    ? ResponsiveColor
    : ResponsiveProp<CSS.Properties<string | number>[K]>;
};

export interface BaseUiStyleProps extends Partial<ExtendedCSSProperties> {
  className?: string;
}

type PseudoClass =
  | "__link"
  | "__visited"
  | "__hover"
  | "__active"
  | "__focus"
  | "__focus-visible"
  | "__focus-within"
  | "__checked"
  | "__disabled"
  | "__enabled"
  | "__required"
  | "__optional"
  | "__valid"
  | "__invalid"
  | "__in-range"
  | "__out-of-range"
  | "__read-only"
  | "__read-write"
  | "__placeholder-shown"
  | "__root"
  | "__empty"
  | "__first-child"
  | "__last-child"
  | "__first-of-type"
  | "__last-of-type"
  | "__only-child"
  | "__only-of-type"
  | "__nth-child"
  | "__nth-last-child"
  | "__nth-of-type"
  | "__nth-last-of-type"
  | "__target";

export type PolymorphicProps<E extends React.ElementType> = {
  as?: E;
  ref?: React.Ref<any>;
} & Omit<React.ComponentPropsWithoutRef<E>, "className" | "color"> &
  BaseUiStyleProps & {
    [K in PseudoClass]?: PolymorphicProps<any>;
  };

export type BaseUiProps<E extends React.ElementType = "div"> =
  PolymorphicProps<E> &
    Omit<MotionProps, "children" | "style"> & {
      $motion?: boolean;
    };

// --- Utility Functions ---

const resolveValue = (
  key: string,
  value: any,
  colors: Record<string, string>,
): any =>
  typeof value === "string" &&
  key.toLowerCase().includes("color") &&
  colors[value]
    ? colors[value]
    : value;

const resolveResponsiveStyles = (
  key: string,
  value: any,
  breakpoints: Record<string, string>,
  colors: Record<string, string>,
): { base: Record<string, any>; media: Record<string, any> } => {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return { base: { [key]: resolveValue(key, value, colors) }, media: {} };
  }
  const base: Record<string, any> = {};
  const media: Record<string, any> = {};
  const hasBreakpoint = Object.keys(value).some((k) => breakpoints[k]);
  if (hasBreakpoint) {
    Object.entries(value).forEach(([subKey, subValue]) => {
      if (breakpoints[subKey]) {
        const mq = `@media (min-width: ${breakpoints[subKey]})`;
        media[mq] = {
          ...media[mq],
          [key]: resolveValue(key, subValue, colors),
        };
      } else {
        base[key] = resolveValue(key, subValue, colors);
      }
    });
  } else {
    base[key] = resolveValue(key, value, colors);
  }
  return { base, media };
};

const isAllowedDOMProp = (key: string, allowedKeys: Set<string>): boolean =>
  allowedKeys.has(key) ||
  key.startsWith("on") ||
  key.startsWith("while") ||
  key.startsWith("drag") ||
  key.startsWith("layout") ||
  key.startsWith("aria-") ||
  key.startsWith("data-");

const filterAllowedDOMProps = (
  props: Record<string, any>,
  allowedKeys: Set<string>,
): Record<string, any> =>
  Object.keys(props).reduce<Record<string, any>>((acc, key) => {
    if (isAllowedDOMProp(key, allowedKeys)) {
      acc[key] = props[key];
    }
    return acc;
  }, {});

const emptySet = new Set<string>();

const flattenStyles = (
  styles: BaseUiStyleProps,
  breakpoints: Record<string, string>,
  colors: Record<string, string>,
  parentSelector = "&",
): {
  base: Record<string, any>;
  media: Record<string, any>;
  pseudo: Record<string, any>;
} => {
  let base: Record<string, any> = {};
  const media: Record<string, any> = {};
  const pseudo: Record<string, any> = {};

  for (const [key, value] of Object.entries(styles)) {
    if (isAllowedDOMProp(key, emptySet)) continue;

    if (key.startsWith("__")) {
      const pseudoKey =
        parentSelector === "&"
          ? `&:${key.slice(2)}`
          : `${parentSelector}:${key.slice(2)}`;

      if (typeof value === "object" && value !== null) {
        const {
          base: nestedBase,
          media: nestedMedia,
          pseudo: nestedPseudo,
        } = flattenStyles(value, breakpoints, colors, pseudoKey);

        // 通常のスタイル
        pseudo[pseudoKey] = { ...(pseudo[pseudoKey] || {}), ...nestedBase };

        // ネストされた擬似クラス
        for (const [nestedPseudoSelector, nestedPseudoStyles] of Object.entries(
          nestedPseudo,
        )) {
          const combinedSelector = nestedPseudoSelector.replace("&", pseudoKey);
          pseudo[combinedSelector] = nestedPseudoStyles;
        }

        // メディアクエリ内の擬似クラス
        for (const [mediaQuery, mediaStyles] of Object.entries(nestedMedia)) {
          if (!media[mediaQuery]) {
            media[mediaQuery] = {};
          }
          media[mediaQuery][pseudoKey] = {
            ...(media[mediaQuery][pseudoKey] || {}),
            ...mediaStyles,
          };
        }
      } else {
        pseudo[pseudoKey] = resolveValue(key, value, colors);
      }
    } else {
      const { base: resolvedBase, media: resolvedMedia } =
        resolveResponsiveStyles(key, value, breakpoints, colors);
      base = { ...base, ...resolvedBase };

      for (const mq in resolvedMedia) {
        if (!media[mq]) {
          media[mq] = {};
        }
        media[mq] = { ...media[mq], ...resolvedMedia[mq] };
      }
    }
  }

  return { base, media, pseudo };
};

// --- Component ---

export const BaseUi = <E extends React.ElementType = React.ElementType>(
  props: BaseUiProps<E>,
) => {
  const { as, ref, className, children, style, $motion, ...restProps } = props;

  const { base, media, pseudo } = flattenStyles(
    restProps as BaseUiStyleProps,
    breakpoints,
    colors,
  );

  const allowedProps = filterAllowedDOMProps(restProps, allowedDOMPropKeys);
  const Component = $motion ? Motion[(as as "div") ?? "div"] : as || "div";
  const combinedStyles = { ...base, ...pseudo, ...media };
  const generatedClass = css(combinedStyles);

  return (
    <Component
      ref={ref}
      {...allowedProps}
      className={cx(generatedClass, className)}
      style={style}
    >
      {children}
    </Component>
  );
};
