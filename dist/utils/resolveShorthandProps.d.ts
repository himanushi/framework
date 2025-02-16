import { default as React } from 'react';
import { UiProps } from '../core';
type ShorthandProp<T> = T extends string ? string | number : boolean;
export type WithShorthandProps<P, S extends Record<string, any>> = P & {
    [K in keyof S]?: ShorthandProp<S[K]>;
};
export type ShortHandType = Record<string, string | UiProps>;
export declare const resolveShorthandProps: <E extends React.ElementType = "div">(props: UiProps<E>, shortHands: ShortHandType) => UiProps<E>;
export {};
