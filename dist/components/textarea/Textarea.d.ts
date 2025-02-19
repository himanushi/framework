import { UiProps } from '../../core';
import { WithShorthandProps } from '../../utils/shorthand';
import { textShortHands } from '../text-field';
export type TextareaProps = WithShorthandProps<Omit<UiProps<"textarea">, "as"> & {
    minRows?: number;
    maxRows?: number;
    as?: any;
}, typeof textShortHands>;
/**
 * Textarea component with auto-resize functionality
 * @shorthands
 * error minRows maxRows
 */
export declare const Textarea: (props: TextareaProps) => import("react/jsx-runtime").JSX.Element;
