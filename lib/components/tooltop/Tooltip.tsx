import {
  type Placement,
  arrow,
  autoUpdate,
  flip,
  offset,
  shift,
  useFloating,
} from "@floating-ui/react";
import { useEffect, useRef, useState } from "react";
import { Ui, type UiProps } from "~/core";
import {
  type ShortHandType,
  type WithShorthandProps,
  resolveShorthandProps,
} from "~/utils/shorthand";

const shortHands = {} as const satisfies ShortHandType;

type TooltipProps = WithShorthandProps<
  {
    content: React.ReactNode;
    children: React.ReactNode;
    placement?: Placement;
    offset?: number;
    delay?: number;
    showArrow?: boolean;
  } & UiProps,
  typeof shortHands
>;

const defaultProps: Partial<TooltipProps> = {
  placement: "top",
  offset: 8,
  delay: 200,
  showArrow: true,
};

export const Tooltip = (props: TooltipProps) => {
  const {
    children,
    content,
    placement,
    offset: offsetDistance,
    delay,
    showArrow,
    ...rest
  } = { ...defaultProps, ...props };

  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const timeoutRef = useRef<number>(0);
  const arrowRef = useRef<HTMLDivElement>(null);

  const {
    x,
    y,
    strategy,
    refs,
    middlewareData,
    placement: finalPlacement,
  } = useFloating({
    placement,
    middleware: [
      offset(offsetDistance),
      flip(),
      shift(),
      showArrow ? arrow({ element: arrowRef }) : null,
    ].filter(Boolean),
    whileElementsMounted: autoUpdate,
  });

  useEffect(() => {
    if (isOpen) {
      timeoutRef.current = window.setTimeout(() => {
        setShowTooltip(true);
      }, delay);
    } else {
      setShowTooltip(false);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isOpen, delay]);

  const staticSide =
    {
      top: "bottom",
      right: "left",
      bottom: "top",
      left: "right",
    }[finalPlacement.split("-")[0]] || "top";

  const mergedProps = resolveShorthandProps(rest, shortHands);

  return (
    <>
      <Ui
        ref={refs.setReference}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
      >
        {children}
      </Ui>
      {showTooltip && (
        <Ui
          ref={refs.setFloating}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
            width: "max-content",
          }}
          backgroundColor="gray-800"
          color="white"
          p="8px 12px"
          radius="4px"
          fontSize="14px"
          zIndex={1000}
          {...mergedProps}
        >
          {content}
          {showArrow && (
            <Ui
              ref={arrowRef}
              style={{
                position: "absolute",
                left: middlewareData.arrow?.x ?? "",
                top: middlewareData.arrow?.y ?? "",
                [staticSide]: "-4px",
                width: "8px",
                height: "8px",
                transform: "rotate(45deg)",
              }}
              backgroundColor="gray-800"
            />
          )}
        </Ui>
      )}
    </>
  );
};
