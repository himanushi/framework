import { Ui, type UiProps } from "~/core";
import {
  type ShortHandType,
  type WithShorthandProps,
  resolveShorthandProps,
} from "~/utils/shorthand";

const shortHands = {
  primary: {
    backgroundColor: "primary-50",
    color: "white",
    __hover: {
      backgroundColor: "primary-80",
    },
    __active: {
      backgroundColor: "primary-90",
    },
    __disabled: {
      opacity: 0.5,
      cursor: "not-allowed",
      __hover: {
        backgroundColor: "primary-50",
      },
      __active: {
        backgroundColor: "primary-50",
      },
    },
  },

  secondary: {
    backgroundColor: "gray-20",
    color: "white",
    __hover: {
      backgroundColor: "gray-35",
    },
    __active: {
      backgroundColor: "gray-50",
    },
    __disabled: {
      opacity: 0.5,
      cursor: "not-allowed",
      __hover: {
        backgroundColor: "gray-20",
      },
      __active: {
        backgroundColor: "gray-20",
      },
    },
  },
} as const satisfies ShortHandType;

const sizePaddings = {
  s: { xs: "8px 12px", md: "8px 12px" },
  m: { xs: "12px 16px", md: "12px 16px" },
  l: { xs: "16px 24px", md: "16px 24px" },
} as const;

const defaultProps: ButtonProps = {
  cursor: "pointer",
  radius: "6px",
  backgroundColor: "gray-10",
  border: "none",
  as: "button",
  size: "m",
  type: "button",

  __hover: {
    backgroundColor: "gray-35",
  },
  __active: {
    backgroundColor: "gray-50",
  },
  __disabled: {
    opacity: 0.5,
    cursor: "not-allowed",
    __hover: {
      backgroundColor: "gray-10",
    },
    __active: {
      backgroundColor: "gray-10",
    },
  },

  $motion: true,
  whileTap: { scale: 0.95 },
};

export type ButtonProps = WithShorthandProps<
  UiProps<"button"> & {
    size?: keyof typeof sizePaddings;
  },
  typeof shortHands
>;

/**
 * @shorthands
 * primary, secondary
 */
export const Button = (props: ButtonProps) => {
  const { size = "m", ...rest } = props;
  const newProps = resolveShorthandProps(
    { ...defaultProps, ...rest },
    shortHands,
  );

  return <Ui {...newProps} padding={sizePaddings[size].xs} $motion />;
};
