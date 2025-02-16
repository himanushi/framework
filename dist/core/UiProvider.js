import { j as p } from "../_virtual/jsx-runtime.js";
import { createContext as d, useContext as u } from "react";
/* empty css                                                    */
import { defaultAllowedDOMPropKeys as o, defaultColors as t, defaultBreakpoints as e } from "./defaultValues.js";
const c = {
  breakpoints: e,
  colors: t,
  allowedDOMPropKeys: o
}, r = d(c), P = ({ breakpoints: s, colors: n, allowedDOMPropKeys: i, children: l }) => {
  const a = {
    breakpoints: s || e,
    colors: n || t,
    allowedDOMPropKeys: i || o
  };
  return /* @__PURE__ */ p.jsx(r.Provider, { value: a, children: l });
}, j = () => u(r);
export {
  P as UiProvider,
  j as useSetting
};
