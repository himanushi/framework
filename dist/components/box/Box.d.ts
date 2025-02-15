import { UiProps } from '../../core';
import { WithShorthandProps } from '../../utils/resolveShorthandProps';
declare const shortHands: {
    readonly iCenter: {
        readonly alignItems: "center";
    };
    readonly iStart: {
        readonly alignItems: "flex-start";
    };
    readonly iEnd: {
        readonly alignItems: "flex-end";
    };
    readonly jCenter: {
        readonly justifyContent: "center";
    };
    readonly jStart: {
        readonly justifyContent: "flex-start";
    };
    readonly jEnd: {
        readonly justifyContent: "flex-end";
    };
    readonly jBetween: {
        readonly justifyContent: "space-between";
    };
    readonly p: "padding";
    readonly pt: "paddingTop";
    readonly pr: "paddingRight";
    readonly pb: "paddingBottom";
    readonly pl: "paddingLeft";
    readonly m: "margin";
    readonly mt: "marginTop";
    readonly mr: "marginRight";
    readonly mb: "marginBottom";
    readonly ml: "marginLeft";
    readonly w: "width";
    readonly h: "height";
    readonly column: {
        readonly flexDirection: "column";
    };
    readonly radius: "borderRadius";
    readonly shadowS: {
        readonly boxShadow: "0 2px 8px rgba(32, 37, 50, 8%),0 2px 4px rgba(32, 37, 50, 3%);";
    };
};
export type BoxProps = WithShorthandProps<UiProps, typeof shortHands>;
export declare const Box: (props: BoxProps) => import("react/jsx-runtime").JSX.Element;
export {};
