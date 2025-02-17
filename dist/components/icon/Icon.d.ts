import { UiProps } from '../../core';
import { WithShorthandProps } from '../../utils/shorthand';
declare const shortHands: {
    readonly size: "fontSize";
};
export type IconProps = WithShorthandProps<UiProps<"span">, typeof shortHands>;
/**
 * @shorthands
 * size
 */
export declare const Icon: (props: IconProps) => import("react/jsx-runtime").JSX.Element;
export {};
