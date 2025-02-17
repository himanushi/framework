import { UiProps } from '../../core';
import { WithShorthandProps } from '../../utils/shorthand';
declare const shortHands: {};
export type BoxProps = WithShorthandProps<UiProps<"div">, typeof shortHands>;
/**
 * @shorthands
 * iCenter, iStart, iEnd, jCenter, jStart, jEnd, jBetween, col,
 * flexWrap, p, pt, pr, pb, pl, py, px, w, h, solid, radius, absolute, relative
 */
export declare const Box: (props: BoxProps) => import("react/jsx-runtime").JSX.Element;
export {};
