import { UiProps } from '../../core';
import { WithShorthandProps } from '../../utils/shorthand';
declare const shortHands: {
    readonly error: {
        readonly borderColor: "red-300";
        readonly __focus: {
            readonly borderColor: "red-400";
            readonly boxShadow: "0 0 0 1px #ef4444";
        };
        readonly __hover: {
            readonly borderColor: "red-500";
        };
    };
};
export type TextFieldProps = WithShorthandProps<UiProps<"input"> & {
    type?: "text" | "password" | "email" | "tel" | "number" | "search" | "url";
}, typeof shortHands>;
/**
 * @shorthands
 * error
 */
export declare const TextField: (props: TextFieldProps) => import("react/jsx-runtime").JSX.Element;
export {};
