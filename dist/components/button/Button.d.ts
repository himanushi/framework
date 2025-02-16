import { WithShorthandProps } from '../../utils/resolveShorthandProps';
import { BoxProps } from '../box';
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
    };
};
export type ButtonProps = WithShorthandProps<BoxProps<"button">, typeof shortHands>;
export declare const Button: (props: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
