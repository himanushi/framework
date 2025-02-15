import { css, cx } from "@emotion/css";
import type * as CSS from "csstype";
import type React from "react";
import { type defaultColors, useStyle } from "./StyleProvider";

type BreakpointKeys = "xs" | "sm" | "md" | "lg" | "xl";
type ResponsiveProp<T> = T | Partial<Record<BreakpointKeys, T>>;

type DefaultColors = typeof defaultColors;

type PseudoKeys =
  | "__hover"
  | "__active"
  | "__focus"
  | "__visited"
  | "__link"
  | "__first-child"
  | "__last-child"
  | "__nth-child"
  | "__nth-last-child"
  | "__first-of-type"
  | "__last-of-type"
  | "__nth-of-type"
  | "__nth-last-of-type"
  | "__checked"
  | "__disabled"
  | "__enabled"
  | "__required"
  | "__optional"
  | "__read-only"
  | "__read-write"
  | "__empty"
  | "__target"
  | "__lang"
  | "__not";

type PseudoStyles = {
  [K in PseudoKeys]?: CSS.Properties<string | number>;
};

type ExtendedCSSProperties = {
  [K in keyof CSS.Properties<string | number>]: K extends `${string}Color`
    ? ResponsiveProp<CSS.Properties<string | number>[K] | keyof DefaultColors>
    : ResponsiveProp<CSS.Properties<string | number>[K]>;
};

interface UiStyleProps extends Partial<ExtendedCSSProperties>, PseudoStyles {
  [key: `__${string}`]: CSS.Properties<string | number> | undefined;
  htmTranslate?: "yes" | "no";
  className?: string;
}

type PolymorphicProps<E extends React.ElementType> = {
  as?: E;
  ref?: React.Ref<any>;
} & React.ComponentPropsWithoutRef<E> &
  UiStyleProps;

export type UiProps<E extends React.ElementType = "div"> = PolymorphicProps<E>;

const resolveValue = (
  key: string,
  value: any,
  colors: Record<string, string>,
) => {
  if (
    typeof value === "string" &&
    key.toLowerCase().includes("color") &&
    colors[value]
  ) {
    return colors[value];
  }
  return value;
};

const extractStyles = (
  props: UiStyleProps,
  breakpoints: Record<string, string>,
  colors: Record<string, string>,
) => {
  const base: React.CSSProperties = {};
  const pseudo: Record<string, any> = {};
  const media: Record<string, any> = {};
  const rest: Record<string, any> = {};

  const allowedDOMPropKeys = new Set([
    "children",
    "className",
    "style",
    "htmTranslate",
  ]);

  Object.entries(props).forEach(([key, value]) => {
    if (allowedDOMPropKeys.has(key) || key.startsWith("on")) {
      rest[key] = value;
    } else if (key.startsWith("__")) {
      const pseudoKey = `&:${key.slice(2)}`;
      pseudo[pseudoKey] = value;
    } else {
      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        Object.entries(value).forEach(([breakKey, breakValue]) => {
          if (breakpoints[breakKey]) {
            const mediaQuery = `@media (min-width: ${breakpoints[breakKey]})`;
            if (!media[mediaQuery]) {
              media[mediaQuery] = {};
            }
            media[mediaQuery][key] = resolveValue(key, breakValue, colors);
          }
        });
      } else {
        if (key === "content" && typeof value === "object") {
          base[key as keyof React.CSSProperties] = (value as any).default;
        } else {
          base[key as keyof React.CSSProperties] = resolveValue(
            key,
            value,
            colors,
          );
        }
      }
    }
  });
  return { base, pseudo, media, rest };
};

export const Ui = <E extends React.ElementType = "div">(props: UiProps<E>) => {
  const { as, ref, ...restProps } = props;
  const Component = as || "div";
  const { breakpoints, colors } = useStyle();
  const { base, pseudo, media, rest } = extractStyles(
    restProps as UiStyleProps,
    breakpoints,
    colors,
  );
  const combinedStyles = { ...base, ...pseudo, ...media };
  const generatedClass = css(combinedStyles);
  const { htmTranslate, className, ...domProps } = rest;

  return (
    <Component
      ref={ref}
      {...domProps}
      translate={htmTranslate}
      className={cx(generatedClass, className)}
    />
  );
};
