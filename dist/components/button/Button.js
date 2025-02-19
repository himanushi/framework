import { jsx as n } from "react/jsx-runtime";
import { resolveShorthandProps as c } from "../../utils/shorthand.js";
import { Ui as d } from "../../core/ui/Ui.js";
const e = {
  primary: {
    backgroundColor: "primary-20",
    color: "white",
    __hover: {
      backgroundColor: "primary-35"
    },
    __active: {
      backgroundColor: "primary-50"
    },
    __disabled: {
      opacity: 0.5,
      cursor: "not-allowed",
      __hover: {
        backgroundColor: "primary-20"
      },
      __active: {
        backgroundColor: "primary-20"
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
}, s = {
  s: { xs: "8px 12px", md: "8px 12px" },
  m: { xs: "12px 16px", md: "12px 16px" },
  l: { xs: "16px 24px", md: "16px 24px" }
}, i = {
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
  }
}, g = (o) => {
  const { size: r = "m", ...a } = o, t = c(
    { ...i, ...a },
    e
  );
  return /* @__PURE__ */ n(d, { ...t, padding: s[r].xs, $motion: !0 });
};
export {
  g as Button
};
