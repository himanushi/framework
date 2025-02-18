import { UiProps } from '../../core';
import { WithShorthandProps } from '../../utils/shorthand';
export type TextSize = "5s" | "4s" | "3s" | "2s" | "s" | "m" | "l" | "2l" | "3l" | "4l" | "5l" | "6l" | "7l";
declare const shortHands: {
    readonly bold: {
        readonly fontWeight: "bold";
    };
    readonly nowrap: {
        readonly whiteSpace: "nowrap";
    };
};
export type TextProps = WithShorthandProps<Omit<UiProps<"span">, "fontSize" | "lineHeight"> & {
    size?: TextSize;
}, typeof shortHands>;
export declare const Text: (props: TextProps) => import("react/jsx-runtime").JSX.Element;
export {};
