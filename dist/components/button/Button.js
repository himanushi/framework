import { jsx as a } from "react/jsx-runtime";
import { resolveShorthandProps as e } from "../../utils/shorthand.js";
import { Ui as c } from "../../core/ui/Ui.js";
const d = {
  primary: {
    backgroundColor: "blue-500",
    color: "white",
    __hover: {
      backgroundColor: "blue-600"
    },
    __active: {
      backgroundColor: "blue-700"
    },
    __disabled: {
      opacity: 0.5,
      cursor: "not-allowed",
      __hover: {
        backgroundColor: "blue-500"
      },
      __active: {
        backgroundColor: "blue-500"
      }
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
    },
    __disabled: {
      opacity: 0.5,
      cursor: "not-allowed",
      __hover: {
        backgroundColor: "gray-500"
      },
      __active: {
        backgroundColor: "gray-500"
      }
    }
  }
}, l = {
  cursor: "pointer",
  radius: "6px",
  backgroundColor: "gray-100",
  border: "none",
  as: "button",
  solid: !0,
  borderColor: "gray-200",
  padding: { xs: "12px", md: "16px" },
  __hover: {
    backgroundColor: "gray-200"
  },
  __active: {
    backgroundColor: "gray-300"
  },
  __disabled: {
    opacity: 0.5,
    cursor: "not-allowed",
    __hover: {
      backgroundColor: "gray-100"
    },
    __active: {
      backgroundColor: "gray-100"
    }
  }
}, _ = (o) => {
  const r = e(
    { ...l, ...o },
    d
  );
  return /* @__PURE__ */ a(c, { ...r, $motion: !0 });
};
export {
  _ as Button
};
