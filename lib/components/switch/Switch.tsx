import { defaultColors } from "~/core";
import { Ui, type UiProps } from "~/core/ui/Ui";

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

const containerCss: UiProps = {
  radius: 20,
  cursor: "pointer",
  border: "none",
};

const handleCss: UiProps = {
  radius: "50%",
  backgroundColor: "white",
};

export const Switch = (props: SwitchProps) => {
  const {
    checked: defaultChecked,
    value,
    className,
    style,
    switchSize = "m",
    disabled,
    ...restProps
  } = props;

  const checked = defaultChecked ?? !!value ?? false;

  return (
    <Ui
      as="label"
      style={{
        backgroundColor: checked
          ? defaultColors["amber-400"]
          : defaultColors["gray-400"],
        justifyContent: checked ? "flex-end" : "flex-start",
        ...style,
      }}
      className={className}
      {...containerCss}
      {...sizes[switchSize].container}
      {...(disabled ? { opacity: 0.5, cursor: "not-allowed" } : {})}
    >
      <Ui
        as="div"
        $motion
        layout
        transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2,
        }}
        {...sizes[switchSize].handle}
        {...handleCss}
      />
      <Ui
        as="input"
        type="checkbox"
        checked={checked}
        disabled={disabled}
        style={{ display: "none" }}
        {...restProps}
      />
    </Ui>
  );
};
