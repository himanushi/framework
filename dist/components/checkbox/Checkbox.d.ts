import { UiProps } from '../../core/ui/Ui';
export type CheckboxProps = {
    checked?: boolean;
    indeterminate?: boolean;
} & UiProps<"input">;
export declare const Checkbox: (props: CheckboxProps) => import("react/jsx-runtime").JSX.Element;
