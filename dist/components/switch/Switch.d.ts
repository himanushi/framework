import { UiProps } from '../../core/ui/Ui';
type SwitchSizes = "s" | "m" | "l";
export type SwitchProps = {
    checked?: boolean;
    switchSize?: SwitchSizes;
} & UiProps<"input">;
export declare const Switch: (props: SwitchProps) => import("react/jsx-runtime").JSX.Element;
export {};
