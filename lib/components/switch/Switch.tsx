import { Ui, type UiProps } from "~/core/ui/Ui";
import { colors } from "~/core/ui/values";

type SwitchSizes = "s" | "m" | "l";
const sizes = {
  s: { container: { w: 35, h: 20, p: 2 }, handle: { w: 16, h: 16 } },
  m: { container: { w: 40, h: 24, p: 2 }, handle: { w: 20, h: 20 } },
  l: { container: { w: 50, h: 28, p: 2 }, handle: { w: 24, h: 24 } },
} as const;

export type SwitchProps = {
  checked?: boolean;
  switchSize?: SwitchSizes;
} & UiProps<"input">;

const baseContainer: UiProps = {
  radius: 20,
  cursor: "pointer",
  border: "none",
};

const baseHandle: UiProps = {
  radius: "50%",
  backgroundColor: "white",
};

export const Switch = (props: SwitchProps) => {
  const {
    checked,
    value,
    className,
    style,
    switchSize = "m",
    disabled,
    ...inputProps
  } = props;

  const isChecked = checked ?? !!value ?? false;
  const { container: containerSize, handle: handleSize } = sizes[switchSize];

  const containerStyle: UiProps = {
    ...baseContainer,
    ...containerSize,
    backgroundColor: isChecked ? colors["blue-500"] : colors["gray-500"],
    justifyContent: isChecked ? "flex-end" : "flex-start",
    ...(disabled ? { opacity: 0.5, cursor: "not-allowed" } : {}),
    style,
  };

  const handleStyle: UiProps = {
    ...baseHandle,
    ...handleSize,
  };

  return (
    <Ui as="label" className={className} {...containerStyle}>
      <Ui
        as="div"
        $motion
        layout
        transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2,
        }}
        {...handleStyle}
      />
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
