import { UiProps } from '../../core';
import { WithShorthandProps } from '../../utils/shorthand';
declare const shortHands: {
    readonly primary: {
        readonly backgroundColor: "primary-20";
        readonly color: "white";
        readonly __hover: {
            readonly backgroundColor: "primary-35";
        };
        readonly __active: {
            readonly backgroundColor: "primary-50";
        };
        readonly __disabled: {
            readonly opacity: 0.5;
            readonly cursor: "not-allowed";
            readonly __hover: {
                readonly backgroundColor: "primary-20";
            };
            readonly __active: {
                readonly backgroundColor: "primary-20";
            };
        };
    };
    readonly secondary: {
        readonly backgroundColor: "gray-20";
        readonly color: "white";
        readonly __hover: {
            readonly backgroundColor: "gray-35";
        };
        readonly __active: {
            readonly backgroundColor: "gray-50";
        };
        readonly __disabled: {
            readonly opacity: 0.5;
            readonly cursor: "not-allowed";
            readonly __hover: {
                readonly backgroundColor: "gray-20";
            };
            readonly __active: {
                readonly backgroundColor: "gray-20";
            };
        };
    };
};
declare const sizePaddings: {
    readonly s: {
        readonly xs: "8px 12px";
        readonly md: "8px 12px";
    };
    readonly m: {
        readonly xs: "12px 16px";
        readonly md: "12px 16px";
    };
    readonly l: {
        readonly xs: "16px 24px";
        readonly md: "16px 24px";
    };
};
export type ButtonProps = WithShorthandProps<UiProps<"button"> & {
    size?: keyof typeof sizePaddings;
}, typeof shortHands>;
/**
 * @shorthands
 * primary, secondary
 */
export declare const Button: (props: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
