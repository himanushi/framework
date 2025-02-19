import { WithShorthandProps } from '../../utils/shorthand';
import { BaseUiProps } from '../../utils/styleProcessor';
export declare const shortHands: {
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
    readonly jStretch: {
        readonly justifyContent: "stretch";
    };
    readonly jSelfCenter: {
        readonly justifySelf: "center";
    };
    readonly jSelfStart: {
        readonly justifySelf: "flex-start";
    };
    readonly jSelfEnd: {
        readonly justifySelf: "flex-end";
    };
    readonly jSelfStretch: {
        readonly justifySelf: "stretch";
    };
    readonly iCenter: {
        readonly alignItems: "center";
    };
    readonly iStart: {
        readonly alignItems: "flex-start";
    };
    readonly iEnd: {
        readonly alignItems: "flex-end";
    };
    readonly iStretch: {
        readonly alignItems: "stretch";
    };
    readonly iSelfCenter: {
        readonly alignSelf: "center";
    };
    readonly iSelfStart: {
        readonly alignSelf: "flex-start";
    };
    readonly iSelfEnd: {
        readonly alignSelf: "flex-end";
    };
    readonly iSelfStretch: {
        readonly alignSelf: "stretch";
    };
    readonly col: {
        readonly flexDirection: "column";
    };
    readonly wrap: {
        readonly flexWrap: "wrap";
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
    readonly absolute: {
        readonly position: "absolute";
    };
    readonly relative: {
        readonly position: "relative";
    };
    readonly selectNone: {
        readonly userSelect: "none";
    };
};
export type UiProps<E extends React.ElementType = "div"> = WithShorthandProps<BaseUiProps<E>, typeof shortHands>;
/**
 * @shorthands
 * jCenter, jStart, jEnd, jBetween, jStretch, jSelfCenter, jSelfStart, jSelfEnd, jSelfStretch,
 * iCenter, iStart, iEnd, iStretch, iSelfCenter, iSelfStart, iSelfEnd, iSelfStretch,
 * col, wrap, p, pt, pr, pb, pl, py, px, w, h, solid, radius, absolute, relative, selectNone
 */
export declare const Ui: <E extends React.ElementType = "div">(props: UiProps<E>) => import("react/jsx-runtime").JSX.Element;
