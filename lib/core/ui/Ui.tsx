import {
  type ShortHandType,
  type WithShorthandProps,
  resolveShorthandProps,
} from "~/utils/shorthand";
import type { BaseUiProps } from "~/utils/styleProcessor";
import { BaseUi } from "./BaseUi";

export const shortHands = {
  jCenter: { justifyContent: "center" },
  jStart: { justifyContent: "flex-start" },
  jEnd: { justifyContent: "flex-end" },
  jBetween: { justifyContent: "space-between" },
  jStretch: { justifyContent: "stretch" },

  jSelfCenter: { justifySelf: "center" },
  jSelfStart: { justifySelf: "flex-start" },
  jSelfEnd: { justifySelf: "flex-end" },
  jSelfStretch: { justifySelf: "stretch" },

  iCenter: { alignItems: "center" },
  iStart: { alignItems: "flex-start" },
  iEnd: { alignItems: "flex-end" },
  iStretch: { alignItems: "stretch" },

  iSelfCenter: { alignSelf: "center" },
  iSelfStart: { alignSelf: "flex-start" },
  iSelfEnd: { alignSelf: "flex-end" },
  iSelfStretch: { alignSelf: "stretch" },

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

  selectNone: { userSelect: "none" },
} as const satisfies ShortHandType;

const defaultProps = {
  as: "div",
  display: "flex",
};

export type UiProps<E extends React.ElementType = "div"> = WithShorthandProps<
  BaseUiProps<E>,
  typeof shortHands
>;

/**
 * @shorthands
 * jCenter, jStart, jEnd, jBetween, jStretch, jSelfCenter, jSelfStart, jSelfEnd, jSelfStretch,
 * iCenter, iStart, iEnd, iStretch, iSelfCenter, iSelfStart, iSelfEnd, iSelfStretch,
 * col, wrap, p, pt, pr, pb, pl, py, px, w, h, solid, radius, absolute, relative, selectNone
 */
export const Ui = <E extends React.ElementType = "div">(props: UiProps<E>) => {
  const mergedProps = { ...defaultProps, ...props };
  const newProps = resolveShorthandProps(mergedProps, shortHands);
  return <BaseUi {...newProps} />;
};
