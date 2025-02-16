import type * as CSS from "csstype";
import type React from "react";
import type { BaseUiProps } from "~/core";

type ShorthandProp<T> = T extends string ? string | number : boolean;

export type WithShorthandProps<P, S extends Record<string, any>> = P & {
  [K in keyof S]?: ShorthandProp<S[K]>;
};

export type ShortHandType = Record<string, string | BaseUiProps>;

export const resolveShorthandProps = <E extends React.ElementType = "div">(
  props: BaseUiProps<E>,
  shortHands: ShortHandType,
): BaseUiProps<E> => {
  const shorthandStyles: Partial<CSS.Properties<string | number>> = {};
  const restProps: Record<string, any> = {};

  Object.entries(props).forEach(([key, value]) => {
    if (key in shortHands && value !== undefined) {
      const mapping = shortHands[key];
      if (typeof mapping === "string") {
        if (typeof value !== "boolean") {
          shorthandStyles[mapping as keyof CSS.Properties] = value;
        }
      } else if (typeof mapping === "object") {
        if (value === true) {
          Object.assign(shorthandStyles, mapping);
        }
      }
    } else {
      restProps[key] = value;
    }
  });

  return { ...restProps, ...shorthandStyles } as BaseUiProps<E>;
};
