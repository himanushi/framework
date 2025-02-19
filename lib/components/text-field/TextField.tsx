import { Ui, type UiProps } from "~/core";
import {
  type ShortHandType,
  type WithShorthandProps,
  resolveShorthandProps,
} from "~/utils/shorthand";

const shortHands = {
  error: {
    borderColor: "red-500",
    __focus: {
      borderColor: "red-500",
      boxShadow: "0 0 0 1px #ef4444",
    },
  },
} as const satisfies ShortHandType;

const defaultProps: TextFieldProps = {
  as: "input",
  type: "text",
  w: "100%",
  h: "40px",
  px: "12px",
  radius: "6px",
  border: "1px solid",
  borderColor: "gray-200",
  backgroundColor: "white",
  outline: "none",
  fontSize: "14px",
  color: "gray-900",

  __placeholder: {
    color: "red-400",
  },

  __hover: {
    borderColor: "gray-300",
  },

  __focus: {
    borderColor: "blue-500",
    boxShadow: "0 0 0 1px #3b82f6",
  },

  __disabled: {
    backgroundColor: "gray-50",
    cursor: "not-allowed",
    opacity: 0.7,
    __hover: {
      borderColor: "gray-200",
    },
  },
};

export type TextFieldProps = WithShorthandProps<
  UiProps<"input"> & {
    type?: "text" | "password" | "email" | "tel" | "number" | "search" | "url";
  },
  typeof shortHands
>;

/**
 * @shorthands
 * error
 */
export const TextField = (props: TextFieldProps) => {
  const mergedProps = { ...defaultProps, ...props };
  const newProps = resolveShorthandProps(mergedProps, shortHands);
  return <Ui {...newProps} />;
};
