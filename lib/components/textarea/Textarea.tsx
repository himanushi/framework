import TextareaAutosize from "react-textarea-autosize";
import { Ui, type UiProps } from "~/core";
import {
  type WithShorthandProps,
  resolveShorthandProps,
} from "~/utils/shorthand";
import { defaultTextProps, textShortHands } from "../text-field";

const defaultProps = {
  ...defaultTextProps,
  as: TextareaAutosize,
  px: "12px",
  py: "12px",
  resize: "none",
};

export type TextareaProps = WithShorthandProps<
  Omit<UiProps<"textarea">, "as"> & {
    minRows?: number;
    maxRows?: number;
    as?: any;
  },
  typeof textShortHands
>;

/**
 * Textarea component with auto-resize functionality
 * @shorthands
 * error minRows maxRows
 */
export const Textarea = (props: TextareaProps) => {
  const mergedProps = { ...defaultProps, ...props };
  const newProps = resolveShorthandProps(mergedProps, textShortHands);
  return <Ui {...newProps} />;
};
