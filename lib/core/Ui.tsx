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

export interface UiStyleProps extends Partial<ExtendedCSSProperties> {
  [key: `__${string}`]: UiStyleProps | undefined;
  className?: string;
}

export type PolymorphicProps<E extends React.ElementType> = {
  as?: E;
  ref?: React.Ref<any>;
} & Omit<React.ComponentPropsWithoutRef<E>, "className"> &
  UiStyleProps;

export type UiProps<E extends React.ElementType = "div"> = PolymorphicProps<E>;

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
  styles: UiStyleProps,
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

export const Ui = <E extends React.ElementType = "div">(props: UiProps<E>) => {
  const { as, ref, className, ...restProps } = props;
  const Component = as || "div";
  const { breakpoints, colors, allowedDOMPropKeys } = useSetting();

  const { base, media, pseudo } = flattenStyles(
    restProps as UiStyleProps,
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
    />
  );
};
