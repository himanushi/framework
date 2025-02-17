import { default as React } from 'react';
import { BaseUiProps, ResponsiveProp } from '../core';
type ShorthandFunctionProp<T> = T extends (value: infer U) => any ? U : boolean;
type ShorthandProp<T> = T extends string ? ResponsiveProp<string | number | undefined> : ShorthandFunctionProp<T>;
export type WithShorthandProps<P, S extends Record<string, any>> = P & {
    [K in keyof S]?: ShorthandProp<S[K]>;
};
type ShorthandResolver<T> = (value: T) => Record<string, string | number | BaseUiProps | ResponsiveProp<any>>;
type ShorthandMapping<T> = ShorthandResolver<T> | Record<string, string | number | BaseUiProps | ResponsiveProp<any>> | string;
export type ShortHandType = Record<string, ShorthandMapping<any>>;
export declare const resolveShorthandProps: <E extends React.ElementType = "div">(props: BaseUiProps<E>, shortHands: Record<string, ShorthandMapping<any>>) => BaseUiProps<E>;
export {};
