import { Ui, type UiProps } from "~/core";
import {
  type WithShorthandProps,
  resolveShorthandProps,
} from "~/utils/resolveShorthandProps";

const shortHands = {
  iCenter: { alignItems: "center" },
  iStart: { alignItems: "flex-start" },
  iEnd: { alignItems: "flex-end" },
  jCenter: { justifyContent: "center" },
  jStart: { justifyContent: "flex-start" },
  jEnd: { justifyContent: "flex-end" },
  jBetween: { justifyContent: "space-between" },

  p: "padding",
  pt: "paddingTop",
  pr: "paddingRight",
  pb: "paddingBottom",
  pl: "paddingLeft",

  m: "margin",
  mt: "marginTop",
  mr: "marginRight",
  mb: "marginBottom",
  ml: "marginLeft",

  w: "width",
  h: "height",
  column: { flexDirection: "column" },

  radius: "borderRadius",

  shadowS: {
    boxShadow: "0 2px 8px rgba(32, 37, 50, 8%),0 2px 4px rgba(32, 37, 50, 3%);",
  },
} as const;

const defaultProps: UiProps = {
  display: "flex",
};

export type BoxProps = WithShorthandProps<UiProps, typeof shortHands>;

export const Box = (props: BoxProps) => {
  const mergedProps = { ...defaultProps, ...props };
  const newProps = resolveShorthandProps(mergedProps, shortHands);
  return <Ui {...newProps} />;
};
