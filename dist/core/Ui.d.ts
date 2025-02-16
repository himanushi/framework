import { WithShorthandProps } from '../utils/shorthand';
import { BaseUiProps } from './BaseUi';
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
    readonly column: {
        readonly flexDirection: "column";
    };
    readonly p: "padding";
    readonly pt: "paddingTop";
    readonly pr: "paddingRight";
    readonly pb: "paddingBottom";
    readonly pl: "paddingLeft";
    readonly py: (value: string | number) => {
        paddingTop: string | number;
        paddingBottom: string | number;
    };
    readonly px: (value: string | number) => {
        paddingLeft: string | number;
        paddingRight: string | number;
    };
    readonly w: "width";
    readonly h: "height";
    readonly solid: {
        readonly border: "1px solid";
    };
    readonly radius: "borderRadius";
};
export type UiProps<E extends React.ElementType = React.ElementType> = WithShorthandProps<BaseUiProps<E>, typeof shortHands>;
export declare const Ui: (props: UiProps) => import("react/jsx-runtime").JSX.Element;
export {};
