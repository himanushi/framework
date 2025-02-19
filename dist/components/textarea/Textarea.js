import { jsx as d } from "react/jsx-runtime";
import a from "../../node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js";
import { resolveShorthandProps as l } from "../../utils/shorthand.js";
import { Ui as s } from "../../core/ui/Ui.js";
const p = {
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
}, t = {
  as: a,
  w: "100%",
  px: "12px",
  py: "8px",
  radius: "6px",
  border: "1px solid",
  borderColor: "gray-200",
  backgroundColor: "white",
  outline: "none",
  fontSize: "14px",
  color: "gray-900",
  resize: "none",
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
}, x = (o) => {
  const r = { ...t, ...o }, e = l(r, p);
  return /* @__PURE__ */ d(s, { ...e });
};
export {
  x as Textarea
};
