import { default as React } from 'react';
import type * as CSS from "csstype";
type BreakpointKeys = "xs" | "sm" | "md" | "lg" | "xl";
type ResponsiveProp<T> = T | Partial<Record<BreakpointKeys, T>>;
type ColorValue = string;
type ResponsiveColor = ColorValue | Partial<Record<BreakpointKeys, ColorValue>>;
type ExtendedCSSProperties = {
    [K in keyof CSS.Properties<string | number>]: K extends `${string}Color` ? ResponsiveColor : ResponsiveProp<CSS.Properties<string | number>[K]>;
};
export interface UiStyleProps extends Partial<ExtendedCSSProperties> {
    [key: `__${string}`]: UiStyleProps | undefined;
    className?: string;
}
export type PolymorphicProps<E extends React.ElementType> = {
    as?: E;
    ref?: React.Ref<any>;
} & Omit<React.ComponentPropsWithoutRef<E>, "className"> & UiStyleProps;
export type UiProps<E extends React.ElementType = "div"> = PolymorphicProps<E>;
export declare const Ui: <E extends React.ElementType = "div">(props: UiProps<E>) => import("react/jsx-runtime").JSX.Element;
export {};
