import { default as React } from 'react';
import type * as CSS from "csstype";
type BreakpointKeys = "xs" | "sm" | "md" | "lg" | "xl";
export type ResponsiveProp<T> = T | Partial<Record<BreakpointKeys, T>>;
type ColorValue = string;
type ResponsiveColor = ColorValue | Partial<Record<BreakpointKeys, ColorValue>>;
type ExtendedCSSProperties = {
    [K in keyof CSS.Properties<string | number>]: K extends `${string}Color` ? ResponsiveColor : ResponsiveProp<CSS.Properties<string | number>[K]>;
};
export interface BaseUiStyleProps extends Partial<ExtendedCSSProperties> {
    className?: string;
}
type PseudoClass = "__link" | "__visited" | "__hover" | "__active" | "__focus" | "__focus-visible" | "__focus-within" | "__checked" | "__disabled" | "__enabled" | "__required" | "__optional" | "__valid" | "__invalid" | "__in-range" | "__out-of-range" | "__read-only" | "__read-write" | "__placeholder-shown" | "__root" | "__empty" | "__first-child" | "__last-child" | "__first-of-type" | "__last-of-type" | "__only-child" | "__only-of-type" | "__nth-child" | "__nth-last-child" | "__nth-of-type" | "__nth-last-of-type" | "__target";
export type PolymorphicProps<E extends React.ElementType> = {
    as?: E;
    ref?: React.Ref<any>;
} & Omit<React.ComponentPropsWithoutRef<E>, "className"> & BaseUiStyleProps & {
    [K in PseudoClass]?: BaseUiStyleProps;
};
export type BaseUiProps<E extends React.ElementType = "div"> = PolymorphicProps<E>;
export declare const BaseUi: <E extends React.ElementType = React.ElementType<any, keyof React.JSX.IntrinsicElements>>(props: BaseUiProps<E>) => import("react/jsx-runtime").JSX.Element;
export {};
