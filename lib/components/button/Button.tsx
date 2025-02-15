import {
  type ShortHandType,
  type WithShorthandProps,
  resolveShorthandProps,
} from "~/utils/resolveShorthandProps";
import { Box, type BoxProps } from "../box";

const shortHands = {
  primary: {
    backgroundColor: "blue-500",
    color: "white",
    _hover: {
      backgroundColor: "blue-600",
    },
    _active: {
      backgroundColor: "blue-700",
    },
  },

  secondary: {
    backgroundColor: "gray-500",
    color: "white",
    _hover: {
      backgroundColor: "gray-600",
    },
    _active: {
      backgroundColor: "gray-700",
    },
  },
} as const satisfies ShortHandType;

const defaultProps: BoxProps<"button"> = {
  radius: "6px",
  backgroundColor: "gray-100",
  border: "none",
  as: "button",
  padding: { xs: "12px", md: "20px" },
  _hover: {
    backgroundColor: "gray-200",
  },
  _active: {
    backgroundColor: "gray-300",
  },
};

export type ButtonProps = WithShorthandProps<BoxProps, typeof shortHands>;

export const Button = (props: ButtonProps) => {
  const mergedProps = { ...defaultProps, ...props };
  const newProps = resolveShorthandProps(mergedProps, shortHands);
  return <Box {...newProps} />;
};
