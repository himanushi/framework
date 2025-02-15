import {
  type ShortHandType,
  type WithShorthandProps,
  resolveShorthandProps,
} from "~/utils/resolveShorthandProps";
import { Box, type BoxProps } from "../box";

const shortHands = {
  size5s: {
    fontSize: { xs: "10px", lg: "11px" },
    lineHeight: { xs: "14px", lg: "14px" },
  },
  size4s: {
    fontSize: { xs: "11px", lg: "12px" },
    lineHeight: { xs: "14px", lg: "16px" },
  },
  size3s: {
    fontSize: { xs: "12px", lg: "13px" },
    lineHeight: { xs: "16px", lg: "18px" },
  },
  size2s: {
    fontSize: { xs: "13px", lg: "14px" },
    lineHeight: { xs: "18px", lg: "20px" },
  },
  sizeS: {
    fontSize: { xs: "14px", lg: "16px" },
    lineHeight: { xs: "20px", lg: "24px" },
  },
  sizeM: {
    fontSize: { xs: "16px", lg: "18px" },
    lineHeight: { xs: "24px", lg: "26px" },
  },
  sizeL: {
    fontSize: { xs: "18px", lg: "20px" },
    lineHeight: { xs: "26px", lg: "28px" },
  },
  size2L: {
    fontSize: { xs: "20px", lg: "22px" },
    lineHeight: { xs: "28px", lg: "30px" },
  },
  size3L: {
    fontSize: { xs: "22px", lg: "24px" },
    lineHeight: { xs: "30px", lg: "34px" },
  },
  size4L: {
    fontSize: { xs: "24px", lg: "28px" },
    lineHeight: { xs: "34px", lg: "38px" },
  },
  size5L: {
    fontSize: { xs: "28px", lg: "32px" },
    lineHeight: { xs: "38px", lg: "42px" },
  },
  size6L: {
    fontSize: { xs: "32px", lg: "36px" },
    lineHeight: { xs: "42px", lg: "46px" },
  },
  size7L: {
    fontSize: { xs: "36px", lg: "40px" },
    lineHeight: { xs: "46px", lg: "50px" },
  },

  bold: { fontWeight: 700 },
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
