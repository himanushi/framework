import { Ui, type UiProps } from "~/core";
import {
  type ShortHandType,
  type WithShorthandProps,
  resolveShorthandProps,
} from "~/utils/resolveShorthandProps";

const shortHands = {
  primary: {
    backgroundColor: "blue-500",
    color: "white",
    __hover: {
      backgroundColor: "blue-600",
    },
    __active: {
      backgroundColor: "blue-700",
    },
  },

  secondary: {
    backgroundColor: "gray-500",
    color: "white",
    __hover: {
      backgroundColor: "gray-600",
    },
    __active: {
      backgroundColor: "gray-700",
    },
  },
} as const satisfies ShortHandType;

const defaultProps: ButtonProps = {
  cursor: "pointer",
  __disabled: {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  radius: "6px",
  backgroundColor: "gray-100",
  border: "none",
  as: "button",
  solid: true,
  borderColor: "gray-200",
  padding: { xs: "12px", md: "20px" },
  __hover: {
    backgroundColor: "gray-200",
  },
  __active: {
    backgroundColor: "gray-300",
  },
};

export type ButtonProps = WithShorthandProps<
  UiProps<"button">,
  typeof shortHands
>;

export const Button = (props: ButtonProps) => {
  const mergedProps = { ...defaultProps, ...props };
  const newProps = resolveShorthandProps(mergedProps, shortHands);
  return <Ui {...newProps} />;
};
