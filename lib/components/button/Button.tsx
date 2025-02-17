import { Ui, type UiProps } from "~/core";
import {
  type ShortHandType,
  type WithShorthandProps,
  resolveShorthandProps,
} from "~/utils/shorthand";

const shortHands = {
  primary: {
    backgroundColor: "blue-500",
    color: "white",
    __hover: {
      backgroundColor: "blue-600",
    },
    __active: {
      backgroundColor: "blue-700",
    },
    __disabled: {
      opacity: 0.5,
      cursor: "not-allowed",
      __hover: {
        backgroundColor: "blue-500",
      },
      __active: {
        backgroundColor: "blue-500",
      },
    },
  },

  secondary: {
    backgroundColor: "gray-500",
    color: "white",
    __hover: {
      backgroundColor: "gray-600",
    },
    __active: {
      backgroundColor: "gray-700",
    },
    __disabled: {
      opacity: 0.5,
      cursor: "not-allowed",
      __hover: {
        backgroundColor: "gray-500",
      },
      __active: {
        backgroundColor: "gray-500",
      },
    },
  },
} as const satisfies ShortHandType;

const defaultProps: ButtonProps = {
  cursor: "pointer",
  radius: "6px",
  backgroundColor: "gray-100",
  border: "none",
  as: "button",
  solid: true,
  borderColor: "gray-200",
  padding: { xs: "12px", md: "16px" },

  __hover: {
    backgroundColor: "gray-200",
  },
  __active: {
    backgroundColor: "gray-300",
  },
  __disabled: {
    opacity: 0.5,
    cursor: "not-allowed",
    __hover: {
      backgroundColor: "gray-100",
    },
    __active: {
      backgroundColor: "gray-100",
    },
  },
};

export type ButtonProps = WithShorthandProps<
  UiProps<"button">,
  typeof shortHands
>;

/**
 * @shorthands
 * primary, secondary
 */
export const Button = (props: ButtonProps) => {
  const mergedProps = { ...defaultProps, ...props };
  const newProps = resolveShorthandProps(mergedProps, shortHands);
  return <Ui {...newProps} $motion />;
};
