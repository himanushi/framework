import {
  FloatingPortal,
  type Placement,
  arrow,
  autoUpdate,
  flip,
  offset,
  shift,
  useFloating,
} from "@floating-ui/react";
import { AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Ui, type UiProps } from "~/core";
import { zIndexes } from "~/utils/constants";
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
  delay: 0,
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
  const [shouldRender, setShouldRender] = useState(false);
  const showTimeoutRef = useRef<number>(0);
  const hideTimeoutRef = useRef<number>(0);
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
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
      showTimeoutRef.current = window.setTimeout(() => {
        setShouldRender(true);
      }, delay);
    } else {
      if (showTimeoutRef.current) {
        clearTimeout(showTimeoutRef.current);
      }
      setShouldRender(false);
    }

    return () => {
      if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
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
      <FloatingPortal>
        <AnimatePresence>
          {shouldRender && (
            <Ui
              ref={refs.setFloating}
              style={{
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
                width: "max-content",
                pointerEvents: "none",
              }}
            >
              <Ui
                backgroundColor="gray-50"
                color="white"
                p="8px 12px"
                radius="4px"
                fontSize="14px"
                zIndex={zIndexes.tooltip}
                {...mergedProps}
                $motion
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.05 }}
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
                    backgroundColor="gray-50"
                  />
                )}
              </Ui>
            </Ui>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </>
  );
};
