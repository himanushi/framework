import { css, cx } from "@emotion/css";
import type * as CSS from "csstype";
import type React from "react";
import { useSetting } from "./UiProvider";

// --- Types ---

type BreakpointKeys = "xs" | "sm" | "md" | "lg" | "xl";
type ResponsiveProp<T> = T | Partial<Record<BreakpointKeys, T>>;
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
} & Omit<React.ComponentPropsWithoutRef<E>, "className"> &
  BaseUiStyleProps & {
    [K in PseudoClass]?: BaseUiStyleProps;
  };

export type BaseUiProps<E extends React.ElementType = "div"> =
  PolymorphicProps<E>;

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
} =>
  Object.entries(styles).reduce(
    (acc, [key, value]) => {
      // DOM にそのまま渡すプロパティは除外
      if (isAllowedDOMProp(key, emptySet)) return acc;

      // 疑似セレクタの場合
      if (key.startsWith("__")) {
        const pseudoSelector = `${parentSelector}:${key.slice(2)}`;
        if (typeof value === "object" && value !== null) {
          const { base, media, pseudo } = flattenStyles(
            value,
            breakpoints,
            colors,
            pseudoSelector,
          );
          acc.pseudo[pseudoSelector] = { ...base };
          acc.pseudo = { ...acc.pseudo, ...pseudo };
          for (const [mq, mqStyles] of Object.entries(media)) {
            acc.media[mq] = { ...acc.media[mq], ...mqStyles };
          }
        } else {
          acc.pseudo[pseudoSelector] = value;
        }
      } else {
        // 通常のスタイルの場合
        const { base, media } = resolveResponsiveStyles(
          key,
          value,
          breakpoints,
          colors,
        );
        acc.base = { ...acc.base, ...base };
        for (const [mq, mqStyles] of Object.entries(media)) {
          acc.media[mq] = { ...acc.media[mq], ...mqStyles };
        }
      }
      return acc;
    },
    {
      base: {} as Record<string, any>,
      media: {} as Record<string, any>,
      pseudo: {} as Record<string, any>,
    },
  );

// --- Component ---

export const BaseUi = <E extends React.ElementType = "div">(
  props: BaseUiProps<E>,
) => {
  const { as, ref, className, children, ...restProps } = props;
  const Component = as || "div";
  const { breakpoints, colors, allowedDOMPropKeys } = useSetting();

  const { base, media, pseudo } = flattenStyles(
    restProps as BaseUiStyleProps,
    breakpoints,
    colors,
  );
  const combinedStyles = { ...base, ...pseudo, ...media };
  const generatedClass = css(combinedStyles);
  const allowedProps = filterAllowedDOMProps(restProps, allowedDOMPropKeys);

  return (
    <Component
      ref={ref}
      {...allowedProps}
      className={cx(generatedClass, className)}
      children={children}
    />
  );
};
