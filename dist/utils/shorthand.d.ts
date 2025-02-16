import { default as React } from 'react';
import { BaseUiProps } from '../core';
export type ShorthandProp<T> = T extends (value: infer U) => any ? U : string | number | boolean | undefined;
export type WithShorthandProps<P, S extends Record<string, any>> = P & {
    [K in keyof S]?: ShorthandProp<S[K]>;
};
type ShorthandResolver<T> = (value: T) => Record<string, string | number | BaseUiProps>;
type ShorthandMapping<T> = ShorthandResolver<T> | Record<string, string | number | BaseUiProps> | string;
export type ShortHandType = Record<string, ShorthandMapping<any>>;
export declare const resolveShorthandProps: <E extends React.ElementType = "div">(props: BaseUiProps<E>, shortHands: Record<string, ShorthandMapping<any>>) => BaseUiProps<E>;
export {};
