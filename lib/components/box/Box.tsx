import { Ui, type UiProps } from "~/core";
import {
  type ShortHandType,
  type WithShorthandProps,
  resolveShorthandProps,
} from "~/utils/shorthand";

const shortHands = {} as const satisfies ShortHandType;

const defaultProps: BoxProps = {
  as: "div",
};

export type BoxProps<E extends React.ElementType = "div"> = WithShorthandProps<
  UiProps<E>,
  typeof shortHands
>;

/**
 * @shorthands
 * iCenter, iStart, iEnd, jCenter, jStart, jEnd, jBetween, col,
 * flexWrap, p, pt, pr, pb, pl, py, px, w, h, solid, radius, absolute, relative
 */
export const Box = <E extends React.ElementType = "div">(
  props: BoxProps<E>,
) => {
  const mergedProps = { ...defaultProps, ...props };
  const newProps = resolveShorthandProps(mergedProps, shortHands);
  return <Ui {...newProps} />;
};
