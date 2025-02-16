import { j as W } from "../../_virtual/jsx-runtime.js";
import { css as q, cx as x } from "../../node_modules/@emotion/css/dist/emotion-css.esm.js";
import { useSetting as P } from "../provider/UiProvider.js";
import { motion as g } from "../../node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const l = (t, s, o) => typeof s == "string" && t.toLowerCase().includes("color") && o[s] ? o[s] : s, A = (t, s, o, i) => {
  if (typeof s != "object" || s === null || Array.isArray(s))
    return { base: { [t]: l(t, s, i) }, media: {} };
  const e = {}, n = {};
  return Object.keys(s).some((r) => o[r]) ? Object.entries(s).forEach(([r, a]) => {
    if (o[r]) {
      const d = `@media (min-width: ${o[r]})`;
      n[d] = {
        ...n[d],
        [t]: l(t, a, i)
      };
    } else
      e[t] = l(t, a, i);
  }) : e[t] = l(t, s, i), { base: e, media: n };
}, h = (t, s) => s.has(t) || t.startsWith("on") || t.startsWith("while") || t.startsWith("drag") || t.startsWith("layout") || t.startsWith("aria-") || t.startsWith("data-"), $ = (t, s) => Object.keys(t).reduce((o, i) => (h(i, s) && (o[i] = t[i]), o), {}), B = /* @__PURE__ */ new Set(), b = (t, s, o, i = "&") => Object.entries(t).reduce(
  (e, [n, m]) => {
    if (h(n, B)) return e;
    if (n.startsWith("__")) {
      const r = `${i}:${n.slice(2)}`;
      if (typeof m == "object" && m !== null) {
        const { base: a, media: d, pseudo: p } = b(
          m,
          s,
          o,
          r
        );
        e.pseudo[r] = { ...a }, e.pseudo = { ...e.pseudo, ...p };
        for (const [f, c] of Object.entries(d))
          e.media[f] = { ...e.media[f], ...c };
      } else
        e.pseudo[r] = m;
    } else {
      const { base: r, media: a } = A(
        n,
        m,
        s,
        o
      );
      e.base = { ...e.base, ...r };
      for (const [d, p] of Object.entries(a))
        e.media[d] = { ...e.media[d], ...p };
    }
    return e;
  },
  {
    base: {},
    media: {},
    pseudo: {}
  }
), N = (t) => {
  const { as: s, ref: o, className: i, children: e, style: n, $motion: m, ...r } = t, { breakpoints: a, colors: d, allowedDOMPropKeys: p } = P(), { base: f, media: c, pseudo: j } = b(
    r,
    a,
    d
  ), O = $(r, p), S = m ? g[s ?? "div"] : s || "div", w = { ...f, ...j, ...c }, u = q(w);
  return /* @__PURE__ */ W.jsx(
    S,
    {
      ref: o,
      ...O,
      className: x(u, i),
      style: n,
      children: e
    }
  );
};
export {
  N as BaseUi
};
