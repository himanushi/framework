import TextareaAutosize from "react-textarea-autosize";
import { Ui, type UiProps } from "~/core";
import {
  type ShortHandType,
  type WithShorthandProps,
  resolveShorthandProps,
} from "~/utils/shorthand";

const shortHands = {
  error: {
    borderColor: "red-300",
    __focus: {
      borderColor: "red-400",
      boxShadow: "0 0 0 1px #ef4444",
    },
    __hover: {
      borderColor: "red-500",
    },
  },
} as const satisfies ShortHandType;

const defaultProps: TextareaProps = {
  as: TextareaAutosize,
  w: "100%",
  px: "12px",
  py: "8px",
  radius: "6px",
  border: "1px solid",
  borderColor: "gray-200",
  backgroundColor: "white",
  outline: "none",
  fontSize: "14px",
  color: "gray-900",
  resize: "vertical",

  __placeholder: {
    color: "gray-400",
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
    color: "gray-400",
    __hover: {
      borderColor: "gray-200",
    },
  },
};

export type TextareaProps = WithShorthandProps<
  Omit<UiProps<"textarea">, "as"> & {
    minRows?: number;
    maxRows?: number;
    as?: any;
  },
  typeof shortHands
>;

/**
 * Textarea component with auto-resize functionality
 * @shorthands
 * error
 */
export const Textarea = (props: TextareaProps) => {
  const mergedProps = { ...defaultProps, ...props };
  const newProps = resolveShorthandProps(mergedProps, shortHands);
  return <Ui {...newProps} />;
};
