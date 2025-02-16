import { j as o } from "../_virtual/jsx-runtime.js";
import { resolveShorthandProps as i } from "../utils/shorthand.js";
import { BaseUi as d } from "./BaseUi.js";
const r = {
  iCenter: { alignItems: "center" },
  iStart: { alignItems: "flex-start" },
  iEnd: { alignItems: "flex-end" },
  jCenter: { justifyContent: "center" },
  jStart: { justifyContent: "flex-start" },
  jEnd: { justifyContent: "flex-end" },
  jBetween: { justifyContent: "space-between" },
  column: { flexDirection: "column" },
  p: "padding",
  pt: "paddingTop",
  pr: "paddingRight",
  pb: "paddingBottom",
  pl: "paddingLeft",
  py: (t) => ({
    paddingTop: t,
    paddingBottom: t
  }),
  px: (t) => ({
    paddingLeft: t,
    paddingRight: t
  }),
  w: "width",
  h: "height",
  solid: { border: "1px solid" },
  radius: "borderRadius"
}, s = {
  display: "flex"
}, g = (t) => {
  const e = { ...s, ...t }, n = i(e, r);
  return /* @__PURE__ */ o.jsx(d, { ...n });
};
export {
  g as Ui
};
