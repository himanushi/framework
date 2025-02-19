import type * as CSS from "csstype";
import type { MotionProps } from "motion/react";
import type { breakpoints } from "~/core/ui/values";

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

type PseudoSelector =
  // シングルコロン擬似クラス
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
  | "__target"
  // ダブルコロン擬似要素
  | "__before"
  | "__after"
  | "__first-line"
  | "__first-letter"
  | "__selection"
  | "__marker"
  | "__backdrop"
  | "__placeholder";

export type PolymorphicProps<E extends React.ElementType> = {
  as?: E;
  ref?: React.Ref<any>;
} & Omit<React.ComponentPropsWithoutRef<E>, "className" | "color"> &
  BaseUiStyleProps & {
    [K in PseudoSelector]?: PolymorphicProps<any>;
  };

export type BaseUiProps<E extends React.ElementType = "div"> =
  PolymorphicProps<E> &
    Omit<MotionProps, "children" | "style"> & {
      $motion?: boolean;
    };

const doubleColonPseudoElements = new Set([
  "before",
  "after",
  "first-line",
  "first-letter",
  "selection",
  "marker",
  "backdrop",
  "placeholder",
]);

const getPseudoSelector = (key: string, parentSelector = "&"): string => {
  if (key.startsWith("__")) {
    const pseudoName = key.slice(2);
    const colonType = doubleColonPseudoElements.has(pseudoName) ? "::" : ":";
    return parentSelector === "&"
      ? `&${colonType}${pseudoName}`
      : `${parentSelector}${colonType}${pseudoName}`;
  }
  return key;
};

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

export const resolveResponsiveStyles = (
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

export const filterAllowedDOMProps = (
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

export const flattenStyles = (
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
      const pseudoSelector = getPseudoSelector(key, parentSelector);

      if (typeof value === "object" && value !== null) {
        const {
          base: nestedBase,
          media: nestedMedia,
          pseudo: nestedPseudo,
        } = flattenStyles(value, breakpoints, colors, pseudoSelector);

        // 通常のスタイル
        pseudo[pseudoSelector] = {
          ...(pseudo[pseudoSelector] || {}),
          ...nestedBase,
        };

        // ネストされた擬似クラス/要素
        for (const [nestedPseudoSelector, nestedPseudoStyles] of Object.entries(
          nestedPseudo,
        )) {
          const combinedSelector = nestedPseudoSelector.replace(
            "&",
            pseudoSelector,
          );
          pseudo[combinedSelector] = nestedPseudoStyles;
        }

        // メディアクエリ内の擬似クラス/要素
        for (const [mediaQuery, mediaStyles] of Object.entries(nestedMedia)) {
          if (!media[mediaQuery]) {
            media[mediaQuery] = {};
          }
          media[mediaQuery][pseudoSelector] = {
            ...(media[mediaQuery][pseudoSelector] || {}),
            ...mediaStyles,
          };
        }
      } else {
        pseudo[pseudoSelector] = resolveValue(key, value, colors);
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
