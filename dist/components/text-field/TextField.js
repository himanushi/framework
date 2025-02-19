import { jsx as t } from "react/jsx-runtime";
import { resolveShorthandProps as l } from "../../utils/shorthand.js";
import { Ui as a } from "../../core/ui/Ui.js";
const d = {
  error: {
    borderColor: "alert-20",
    __focus: {
      borderColor: "alert-50",
      boxShadow: "0 0 0 1px #ef4444"
    },
    __hover: {
      borderColor: "alert-50"
    }
  }
}, p = {
  as: "input",
  type: "text",
  w: "100%",
  h: "40px",
  px: "12px",
  radius: "6px",
  border: "1px solid",
  borderColor: "gray-20",
  backgroundColor: "white",
  outline: "none",
  fontSize: "14px",
  color: "gray-90",
  __placeholder: {
    color: "gray-35"
  },
  __hover: {
    borderColor: "gray-35"
  },
  __focus: {
    borderColor: "primary-50",
    boxShadow: "0 0 0 1px #3b82f6"
  },
  __disabled: {
    backgroundColor: "gray-20",
    cursor: "not-allowed",
    opacity: 0.7,
    color: "gray-50",
    __hover: {
      borderColor: "gray-10"
    }
  }
}, c = (o) => {
  const r = { ...p, ...o }, e = l(r, d);
  return /* @__PURE__ */ t(a, { ...e });
};
export {
  c as TextField,
  p as defaultTextProps,
  d as textShortHands
};
