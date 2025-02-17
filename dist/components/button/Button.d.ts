import { UiProps } from '../../core';
import { WithShorthandProps } from '../../utils/shorthand';
declare const shortHands: {
    readonly primary: {
        readonly backgroundColor: "blue-500";
        readonly color: "white";
        readonly __hover: {
            readonly backgroundColor: "blue-600";
        };
        readonly __active: {
            readonly backgroundColor: "blue-700";
        };
        readonly __disabled: {
            readonly opacity: 0.5;
            readonly cursor: "not-allowed";
            readonly __hover: {
                readonly backgroundColor: "blue-500";
            };
            readonly __active: {
                readonly backgroundColor: "blue-500";
            };
        };
    };
    readonly secondary: {
        readonly backgroundColor: "gray-500";
        readonly color: "white";
        readonly __hover: {
            readonly backgroundColor: "gray-600";
        };
        readonly __active: {
            readonly backgroundColor: "gray-700";
        };
        readonly __disabled: {
            readonly opacity: 0.5;
            readonly cursor: "not-allowed";
            readonly __hover: {
                readonly backgroundColor: "gray-500";
            };
            readonly __active: {
                readonly backgroundColor: "gray-500";
            };
        };
    };
};
export type ButtonProps = WithShorthandProps<UiProps<"button">, typeof shortHands>;
/**
 * @shorthands
 * primary, secondary
 */
export declare const Button: (props: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
