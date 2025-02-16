import { UiProps } from '../../core';
import { WithShorthandProps } from '../../utils/shorthand';
declare const shortHands: {};
export type BoxProps = WithShorthandProps<UiProps<"div">, typeof shortHands>;
export declare const Box: (props: BoxProps) => import("react/jsx-runtime").JSX.Element;
export {};
