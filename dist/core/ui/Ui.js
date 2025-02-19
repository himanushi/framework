import { jsx as i } from "react/jsx-runtime";
import { resolveShorthandProps as o } from "../../utils/shorthand.js";
import { BaseUi as r } from "./BaseUi.js";
const d = {
  iCenter: { alignItems: "center" },
  iStart: { alignItems: "flex-start" },
  iEnd: { alignItems: "flex-end" },
  jCenter: { justifyContent: "center" },
  jStart: { justifyContent: "flex-start" },
  jEnd: { justifyContent: "flex-end" },
  jBetween: { justifyContent: "space-between" },
  col: { flexDirection: "column" },
  wrap: { flexWrap: "wrap" },
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
  radius: "borderRadius",
  absolute: { position: "absolute" },
  relative: { position: "relative" }
}, p = {
  as: "div",
  display: "flex"
}, f = (t) => {
  const e = { ...p, ...t }, n = o(e, d);
  return /* @__PURE__ */ i(r, { ...n });
};
export {
  f as Ui,
  d as shortHands
};
