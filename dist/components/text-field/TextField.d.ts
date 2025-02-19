import { UiProps } from '../../core';
import { WithShorthandProps } from '../../utils/shorthand';
export declare const textShortHands: {
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
export declare const defaultTextProps: TextFieldProps;
export type TextFieldProps = WithShorthandProps<UiProps<"input"> & {
    type?: "text" | "password" | "email" | "tel" | "number" | "search" | "url";
}, typeof textShortHands>;
/**
 * @shorthands
 * error
 */
export declare const TextField: (props: TextFieldProps) => import("react/jsx-runtime").JSX.Element;
