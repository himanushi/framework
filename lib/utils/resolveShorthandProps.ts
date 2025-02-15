import type * as CSS from "csstype";
import type React from "react";
import type { UiProps } from "~/core";

export type WithShorthandProps<P, S extends Record<string, any>> = P & {
  [K in keyof S]?: boolean;
};

type ShortHandType = Record<string, UiProps>;

export const resolveShorthandProps = <E extends React.ElementType = "div">(
  props: UiProps<E>,
  shortHands: ShortHandType,
): UiProps<E> => {
  const shorthandStyles: Partial<CSS.Properties<string | number>> = {};
  const restProps: Record<string, any> = {};

  Object.entries(props).forEach(([key, value]) => {
    if (key in shortHands && value) {
      Object.assign(shorthandStyles, shortHands[key]);
    } else {
      restProps[key] = value;
    }
  });

  return { ...shorthandStyles, ...restProps } as UiProps<E>;
};
