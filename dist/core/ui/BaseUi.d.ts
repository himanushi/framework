import { MotionProps } from 'motion/react';
import { breakpoints } from './values';
import type * as CSS from "csstype";
type BreakpointKeys = keyof typeof breakpoints;
export type ResponsiveProp<T> = T | Partial<Record<BreakpointKeys, T>>;
type ColorValue = string;
type ResponsiveColor = ColorValue | Partial<Record<BreakpointKeys, ColorValue>>;
type ExtendedCSSProperties = {
    [K in keyof CSS.Properties<string | number>]: K extends `${string}Color` ? ResponsiveColor : ResponsiveProp<CSS.Properties<string | number>[K]>;
};
export interface BaseUiStyleProps extends Partial<ExtendedCSSProperties> {
    className?: string;
}
type PseudoSelector = "__link" | "__visited" | "__hover" | "__active" | "__focus" | "__focus-visible" | "__focus-within" | "__checked" | "__disabled" | "__enabled" | "__required" | "__optional" | "__valid" | "__invalid" | "__in-range" | "__out-of-range" | "__read-only" | "__read-write" | "__placeholder-shown" | "__root" | "__empty" | "__first-child" | "__last-child" | "__first-of-type" | "__last-of-type" | "__only-child" | "__only-of-type" | "__nth-child" | "__nth-last-child" | "__nth-of-type" | "__nth-last-of-type" | "__target" | "__before" | "__after" | "__first-line" | "__first-letter" | "__selection" | "__marker" | "__backdrop" | "__placeholder";
export type PolymorphicProps<E extends React.ElementType> = {
    as?: E;
    ref?: React.Ref<any>;
} & Omit<React.ComponentPropsWithoutRef<E>, "className" | "color"> & BaseUiStyleProps & {
    [K in PseudoSelector]?: PolymorphicProps<any>;
};
export type BaseUiProps<E extends React.ElementType = "div"> = PolymorphicProps<E> & Omit<MotionProps, "children" | "style"> & {
    $motion?: boolean;
};
export declare const BaseUi: <E extends React.ElementType = import('react').ElementType<any, keyof import("react").JSX.IntrinsicElements>>(props: BaseUiProps<E>) => import("react/jsx-runtime").JSX.Element;
export {};
