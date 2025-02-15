import { default as React } from 'react';
import type * as CSS from "csstype";
type ResponsiveProp<T> = T | {
    [key: string]: T;
};
type PseudoKeys = "__hover" | "__active" | "__focus" | "__visited" | "__link" | "__first-child" | "__last-child" | "__nth-child" | "__nth-last-child" | "__first-of-type" | "__last-of-type" | "__nth-of-type" | "__nth-last-of-type" | "__checked" | "__disabled" | "__enabled" | "__required" | "__optional" | "__read-only" | "__read-write" | "__empty" | "__target" | "__lang" | "__not";
type PseudoStyles = {
    [K in PseudoKeys]?: CSS.Properties<string | number>;
};
interface UiStyleProps extends Partial<{
    [K in keyof CSS.Properties<string | number>]: ResponsiveProp<CSS.Properties<string | number>[K]>;
}>, PseudoStyles {
    [key: `__${string}`]: CSS.Properties<string | number> | undefined;
    htmTranslate?: "yes" | "no";
    className?: string;
}
type PolymorphicProps<E extends React.ElementType> = {
    as?: E;
    ref?: React.Ref<any>;
} & React.ComponentPropsWithoutRef<E> & UiStyleProps;
export type UiProps<E extends React.ElementType = "div"> = PolymorphicProps<E>;
export declare const Ui: <E extends React.ElementType = "div">(props: UiProps<E>) => import("react/jsx-runtime").JSX.Element;
export {};
