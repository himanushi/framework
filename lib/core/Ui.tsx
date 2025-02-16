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

  column: { flexDirection: "column" },

  p: "padding",
  pt: "paddingTop",
  pr: "paddingRight",
  pb: "paddingBottom",
  pl: "paddingLeft",

  w: "width",
  h: "height",

  solid: { border: "1px solid" },

  radius: "borderRadius",
} as const satisfies ShortHandType;

const defaultProps: UiProps = {
  display: "flex",
};

export type UiProps<E extends React.ElementType = React.ElementType> =
  WithShorthandProps<BaseUiProps<E>, typeof shortHands>;

export const Ui = (props: UiProps) => {
  const mergedProps = { ...defaultProps, ...props };
  const newProps = resolveShorthandProps(mergedProps, shortHands);
  return <BaseUi {...newProps} />;
};
