import { j as r } from "../../_virtual/jsx-runtime.js";
import { Ui as o } from "../../core/Ui.js";
import "../../core/StyleProvider.js";
import "../../node_modules/@emotion/css/dist/emotion-css.esm.js";
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
  solid: { border: "1px solid" },
  radius: "borderRadius"
}, m = {
  display: "flex"
}, f = (t) => {
  const e = { ...m, ...t }, n = i(e, s);
  return /* @__PURE__ */ r.jsx(o, { ...n });
};
export {
  f as Box
};
