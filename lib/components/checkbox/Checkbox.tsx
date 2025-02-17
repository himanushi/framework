import { useEffect, useRef } from "react";
import { defaultColors } from "~/core";
import { Ui, type UiProps } from "~/core/ui/Ui";

export type CheckboxProps = {
  checked?: boolean;
  indeterminate?: boolean;
} & UiProps<"input">;

const baseContainer: UiProps = {
  w: 20,
  h: 20,
  border: "2px solid",
  radius: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};

const baseCheckMark: UiProps = {
  color: "white",
  fontSize: 16,
};

export const Checkbox = (props: CheckboxProps) => {
  const { checked, indeterminate, className, style, disabled, ...inputProps } =
    props;
  const isChecked = checked ?? false;

  const containerStyle: UiProps = {
    ...baseContainer,
    backgroundColor: isChecked ? defaultColors["amber-400"] : "transparent",
    borderColor: isChecked
      ? defaultColors["amber-400"]
      : defaultColors["gray-400"],
    ...(disabled ? { opacity: 0.5, cursor: "not-allowed" } : {}),
    style,
  };

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate ?? false;
    }
  }, [indeterminate]);

  return (
    <Ui as="label" userSelect="none" className={className} {...containerStyle}>
      {isChecked && !indeterminate && (
        <Ui
          as="div"
          $motion
          layout
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          {...baseCheckMark}
        >
          ✓
        </Ui>
      )}
      {indeterminate && (
        <Ui
          as="div"
          $motion
          layout
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          {...baseCheckMark}
        >
          —
        </Ui>
      )}
      <Ui
        as="input"
        type="checkbox"
        checked={isChecked}
        disabled={disabled}
        style={{ display: "none" }}
        {...inputProps}
      />
    </Ui>
  );
};
