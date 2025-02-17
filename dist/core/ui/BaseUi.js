import { jsx as W } from "react/jsx-runtime";
import { css as x, cx as B } from "../../node_modules/@emotion/css/dist/emotion-css.esm.js";
import { useContext as C } from "react";
import { UiContext as M } from "../provider/UiProvider.js";
import { motion as $ } from "../../node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const h = (t, s, e) => typeof s == "string" && t.toLowerCase().includes("color") && e[s] ? e[s] : s, A = (t, s, e, o) => {
  if (typeof s != "object" || s === null || Array.isArray(s))
    return { base: { [t]: h(t, s, o) }, media: {} };
  const a = {}, r = {};
  return Object.keys(s).some((n) => e[n]) ? Object.entries(s).forEach(([n, c]) => {
    if (e[n]) {
      const i = `@media (min-width: ${e[n]})`;
      r[i] = {
        ...r[i],
        [t]: h(t, c, o)
      };
    } else
      a[t] = h(t, c, o);
  }) : a[t] = h(t, s, o), { base: a, media: r };
}, u = (t, s) => s.has(t) || t.startsWith("on") || t.startsWith("while") || t.startsWith("drag") || t.startsWith("layout") || t.startsWith("aria-") || t.startsWith("data-"), S = (t, s) => Object.keys(t).reduce((e, o) => (u(o, s) && (e[o] = t[o]), e), {}), g = /* @__PURE__ */ new Set(), w = (t, s, e, o = "&") => {
  let a = {};
  const r = {}, d = {};
  for (const [n, c] of Object.entries(t))
    if (!u(n, g))
      if (n.startsWith("__")) {
        const i = o === "&" ? `&:${n.slice(2)}` : `${o}:${n.slice(2)}`;
        if (typeof c == "object" && c !== null) {
          const {
            base: l,
            media: m,
            pseudo: p
          } = w(c, s, e, i);
          d[i] = { ...d[i] || {}, ...l };
          for (const f in p) {
            const b = f.replace(i, "");
            d[i][b] = p[f];
          }
          for (const f in m)
            r[f] = { ...r[f], ...m[f] };
        } else
          d[i] = c;
      } else {
        const { base: i, media: l } = A(n, c, s, e);
        a = { ...a, ...i };
        for (const m in l)
          r[m] = { ...r[m], ...l[m] };
      }
  return { base: a, media: r, pseudo: d };
}, _ = (t) => {
  const { as: s, ref: e, className: o, children: a, style: r, $motion: d, ...n } = t, { breakpoints: c, colors: i, allowedDOMPropKeys: l } = C(M), { base: m, media: p, pseudo: f } = w(
    n,
    c,
    i
  ), b = S(n, l), j = d ? $[s ?? "div"] : s || "div", O = { ...m, ...f, ...p }, P = x(O);
  return /* @__PURE__ */ W(
    j,
    {
      ref: e,
      ...b,
      className: B(P, o),
      style: r,
      children: a
    }
  );
};
export {
  _ as BaseUi
};
