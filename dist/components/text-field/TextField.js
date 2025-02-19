import { jsx as d } from "react/jsx-runtime";
import { resolveShorthandProps as l } from "../../utils/shorthand.js";
import { Ui as t } from "../../core/ui/Ui.js";
const a = {
  error: {
    borderColor: "red-300",
    __focus: {
      borderColor: "red-400",
      boxShadow: "0 0 0 1px #ef4444"
    },
    __hover: {
      borderColor: "red-500"
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
  borderColor: "gray-200",
  backgroundColor: "white",
  outline: "none",
  fontSize: "14px",
  color: "gray-900",
  __placeholder: {
    color: "gray-400"
  },
  __hover: {
    borderColor: "gray-300"
  },
  __focus: {
    borderColor: "blue-500",
    boxShadow: "0 0 0 1px #3b82f6"
  },
  __disabled: {
    backgroundColor: "gray-50",
    cursor: "not-allowed",
    opacity: 0.7,
    color: "gray-400",
    __hover: {
      borderColor: "gray-200"
    }
  }
}, c = (o) => {
  const r = { ...p, ...o }, e = l(r, a);
  return /* @__PURE__ */ d(t, { ...e });
};
export {
  c as TextField
};
