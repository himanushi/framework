import { defaultColors } from "~/core";
import { Ui, type UiProps } from "~/core/ui/Ui";
import {
  type ShortHandType,
  type WithShorthandProps,
  resolveShorthandProps,
} from "~/utils";

const shortHands = {
  sizeS: { transform: "scale(0.75)" },
  sizeM: { transform: "scale(2)" },
  sizeL: { transform: "scale(1.25)" },
} as const satisfies ShortHandType;

export type SwitchProps = WithShorthandProps<
  { checked?: boolean } & UiProps<"button">,
  typeof shortHands
>;

const containerCss: UiProps = {
  w: 40,
  h: 24,
  p: 2,
  radius: 20,
  cursor: "pointer",
  border: "none",

  __disabled: {
    cursor: "not-allowed",
    opacity: 0.5,
  },
};

const handleCss: UiProps = {
  w: 20,
  h: 20,
  radius: "50%",
  backgroundColor: "white",
};

export const Switch = (props: SwitchProps) => {
  const { checked, onChange, disabled, style, ...restProps } = props;
  const newProps = resolveShorthandProps(restProps, shortHands);

  return (
    <Ui
      as="button"
      disabled={disabled}
      onClick={disabled ? undefined : onChange}
      style={{
        backgroundColor: checked
          ? defaultColors["amber-400"]
          : defaultColors["gray-400"],
        justifyContent: checked ? "flex-end" : "flex-start",
        ...style,
      }}
      {...containerCss}
      {...newProps}
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
        {...handleCss}
      />
    </Ui>
  );
};
