import { j as a } from "../../_virtual/jsx-runtime.js";
import { Ui as n } from "../../core/ui/Ui.js";
import "../../node_modules/@emotion/css/dist/emotion-css.esm.js";
import "../../core/provider/UiProvider.js";
import { resolveShorthandProps as e } from "../../utils/shorthand.js";
const i = {
  primary: {
    backgroundColor: "blue-500",
    color: "white",
    __hover: {
      backgroundColor: "blue-600"
    },
    __active: {
      backgroundColor: "blue-700"
    }
  },
  secondary: {
    backgroundColor: "gray-500",
    color: "white",
    __hover: {
      backgroundColor: "gray-600"
    },
    __active: {
      backgroundColor: "gray-700"
    }
  }
}, c = {
  cursor: "pointer",
  __disabled: {
    opacity: 0.5,
    cursor: "not-allowed"
  },
  radius: "6px",
  backgroundColor: "gray-100",
  border: "none",
  as: "button",
  solid: !0,
  borderColor: "gray-200",
  padding: { xs: "12px", md: "20px" },
  __hover: {
    backgroundColor: "gray-200"
  },
  __active: {
    backgroundColor: "gray-300"
  },
  $motion: !0,
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 5 }
}, g = (o) => {
  const r = { ...c, ...o }, t = e(r, i);
  return /* @__PURE__ */ a.jsx(n, { ...t });
};
export {
  g as Button
};
