import { jsx as P } from "react/jsx-runtime";
import { css as b, cx as w } from "../../node_modules/@emotion/css/dist/emotion-css.esm.js";
import { allowedDOMPropKeys as x, colors as u, breakpoints as v } from "../../utils/constants.js";
import { flattenStyles as C, filterAllowedDOMProps as D } from "../../utils/styleProcessor.js";
import { motion as M } from "../../node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const j = (e) => {
  const { as: o, ref: t, className: r, children: m, style: n, $motion: l, ...s } = e, { base: i, media: a, pseudo: c } = C(
    s,
    v,
    u
  ), p = D(s, x), d = { ...i, ...c, ...a }, f = b(d), y = l ? M[o ?? "div"] : o || "div";
  return /* @__PURE__ */ P(
    y,
    {
      ref: t,
      ...p,
      className: w(f, r),
      style: n,
      children: m
    }
  );
};
export {
  j as BaseUi
};
