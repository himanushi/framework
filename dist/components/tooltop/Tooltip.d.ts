import { Placement } from '@floating-ui/react';
import { UiProps } from '../../core';
import { WithShorthandProps } from '../../utils/shorthand';
declare const shortHands: {};
type TooltipProps = WithShorthandProps<{
    content: React.ReactNode;
    children: React.ReactNode;
    placement?: Placement;
    offset?: number;
    delay?: number;
    showArrow?: boolean;
} & UiProps, typeof shortHands>;
export declare const Tooltip: (props: TooltipProps) => import("react/jsx-runtime").JSX.Element;
export {};
