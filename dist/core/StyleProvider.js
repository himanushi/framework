import { j as n } from "../_virtual/jsx-runtime.js";
import { createContext as p, useContext as x } from "react";
/* empty css                                                    */
const t = {
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, i = {
  breakpoints: t
}, e = p(i), c = ({ breakpoints: o, children: r }) => {
  const s = {
    breakpoints: o || t
  };
  return /* @__PURE__ */ n.jsx(e.Provider, { value: s, children: r });
}, u = () => x(e);
export {
  c as StyleProvider,
  u as useStyle
};
