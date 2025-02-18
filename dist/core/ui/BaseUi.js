import { jsx as S } from "react/jsx-runtime";
import { css as W, cx as x } from "../../node_modules/@emotion/css/dist/emotion-css.esm.js";
import { useContext as B } from "react";
import { UiContext as C } from "../provider/UiProvider.js";
import { motion as M } from "../../node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const h = (t, e, s) => typeof e == "string" && t.toLowerCase().includes("color") && s[e] ? s[e] : e, $ = (t, e, s, r) => {
  if (typeof e != "object" || e === null || Array.isArray(e))
    return { base: { [t]: h(t, e, r) }, media: {} };
  const a = {}, o = {};
  return Object.keys(e).some((n) => s[n]) ? Object.entries(e).forEach(([n, c]) => {
    if (s[n]) {
      const i = `@media (min-width: ${s[n]})`;
      o[i] = {
        ...o[i],
        [t]: h(t, c, r)
      };
    } else
      a[t] = h(t, c, r);
  }) : a[t] = h(t, e, r), { base: a, media: o };
}, j = (t, e) => e.has(t) || t.startsWith("on") || t.startsWith("while") || t.startsWith("drag") || t.startsWith("layout") || t.startsWith("aria-") || t.startsWith("data-"), A = (t, e) => Object.keys(t).reduce((s, r) => (j(r, e) && (s[r] = t[r]), s), {}), g = /* @__PURE__ */ new Set(), O = (t, e, s, r = "&") => {
  let a = {};
  const o = {}, m = {};
  for (const [n, c] of Object.entries(t))
    if (!j(n, g))
      if (n.startsWith("__")) {
        const i = r === "&" ? `&:${n.slice(2)}` : `${r}:${n.slice(2)}`;
        if (typeof c == "object" && c !== null) {
          const {
            base: l,
            media: d,
            pseudo: b
          } = O(c, e, s, i);
          m[i] = { ...m[i] || {}, ...l };
          for (const [f, p] of Object.entries(
            b
          )) {
            const u = f.replace("&", i);
            m[u] = p;
          }
          for (const [f, p] of Object.entries(d))
            o[f] || (o[f] = {}), o[f][i] = {
              ...o[f][i] || {},
              ...p
            };
        } else
          m[i] = h(n, c, s);
      } else {
        const { base: i, media: l } = $(n, c, e, s);
        a = { ...a, ...i };
        for (const d in l)
          o[d] || (o[d] = {}), o[d] = { ...o[d], ...l[d] };
      }
  return { base: a, media: o, pseudo: m };
}, _ = (t) => {
  const { as: e, ref: s, className: r, children: a, style: o, $motion: m, ...n } = t, { breakpoints: c, colors: i, allowedDOMPropKeys: l } = B(C), { base: d, media: b, pseudo: f } = O(
    n,
    c,
    i
  ), p = A(n, l), u = m ? M[e ?? "div"] : e || "div", w = { ...d, ...f, ...b }, P = W(w);
  return /* @__PURE__ */ S(
    u,
    {
      ref: s,
      ...p,
      className: x(P, r),
      style: o,
      children: a
    }
  );
};
export {
  _ as BaseUi
};
