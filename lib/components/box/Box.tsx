import { Ui, type UiProps } from "~/core";
import {
  type ShortHandType,
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

  solid: { border: "1px solid" },

  radius: "borderRadius",
} as const satisfies ShortHandType;

const defaultProps: UiProps = {
  display: "flex",
};

export type BoxProps<E extends React.ElementType = React.ElementType> =
  WithShorthandProps<UiProps<E>, typeof shortHands>;

export const Box = (props: BoxProps) => {
  const mergedProps = { ...defaultProps, ...props };
  const newProps = resolveShorthandProps(mergedProps, shortHands);
  return <Ui {...newProps} />;
};
