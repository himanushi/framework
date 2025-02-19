import { jsx as i } from "react/jsx-runtime";
import { resolveShorthandProps as r } from "../../utils/shorthand.js";
import { BaseUi as s } from "./BaseUi.js";
const l = {
  jCenter: { justifyContent: "center" },
  jStart: { justifyContent: "flex-start" },
  jEnd: { justifyContent: "flex-end" },
  jBetween: { justifyContent: "space-between" },
  jStretch: { justifyContent: "stretch" },
  jSelfCenter: { justifySelf: "center" },
  jSelfStart: { justifySelf: "flex-start" },
  jSelfEnd: { justifySelf: "flex-end" },
  jSelfStretch: { justifySelf: "stretch" },
  iCenter: { alignItems: "center" },
  iStart: { alignItems: "flex-start" },
  iEnd: { alignItems: "flex-end" },
  iStretch: { alignItems: "stretch" },
  iSelfCenter: { alignSelf: "center" },
  iSelfStart: { alignSelf: "flex-start" },
  iSelfEnd: { alignSelf: "flex-end" },
  iSelfStretch: { alignSelf: "stretch" },
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
  relative: { position: "relative" },
  selectNone: { userSelect: "none" }
}, o = {
  as: "div",
  display: "flex"
}, p = (t) => {
  const e = { ...o, ...t }, n = r(e, l);
  return /* @__PURE__ */ i(s, { ...n });
};
export {
  p as Ui,
  l as shortHands
};
