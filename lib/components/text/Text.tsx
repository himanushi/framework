import {
  type ShortHandType,
  type WithShorthandProps,
  resolveShorthandProps,
} from "~/utils/resolveShorthandProps";
import { Box, type BoxProps } from "../box";

const shortHands = {
  bold: { fontWeight: "bold" },
  nowrap: { whiteSpace: "nowrap" },
} as const satisfies ShortHandType;

const defaultProps: BoxProps = {
  display: "inline",
  color: "gray-900",
  fontWeight: "normal",
  as: "span",
};

export type TextProps = WithShorthandProps<BoxProps, typeof shortHands>;

export const Text = (props: TextProps) => {
  const mergedProps = { ...defaultProps, ...props };
  const newProps = resolveShorthandProps(mergedProps, shortHands);
  return <Box {...newProps} />;
};
