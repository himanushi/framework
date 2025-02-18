import { jsx as w } from "react/jsx-runtime";
import { css as P, cx as S } from "../../node_modules/@emotion/css/dist/emotion-css.esm.js";
import { colors as W, breakpoints as B, allowedDOMPropKeys as M } from "./values.js";
import { motion as $ } from "../../node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const h = (e, t, s) => typeof t == "string" && e.toLowerCase().includes("color") && s[t] ? s[t] : t, A = (e, t, s, r) => {
  if (typeof t != "object" || t === null || Array.isArray(t))
    return { base: { [e]: h(e, t, r) }, media: {} };
  const a = {}, o = {};
  return Object.keys(t).some((n) => s[n]) ? Object.entries(t).forEach(([n, c]) => {
    if (s[n]) {
      const i = `@media (min-width: ${s[n]})`;
      o[i] = {
        ...o[i],
        [e]: h(e, c, r)
      };
    } else
      a[e] = h(e, c, r);
  }) : a[e] = h(e, t, r), { base: a, media: o };
}, j = (e, t) => t.has(e) || e.startsWith("on") || e.startsWith("while") || e.startsWith("drag") || e.startsWith("layout") || e.startsWith("aria-") || e.startsWith("data-"), g = (e, t) => Object.keys(e).reduce((s, r) => (j(r, t) && (s[r] = e[r]), s), {}), x = /* @__PURE__ */ new Set(), u = (e, t, s, r = "&") => {
  let a = {};
  const o = {}, m = {};
  for (const [n, c] of Object.entries(e))
    if (!j(n, x))
      if (n.startsWith("__")) {
        const i = r === "&" ? `&:${n.slice(2)}` : `${r}:${n.slice(2)}`;
        if (typeof c == "object" && c !== null) {
          const {
            base: f,
            media: d,
            pseudo: b
          } = u(c, t, s, i);
          m[i] = { ...m[i] || {}, ...f };
          for (const [l, p] of Object.entries(
            b
          )) {
            const O = l.replace("&", i);
            m[O] = p;
          }
          for (const [l, p] of Object.entries(d))
            o[l] || (o[l] = {}), o[l][i] = {
              ...o[l][i] || {},
              ...p
            };
        } else
          m[i] = h(n, c, s);
      } else {
        const { base: i, media: f } = A(n, c, t, s);
        a = { ...a, ...i };
        for (const d in f)
          o[d] || (o[d] = {}), o[d] = { ...o[d], ...f[d] };
      }
  return { base: a, media: o, pseudo: m };
}, N = (e) => {
  const { as: t, ref: s, className: r, children: a, style: o, $motion: m, ...n } = e, { base: c, media: i, pseudo: f } = u(
    n,
    B,
    W
  ), d = g(n, M), b = m ? $[t ?? "div"] : t || "div", l = { ...c, ...f, ...i }, p = P(l);
  return /* @__PURE__ */ w(
    b,
    {
      ref: s,
      ...d,
      className: S(p, r),
      style: o,
      children: a
    }
  );
};
export {
  N as BaseUi
};
