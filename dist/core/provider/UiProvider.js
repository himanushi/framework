import { jsx as n } from "react/jsx-runtime";
import { createContext as p } from "react";
/* empty css                                                       */
import { defaultAllowedDOMPropKeys as o, defaultColors as r, defaultBreakpoints as e } from "./defaultValues.js";
const d = {
  breakpoints: e,
  colors: r,
  allowedDOMPropKeys: o
}, f = p(d), x = ({ breakpoints: t, colors: l, allowedDOMPropKeys: s, children: i }) => {
  const a = {
    breakpoints: t || e,
    colors: l || r,
    allowedDOMPropKeys: s || o
  };
  return /* @__PURE__ */ n(f.Provider, { value: a, children: i });
};
export {
  f as UiContext,
  x as UiProvider
};
