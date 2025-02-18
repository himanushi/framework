import { UiProps } from '../../core';
import { WithShorthandProps } from '../../utils/shorthand';
declare const shortHands: {};
export type BoxProps<E extends React.ElementType = "div"> = WithShorthandProps<UiProps<E>, typeof shortHands>;
/**
 * @shorthands
 * iCenter, iStart, iEnd, jCenter, jStart, jEnd, jBetween, col,
 * flexWrap, p, pt, pr, pb, pl, py, px, w, h, solid, radius, absolute, relative
 */
export declare const Box: <E extends React.ElementType = "div">(props: BoxProps<E>) => import("react/jsx-runtime").JSX.Element;
export {};
