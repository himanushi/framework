import type * as CSS from "csstype";
import type React from "react";
import type { BaseUiProps } from "~/core";

export type ShorthandProp<T> = T extends (value: infer U) => any
  ? U
  : string | number | boolean | undefined;

export type WithShorthandProps<P, S extends Record<string, any>> = P & {
  [K in keyof S]?: ShorthandProp<S[K]>;
};

type ShorthandResolver<T> = (
  value: T,
) => Record<string, string | number | BaseUiProps>;
type ShorthandMapping<T> =
  | ShorthandResolver<T>
  | Record<string, string | number | BaseUiProps>
  | string;

export type ShortHandType = Record<string, ShorthandMapping<any>>;

export const resolveShorthandProps = <E extends React.ElementType = "div">(
  props: BaseUiProps<E>,
  shortHands: Record<string, ShorthandMapping<any>>,
): BaseUiProps<E> => {
  let shorthandStyles: Record<string, any> = {};
  const restProps: Record<string, any> = {};

  Object.entries(props).forEach(([key, value]) => {
    if (key in shortHands && value !== undefined) {
      const mapping = shortHands[key];
      if (typeof mapping === "function") {
        // 関数の場合はそのまま呼び出して、置換処理は関数内で実装する
        shorthandStyles = { ...shorthandStyles, ...mapping(value) };
      } else if (typeof mapping === "string") {
        if (typeof value !== "boolean") {
          shorthandStyles[mapping as keyof CSS.Properties] = value;
        }
      } else if (typeof mapping === "object") {
        // static なマッピングの場合は、value が true のときのみ適用する
        if (value === true) {
          shorthandStyles = { ...shorthandStyles, ...mapping };
        }
        // value が true 以外の場合は何もしない
      }
    } else {
      restProps[key] = value;
    }
  });

  return { ...restProps, ...shorthandStyles } as BaseUiProps<E>;
};
