import { css, cx } from "@emotion/css";
import { motion as Motion } from "motion/react";
import { allowedDOMPropKeys, breakpoints, colors } from "~/core/ui/values";
import {
  type BaseUiProps,
  type BaseUiStyleProps,
  filterAllowedDOMProps,
  flattenStyles,
} from "~/utils/styleProcessor";

export const BaseUi = <E extends React.ElementType = React.ElementType>(
  props: BaseUiProps<E>,
) => {
  const { as, ref, className, children, style, $motion, ...restProps } = props;

  const { base, media, pseudo } = flattenStyles(
    restProps as BaseUiStyleProps,
    breakpoints,
    colors,
  );

  const allowedProps = filterAllowedDOMProps(restProps, allowedDOMPropKeys);
  const combinedStyles = { ...base, ...pseudo, ...media };
  const generatedClass = css(combinedStyles);

  const Component = $motion ? Motion[(as as "div") ?? "div"] : as || "div";

  return (
    <Component
      ref={ref}
      {...allowedProps}
      className={cx(generatedClass, className)}
      style={style}
    >
      {children}
    </Component>
  );
};
