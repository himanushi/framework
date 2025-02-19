import { jsx as e } from "react/jsx-runtime";
import { resolveShorthandProps as n } from "../../utils/shorthand.js";
import { Ui as c } from "../../core/ui/Ui.js";
const d = {
  primary: {
    backgroundColor: "primary-50",
    color: "white",
    __hover: {
      backgroundColor: "primary-80"
    },
    __active: {
      backgroundColor: "primary-90"
    },
    __disabled: {
      opacity: 0.5,
      cursor: "not-allowed",
      __hover: {
        backgroundColor: "primary-50"
      },
      __active: {
        backgroundColor: "primary-50"
      }
    }
  },
  secondary: {
    backgroundColor: "gray-20",
    color: "white",
    __hover: {
      backgroundColor: "gray-35"
    },
    __active: {
      backgroundColor: "gray-50"
    },
    __disabled: {
      opacity: 0.5,
      cursor: "not-allowed",
      __hover: {
        backgroundColor: "gray-20"
      },
      __active: {
        backgroundColor: "gray-20"
      }
    }
  }
}, i = {
  s: { xs: "8px 12px", md: "8px 12px" },
  m: { xs: "12px 16px", md: "12px 16px" },
  l: { xs: "16px 24px", md: "16px 24px" }
}, s = {
  cursor: "pointer",
  radius: "6px",
  backgroundColor: "gray-10",
  border: "none",
  as: "button",
  size: "m",
  type: "button",
  __hover: {
    backgroundColor: "gray-35"
  },
  __active: {
    backgroundColor: "gray-50"
  },
  __disabled: {
    opacity: 0.5,
    cursor: "not-allowed",
    __hover: {
      backgroundColor: "gray-10"
    },
    __active: {
      backgroundColor: "gray-10"
    }
  },
  $motion: !0,
  whileTap: { scale: 0.95 }
}, g = (o) => {
  const { size: r = "m", ...a } = o, t = n(
    { ...s, ...a },
    d
  );
  return /* @__PURE__ */ e(c, { ...t, padding: i[r].xs, $motion: !0 });
};
export {
  g as Button
};
