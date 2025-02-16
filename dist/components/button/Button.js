import { j as t } from "../../_virtual/jsx-runtime.js";
import { Ui as e } from "../../core/ui/Ui.js";
import "../../node_modules/@emotion/css/dist/emotion-css.esm.js";
import "../../core/provider/UiProvider.js";
import { resolveShorthandProps as n } from "../../utils/shorthand.js";
const d = {
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
}, s = {
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
  }
}, p = (o) => {
  const r = { ...s, ...o }, a = n(r, d);
  return /* @__PURE__ */ t.jsx(e, { ...a });
};
export {
  p as Button
};
