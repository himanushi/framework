import { jsx as n } from "react/jsx-runtime";
import { resolveShorthandProps as o } from "../../utils/shorthand.js";
import { Ui as g } from "../../core/ui/Ui.js";
const r = {
  "5s": {
    fontSize: { xs: "10px", lg: "11px" },
    lineHeight: { xs: "14px", lg: "14px" }
  },
  "4s": {
    fontSize: { xs: "11px", lg: "12px" },
    lineHeight: { xs: "14px", lg: "16px" }
  },
  "3s": {
    fontSize: { xs: "12px", lg: "13px" },
    lineHeight: { xs: "16px", lg: "18px" }
  },
  "2s": {
    fontSize: { xs: "13px", lg: "14px" },
    lineHeight: { xs: "18px", lg: "20px" }
  },
  s: {
    fontSize: { xs: "14px", lg: "16px" },
    lineHeight: { xs: "20px", lg: "24px" }
  },
  m: {
    fontSize: { xs: "16px", lg: "18px" },
    lineHeight: { xs: "24px", lg: "26px" }
  },
  l: {
    fontSize: { xs: "18px", lg: "20px" },
    lineHeight: { xs: "26px", lg: "28px" }
  },
  "2l": {
    fontSize: { xs: "20px", lg: "22px" },
    lineHeight: { xs: "28px", lg: "30px" }
  },
  "3l": {
    fontSize: { xs: "22px", lg: "24px" },
    lineHeight: { xs: "30px", lg: "34px" }
  },
  "4l": {
    fontSize: { xs: "24px", lg: "28px" },
    lineHeight: { xs: "34px", lg: "38px" }
  },
  "5l": {
    fontSize: { xs: "28px", lg: "32px" },
    lineHeight: { xs: "38px", lg: "42px" }
  },
  "6l": {
    fontSize: { xs: "32px", lg: "36px" },
    lineHeight: { xs: "42px", lg: "46px" }
  },
  "7l": {
    fontSize: { xs: "36px", lg: "40px" },
    lineHeight: { xs: "46px", lg: "50px" }
  }
}, f = {
  bold: { fontWeight: "bold" },
  nowrap: { whiteSpace: "nowrap" }
}, x = {
  display: "inline",
  color: "gray-90",
  fontWeight: "normal",
  as: "span",
  size: "m"
}, H = (p) => {
  const { size: e = x.size, ...s } = p, l = r[e], i = {
    ...x,
    ...s,
    ...l
  }, t = o(i, f);
  return /* @__PURE__ */ n(g, { ...t });
};
export {
  H as Text
};
