import { Ui, type UiProps } from "~/core";
import {
  type ShortHandType,
  type WithShorthandProps,
  resolveShorthandProps,
} from "~/utils/shorthand";

export const textShortHands = {
  error: {
    borderColor: "alert-20",
    __focus: {
      borderColor: "alert-50",
      boxShadow: "0 0 0 1px #ef4444",
    },
    __hover: {
      borderColor: "alert-50",
    },
  },
} as const satisfies ShortHandType;

export const defaultTextProps: TextFieldProps = {
  as: "input",
  type: "text",
  w: "100%",
  h: "40px",
  px: "12px",
  radius: "6px",
  border: "1px solid",
  borderColor: "gray-20",
  backgroundColor: "white",
  outline: "none",
  fontSize: "14px",
  color: "gray-90",

  __placeholder: {
    color: "gray-35",
  },

  __hover: {
    borderColor: "gray-35",
  },

  __focus: {
    borderColor: "primary-50",
    boxShadow: "0 0 0 1px #3b82f6",
  },

  __disabled: {
    backgroundColor: "gray-20",
    cursor: "not-allowed",
    opacity: 0.7,
    color: "gray-50",
    __hover: {
      borderColor: "gray-10",
    },
  },
};

export type TextFieldProps = WithShorthandProps<
  UiProps<"input"> & {
    type?: "text" | "password" | "email" | "tel" | "number" | "search" | "url";
  },
  typeof textShortHands
>;

/**
 * @shorthands
 * error
 */
export const TextField = (props: TextFieldProps) => {
  const mergedProps = { ...defaultTextProps, ...props };
  const newProps = resolveShorthandProps(mergedProps, textShortHands);
  return <Ui {...newProps} />;
};
