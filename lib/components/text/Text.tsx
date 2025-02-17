import { Ui, type UiProps } from "~/core";
import {
  type ShortHandType,
  type WithShorthandProps,
  resolveShorthandProps,
} from "~/utils/shorthand";

const shortHands = {
  bold: { fontWeight: "bold" },
  nowrap: { whiteSpace: "nowrap" },
} as const satisfies ShortHandType;

const defaultProps: TextProps = {
  display: "inline",
  color: "gray-900",
  fontWeight: "normal",
  as: "span",
};

export type TextProps = WithShorthandProps<UiProps<"span">, typeof shortHands>;

/**
 * @shorthands
 * bold, nowrap
 */
export const Text = (props: TextProps) => {
  const newProps = resolveShorthandProps(
    { ...defaultProps, ...props },
    shortHands,
  );
  return <Ui {...newProps} />;
};
