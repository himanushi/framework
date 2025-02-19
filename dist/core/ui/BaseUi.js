import { jsx as j } from "react/jsx-runtime";
import { css as w, cx as O } from "../../node_modules/@emotion/css/dist/emotion-css.esm.js";
import { colors as W, breakpoints as $, allowedDOMPropKeys as B } from "./values.js";
import { motion as M } from "../../node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const g = /* @__PURE__ */ new Set([
  "before",
  "after",
  "first-line",
  "first-letter",
  "selection",
  "marker",
  "backdrop",
  "placeholder"
]), A = (e, t = "&") => {
  if (e.startsWith("__")) {
    const s = e.slice(2), o = g.has(s) ? "::" : ":";
    return t === "&" ? `&${o}${s}` : `${t}${o}${s}`;
  }
  return e;
}, h = (e, t, s) => typeof t == "string" && e.toLowerCase().includes("color") && s[t] ? s[t] : t, C = (e, t, s, o) => {
  if (typeof t != "object" || t === null || Array.isArray(t))
    return { base: { [e]: h(e, t, o) }, media: {} };
  const a = {}, n = {};
  return Object.keys(t).some((i) => s[i]) ? Object.entries(t).forEach(([i, c]) => {
    if (s[i]) {
      const r = `@media (min-width: ${s[i]})`;
      n[r] = {
        ...n[r],
        [e]: h(e, c, o)
      };
    } else
      a[e] = h(e, c, o);
  }) : a[e] = h(e, t, o), { base: a, media: n };
}, u = (e, t) => t.has(e) || e.startsWith("on") || e.startsWith("while") || e.startsWith("drag") || e.startsWith("layout") || e.startsWith("aria-") || e.startsWith("data-"), _ = (e, t) => Object.keys(e).reduce((s, o) => (u(o, t) && (s[o] = e[o]), s), {}), x = /* @__PURE__ */ new Set(), S = (e, t, s, o = "&") => {
  let a = {};
  const n = {}, l = {};
  for (const [i, c] of Object.entries(e))
    if (!u(i, x))
      if (i.startsWith("__")) {
        const r = A(i, o);
        if (typeof c == "object" && c !== null) {
          const {
            base: m,
            media: d,
            pseudo: b
          } = S(c, t, s, r);
          l[r] = {
            ...l[r] || {},
            ...m
          };
          for (const [f, p] of Object.entries(
            b
          )) {
            const P = f.replace(
              "&",
              r
            );
            l[P] = p;
          }
          for (const [f, p] of Object.entries(d))
            n[f] || (n[f] = {}), n[f][r] = {
              ...n[f][r] || {},
              ...p
            };
        } else
          l[r] = h(i, c, s);
      } else {
        const { base: r, media: m } = C(i, c, t, s);
        a = { ...a, ...r };
        for (const d in m)
          n[d] || (n[d] = {}), n[d] = { ...n[d], ...m[d] };
      }
  return { base: a, media: n, pseudo: l };
}, y = (e) => {
  const { as: t, ref: s, className: o, children: a, style: n, $motion: l, ...i } = e, { base: c, media: r, pseudo: m } = S(
    i,
    $,
    W
  ), d = _(i, B), b = l ? M[t ?? "div"] : t || "div", f = { ...c, ...m, ...r }, p = w(f);
  return /* @__PURE__ */ j(
    b,
    {
      ref: s,
      ...d,
      className: O(p, o),
      style: n,
      children: a
    }
  );
};
export {
  y as BaseUi
};
