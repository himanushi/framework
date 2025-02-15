import { Ui, type UiProps } from "~/core";
import {
  type WithShorthandProps,
  resolveShorthandProps,
} from "~/utils/resolveShorthandProps";

const shortHands = {
  itemsCenter: { alignItems: "center" },
  itemsStart: { alignItems: "flex-start" },
  itemsEnd: { alignItems: "flex-end" },
  justifyCenter: { justifyContent: "center" },
  justifyStart: { justifyContent: "flex-start" },
  justifyEnd: { justifyContent: "flex-end" },
  p: "padding",
} as const;

const defaultProps = {
  display: "flex",
};

export type BoxProps = WithShorthandProps<UiProps, typeof shortHands>;

export const Box = (props: BoxProps) => {
  const mergedProps = { ...defaultProps, ...props };
  const newProps = resolveShorthandProps(mergedProps, shortHands);
  return <Ui {...newProps} />;
};
