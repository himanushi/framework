import type * as CSS from "csstype";
import type { MotionProps } from "motion/react";
import type { breakpoints } from "~/utils/constants";

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

const getPseudoSelector = (key: string): string => {
  if (key.startsWith("__")) {
    const pseudoName = key.slice(2);
    const colonType = doubleColonPseudoElements.has(pseudoName) ? "::" : ":";
    return `${colonType}${pseudoName}`;
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

  // Check if the value is a responsive object
  const hasBreakpoint = Object.keys(value).some((k) => breakpoints[k]);
  if (!hasBreakpoint) {
    return { base: { [key]: resolveValue(key, value, colors) }, media: {} };
  }

  // Handle xs breakpoint as base style
  if (value.xs !== undefined) {
    base[key] = resolveValue(key, value.xs, colors);
  }

  // Handle other breakpoints
  Object.entries(value).forEach(([breakpoint, breakpointValue]) => {
    if (breakpoint !== "xs" && breakpoints[breakpoint]) {
      const mq = `@media (min-width: ${breakpoints[breakpoint]})`;
      media[mq] = {
        ...media[mq],
        [key]: resolveValue(key, breakpointValue, colors),
      };
    }
  });

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

const combinePseudoSelectors = (selectors: string[]): string => {
  return selectors.join("");
};

const flattenPseudoStyles = (
  styles: BaseUiStyleProps,
  breakpoints: Record<string, string>,
  colors: Record<string, string>,
  parentSelectors: string[] = [],
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
      const currentSelector = getPseudoSelector(key);
      const currentSelectors = [...parentSelectors, currentSelector];
      const combinedSelector = `&${combinePseudoSelectors(currentSelectors)}`;

      if (typeof value === "object" && value !== null) {
        const {
          base: nestedBase,
          media: nestedMedia,
          pseudo: nestedPseudo,
        } = flattenPseudoStyles(value, breakpoints, colors, currentSelectors);

        // Add nested base styles to current pseudo selector
        if (Object.keys(nestedBase).length > 0) {
          pseudo[combinedSelector] = nestedBase;
        }

        // Add nested pseudo styles
        Object.assign(pseudo, nestedPseudo);

        // Merge nested media queries
        Object.entries(nestedMedia).forEach(([mediaQuery, mediaStyles]) => {
          if (!pseudo[mediaQuery]) {
            pseudo[mediaQuery] = {};
          }
          if (!pseudo[mediaQuery][combinedSelector]) {
            pseudo[mediaQuery][combinedSelector] = {};
          }
          Object.assign(pseudo[mediaQuery][combinedSelector], mediaStyles);
        });
      } else {
        pseudo[combinedSelector] = resolveValue(key, value, colors);
      }
    } else {
      const { base: resolvedBase, media: resolvedMedia } =
        resolveResponsiveStyles(key, value, breakpoints, colors);
      base = { ...base, ...resolvedBase };

      // プロパティ値のメディアクエリ
      Object.entries(resolvedMedia).forEach(([mq, styles]) => {
        if (!media[mq]) {
          media[mq] = {};
        }
        media[mq] = { ...media[mq], ...styles };
      });
    }
  }

  return { base, media, pseudo };
};

export const flattenStyles = (
  styles: BaseUiStyleProps,
  breakpoints: Record<string, string>,
  colors: Record<string, string>,
): {
  base: Record<string, any>;
  media: Record<string, any>;
  pseudo: Record<string, any>;
} => {
  return flattenPseudoStyles(styles, breakpoints, colors);
};
