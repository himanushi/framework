import { jsx as d } from "react/jsx-runtime";
import { resolveShorthandProps as t } from "../../utils/shorthand.js";
import { Ui as l } from "../../core/ui/Ui.js";
const p = {
  error: {
    borderColor: "red-500",
    __focus: {
      borderColor: "red-500",
      boxShadow: "0 0 0 1px #ef4444"
    }
  }
}, s = {
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
    color: "red-400"
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
    __hover: {
      borderColor: "gray-200"
    }
  }
}, c = (o) => {
  const r = { ...s, ...o }, e = t(r, p);
  return /* @__PURE__ */ d(l, { ...e });
};
export {
  c as TextField
};
