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
export type TextareaProps = WithShorthandProps<Omit<UiProps<"textarea">, "as"> & {
    minRows?: number;
    maxRows?: number;
    as?: any;
}, typeof shortHands>;
/**
 * Textarea component with auto-resize functionality
 * @shorthands
 * error minRows maxRows
 */
export declare const Textarea: (props: TextareaProps) => import("react/jsx-runtime").JSX.Element;
export {};
