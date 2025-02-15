import { css, cx } from "@emotion/css";
import type * as CSS from "csstype";
import type React from "react";

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

interface UiStyleProps
  extends Partial<CSS.Properties<string | number>>,
    PseudoStyles {
  [key: `__${string}`]: CSS.Properties<string | number> | undefined;
  // HTML属性とStyle属性の両方で translate が定義されているため、
  // HTML側の translate 属性は htmTranslate とする
  htmTranslate?: "yes" | "no";
  className?: string;
}

type PolymorphicProps<E extends React.ElementType> = {
  as?: E;
  ref?: React.Ref<any>;
} & React.ComponentPropsWithoutRef<E> &
  UiStyleProps;

type UiProps<E extends React.ElementType = "div"> = PolymorphicProps<E>;

const extractStyles = (props: UiStyleProps) => {
  const base: React.CSSProperties = {};
  const pseudo: Record<string, any> = {};
  const rest: Partial<UiStyleProps> = {};

  Object.entries(props).forEach(([key, value]) => {
    if (key === "htmTranslate") {
      rest[key as keyof UiStyleProps] = value;
    } else if (key.startsWith("__")) {
      const pseudoKey = `&:${key.slice(2)}`;
      pseudo[pseudoKey] = value;
    } else if (
      key === "children" ||
      key === "className" ||
      key === "style" ||
      key.startsWith("on")
    ) {
      rest[key as keyof UiStyleProps] = value;
    } else {
      base[key as keyof React.CSSProperties] = value as any;
    }
  });
  return { base, pseudo, rest };
};

export const Ui = <E extends React.ElementType = "div">(props: UiProps<E>) => {
  const { as, ref, ...restProps } = props;
  const Component = as || "div";
  const { base, pseudo, rest } = extractStyles(restProps as UiStyleProps);
  const combinedStyles = { ...base, ...pseudo };
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
