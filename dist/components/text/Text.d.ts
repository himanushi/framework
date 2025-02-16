import { UiProps } from '../../core';
import { WithShorthandProps } from '../../utils/shorthand';
declare const shortHands: {
    readonly bold: {
        readonly fontWeight: "bold";
    };
    readonly nowrap: {
        readonly whiteSpace: "nowrap";
    };
};
export type TextProps = WithShorthandProps<UiProps<"span">, typeof shortHands>;
export declare const Text: (props: TextProps) => import("react/jsx-runtime").JSX.Element;
export {};
