import { j as r } from "../../_virtual/jsx-runtime.js";
import { Ui as o } from "../../core/Ui.js";
import "../../core/StyleProvider.js";
import { resolveShorthandProps as i } from "../../utils/resolveShorthandProps.js";
const s = {
  iCenter: { alignItems: "center" },
  iStart: { alignItems: "flex-start" },
  iEnd: { alignItems: "flex-end" },
  jCenter: { justifyContent: "center" },
  jStart: { justifyContent: "flex-start" },
  jEnd: { justifyContent: "flex-end" },
  jBetween: { justifyContent: "space-between" },
  p: "padding",
  pt: "paddingTop",
  pr: "paddingRight",
  pb: "paddingBottom",
  pl: "paddingLeft",
  m: "margin",
  mt: "marginTop",
  mr: "marginRight",
  mb: "marginBottom",
  ml: "marginLeft",
  w: "width",
  h: "height",
  column: { flexDirection: "column" },
  radius: "borderRadius",
  shadowS: {
    boxShadow: "0 2px 8px rgba(32, 37, 50, 8%),0 2px 4px rgba(32, 37, 50, 3%);"
  }
}, a = {
  display: "flex"
}, f = (t) => {
  const e = { ...a, ...t }, n = i(e, s);
  return /* @__PURE__ */ r.jsx(o, { ...n });
};
export {
  f as Box
};
