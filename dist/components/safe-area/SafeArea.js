import { jsx as o } from "react/jsx-runtime";
import { useEffect as n } from "react";
import s from "./SafeArea.module.scss.js";
const w = ({ children: t }) => (n(() => {
  const e = () => {
    const r = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${r}px`);
  };
  return window.addEventListener("load", e), window.addEventListener("resize", e), e(), () => {
    window.removeEventListener("load", e), window.removeEventListener("resize", e);
  };
}, []), /* @__PURE__ */ o("div", { className: s.safe, children: t }));
export {
  w as SafeArea
};
