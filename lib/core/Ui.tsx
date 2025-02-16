import { css, cx } from "@emotion/css";
import type * as CSS from "csstype";
import type React from "react";
import { useSetting } from "./UiProvider";

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
  htmTranslate?: "yes" | "no";
  className?: string;
}

export type PolymorphicProps<E extends React.ElementType> = {
  as?: E;
  ref?: React.Ref<any>;
} & Omit<React.ComponentPropsWithoutRef<E>, "className" | "htmTranslate"> &
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

const resolveResponsiveStyles = (
  key: string,
  value: any,
  breakpoints: Record<string, string>,
  colors: Record<string, string>,
) => {
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

// allowedDOMPropKeys に依存する関数は、context から渡された値を引数で受け取る形に変更
const isAllowedDOMProp = (key: string, allowedKeys: Set<string>): boolean => {
  return (
    allowedKeys.has(key) ||
    key.startsWith("on") ||
    key.startsWith("aria-") ||
    key.startsWith("data-")
  );
};

const filterAllowedDOMProps = (
  props: Record<string, any>,
  allowedKeys: Set<string>,
): Record<string, any> => {
  return Object.keys(props).reduce(
    (acc, key) => {
      if (isAllowedDOMProp(key, allowedKeys)) {
        acc[key] = props[key];
      }
      return acc;
    },
    {} as Record<string, any>,
  );
};

const emptySet = new Set<string>();

const flattenStyles = (
  styles: UiStyleProps,
  breakpoints: Record<string, string>,
  colors: Record<string, string>,
  parentSelector = "&",
) => {
  let base: Record<string, any> = {};
  const media: Record<string, any> = {};
  let pseudo: Record<string, any> = {};

  Object.entries(styles).forEach(([key, value]) => {
    // DOM にそのまま渡すプロパティはスタイル処理から除外する
    if (isAllowedDOMProp(key, emptySet)) {
      return;
    }

    // 擬似クラス（"__" で始まる場合）
    if (key.startsWith("__")) {
      const pseudoSelector = `${parentSelector}:${key.slice(2)}`;
      if (typeof value === "object" && value !== null) {
        const {
          base: nestedBase,
          media: nestedMedia,
          pseudo: nestedPseudo,
        } = flattenStyles(value, breakpoints, colors, pseudoSelector);
        pseudo[pseudoSelector] = { ...nestedBase };
        pseudo = { ...pseudo, ...nestedPseudo };
        Object.entries(nestedMedia).forEach(([mq, mqStyles]) => {
          media[mq] = { ...media[mq], ...mqStyles };
        });
      } else {
        pseudo[pseudoSelector] = value;
      }
    } else {
      // 通常のスタイルプロパティ
      const { base: resolvedBase, media: resolvedMedia } =
        resolveResponsiveStyles(key, value, breakpoints, colors);
      base = { ...base, ...resolvedBase };
      Object.entries(resolvedMedia).forEach(([mq, mqStyles]) => {
        media[mq] = { ...media[mq], ...mqStyles };
      });
    }
  });
  return { base, media, pseudo };
};

export const Ui = <E extends React.ElementType = "div">(props: UiProps<E>) => {
  const { as, ref, htmTranslate, className, ...restProps } = props;
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
      translate={htmTranslate}
      className={cx(generatedClass, className)}
    />
  );
};
