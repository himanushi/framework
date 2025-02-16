import { WithShorthandProps } from '../../utils/resolveShorthandProps';
import { BoxProps } from '../box';
declare const shortHands: {
    readonly bold: {
        readonly fontWeight: "bold";
    };
    readonly nowrap: {
        readonly whiteSpace: "nowrap";
    };
};
export type TextProps = WithShorthandProps<BoxProps<"span">, typeof shortHands>;
export declare const Text: (props: TextProps) => import("react/jsx-runtime").JSX.Element;
export {};
