import {
  type ShortHandType,
  type WithShorthandProps,
  resolveShorthandProps,
} from "~/utils/shorthand";
import { BaseUi, type BaseUiProps } from "./BaseUi";

const shortHands = {
  iCenter: { alignItems: "center" },
  iStart: { alignItems: "flex-start" },
  iEnd: { alignItems: "flex-end" },
  jCenter: { justifyContent: "center" },
  jStart: { justifyContent: "flex-start" },
  jEnd: { justifyContent: "flex-end" },
  jBetween: { justifyContent: "space-between" },

  col: { flexDirection: "column" },
  wrap: { flexWrap: "wrap" },

  p: "padding",
  pt: "paddingTop",
  pr: "paddingRight",
  pb: "paddingBottom",
  pl: "paddingLeft",
  py: (value: string | number) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  px: (value: string | number) => ({
    paddingLeft: value,
    paddingRight: value,
  }),

  w: "width",
  h: "height",

  solid: { border: "1px solid" },
  radius: "borderRadius",

  absolute: { position: "absolute" },
  relative: { position: "relative" },
} as const satisfies ShortHandType;

const defaultProps = {
  display: "flex",
};

export type UiProps<E extends React.ElementType = "div"> = WithShorthandProps<
  BaseUiProps<E>,
  typeof shortHands
>;

/**
 * @shorthands
 * iCenter, iStart, iEnd, jCenter, jStart, jEnd, jBetween, col,
 * flexWrap, p, pt, pr, pb, pl, py, px, w, h, solid, radius, absolute, relative
 */
export const Ui = <E extends React.ElementType = "div">(props: UiProps<E>) => {
  const mergedProps = { ...defaultProps, ...props };
  const newProps = resolveShorthandProps(mergedProps, shortHands);
  return <BaseUi {...newProps} />;
};
