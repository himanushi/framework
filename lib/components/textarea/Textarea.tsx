import { css, cx } from "@emotion/css";
import { motion } from "motion/react";
import TextareaAutosize from "react-textarea-autosize";
import { shortHands as BaseShortHands, type BaseUiProps } from "~/core";
import { filterAllowedDOMProps, flattenStyles } from "~/core/ui/BaseUi";
import { allowedDOMPropKeys, breakpoints, colors } from "~/core/ui/values";
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
  ...BaseShortHands,
} as const satisfies ShortHandType;

const defaultProps: TextareaProps = {
  radius: "10px",
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
  Omit<BaseUiProps<"input">, "as"> &
    Omit<
      React.ComponentPropsWithoutRef<typeof TextareaAutosize>,
      keyof BaseUiProps<"input"> | "ref"
    > & {
      ref?: React.Ref<HTMLTextAreaElement>;
      minRows?: number;
      maxRows?: number;
      $motion?: boolean;
    },
  typeof shortHands
>;

/**
 * Textarea component with auto-resize functionality
 * @shorthands
 * error
 */
export const Textarea = (props: TextareaProps) => {
  const { ref, className, style, $motion, ...restProps } = props;
  const mergedProps = { ...defaultProps, ...restProps };
  const resolvedProps = resolveShorthandProps(mergedProps, shortHands);

  const { base, media, pseudo } = flattenStyles(
    resolvedProps,
    breakpoints,
    colors,
  );

  const allowedProps = filterAllowedDOMProps(resolvedProps, allowedDOMPropKeys);
  const combinedStyles = { ...base, ...pseudo, ...media };
  const generatedClass = css(combinedStyles);

  const Component = $motion ? motion(TextareaAutosize) : TextareaAutosize;

  return (
    <Component
      ref={ref}
      className={cx(generatedClass, className)}
      style={style as React.CSSProperties & { height?: number }}
      {...allowedProps}
    />
  );
};
