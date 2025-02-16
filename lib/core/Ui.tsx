import { css, cx } from "@emotion/css";
import type * as CSS from "csstype";
import type React from "react";
import { useStyle } from "./StyleProvider";

type BreakpointKeys = "xs" | "sm" | "md" | "lg" | "xl";
type ResponsiveProp<T> = T | Partial<Record<BreakpointKeys, T>>;
type ColorValue = string;
type ResponsiveColor = ColorValue | Partial<Record<BreakpointKeys, ColorValue>>;

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
  [K in PseudoKeys]?: Partial<ExtendedCSSProperties>;
};

type ExtendedCSSProperties = Omit<
  {
    [K in keyof CSS.Properties<string | number>]: K extends `${string}Color`
      ? ResponsiveColor
      : ResponsiveProp<CSS.Properties<string | number>[K]>;
  },
  "color"
> & {
  color?: ResponsiveColor;
};

interface UiStyleProps extends Partial<ExtendedCSSProperties>, PseudoStyles {
  [key: `__${string}`]: Partial<ExtendedCSSProperties> | undefined;
  htmTranslate?: "yes" | "no";
  className?: string;
}

type PolymorphicProps<E extends React.ElementType> = {
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
    "disabled",
  ]);

  const extractResponsive = (styles: Record<string, any>) => {
    const localBase: Record<string, any> = {};
    const localMedia: Record<string, any> = {};
    Object.entries(styles).forEach(([k, v]) => {
      if (typeof v === "object" && v !== null && !Array.isArray(v)) {
        let hasBreakpoint = false;
        for (const key in v) {
          if (breakpoints[key]) {
            hasBreakpoint = true;
            break;
          }
        }
        if (hasBreakpoint) {
          for (const [bpKey, bpValue] of Object.entries(v)) {
            if (breakpoints[bpKey]) {
              const mq = `@media (min-width: ${breakpoints[bpKey]})`;
              if (!localMedia[mq]) {
                localMedia[mq] = {};
              }
              localMedia[mq][k] = resolveValue(k, bpValue, colors);
            } else {
              localBase[k] = resolveValue(k, bpValue, colors);
            }
          }
        } else {
          localBase[k] = resolveValue(k, v, colors);
        }
      } else {
        localBase[k] = resolveValue(k, v, colors);
      }
    });
    return { base: localBase, media: localMedia };
  };

  Object.entries(props).forEach(([key, value]) => {
    if (allowedDOMPropKeys.has(key) || key.startsWith("on")) {
      rest[key] = value;
    } else if (key.startsWith("__")) {
      // 擬似クラスの場合
      const pseudoKey = `&:${key.slice(2)}`;
      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        const { base: pseudoBase, media: pseudoMedia } =
          extractResponsive(value);
        pseudo[pseudoKey] = pseudoBase;
        Object.entries(pseudoMedia).forEach(([mq, styles]) => {
          if (!media[mq]) {
            media[mq] = {};
          }
          if (!media[mq][pseudoKey]) {
            media[mq][pseudoKey] = {};
          }
          Object.assign(media[mq][pseudoKey], styles);
        });
      } else {
        pseudo[pseudoKey] = value;
      }
    } else {
      // 通常のスタイルの場合
      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        const { base: baseValue, media: mediaValue } = extractResponsive({
          [key]: value,
        });
        (base as Record<string, any>)[key] = baseValue[key];
        Object.entries(mediaValue).forEach(([mq, styles]) => {
          if (!media[mq]) {
            media[mq] = {};
          }
          media[mq][key] = styles[key];
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
  const { htmTranslate, className, style, ...domProps } = rest;

  return (
    <Component
      ref={ref}
      {...domProps}
      translate={htmTranslate}
      className={cx(generatedClass, className)}
      style={style}
    />
  );
};
