import { UiProps } from '../../core';
import { WithShorthandProps } from '../../utils/shorthand';
declare const shortHands: {
    readonly error: {
        readonly borderColor: "alert-20";
        readonly __focus: {
            readonly borderColor: "alert-50";
            readonly boxShadow: "0 0 0 1px #ef4444";
        };
        readonly __hover: {
            readonly borderColor: "alert-50";
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
