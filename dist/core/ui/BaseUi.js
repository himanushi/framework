import { j as q } from "../../_virtual/jsx-runtime.js";
import { css as x, cx as P } from "../../node_modules/@emotion/css/dist/emotion-css.esm.js";
import { useSetting as W } from "../provider/UiProvider.js";
import { motion as A } from "../../node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const l = (s, t, o) => typeof t == "string" && s.toLowerCase().includes("color") && o[t] ? o[t] : t, $ = (s, t, o, i) => {
  if (typeof t != "object" || t === null || Array.isArray(t))
    return { base: { [s]: l(s, t, i) }, media: {} };
  const e = {}, n = {};
  return Object.keys(t).some((r) => o[r]) ? Object.entries(t).forEach(([r, p]) => {
    if (o[r]) {
      const m = `@media (min-width: ${o[r]})`;
      n[m] = {
        ...n[m],
        [s]: l(s, p, i)
      };
    } else
      e[s] = l(s, p, i);
  }) : e[s] = l(s, t, i), { base: e, media: n };
}, b = (s, t) => t.has(s) || s.startsWith("on") || s.startsWith("while") || s.startsWith("aria-") || s.startsWith("data-"), g = (s, t) => Object.keys(s).reduce((o, i) => (b(i, t) && (o[i] = s[i]), o), {}), B = /* @__PURE__ */ new Set(), h = (s, t, o, i = "&") => Object.entries(s).reduce(
  (e, [n, d]) => {
    if (b(n, B)) return e;
    if (n.startsWith("__")) {
      const r = `${i}:${n.slice(2)}`;
      if (typeof d == "object" && d !== null) {
        const { base: p, media: m, pseudo: a } = h(
          d,
          t,
          o,
          r
        );
        e.pseudo[r] = { ...p }, e.pseudo = { ...e.pseudo, ...a };
        for (const [f, c] of Object.entries(m))
          e.media[f] = { ...e.media[f], ...c };
      } else
        e.pseudo[r] = d;
    } else {
      const { base: r, media: p } = $(
        n,
        d,
        t,
        o
      );
      e.base = { ...e.base, ...r };
      for (const [m, a] of Object.entries(p))
        e.media[m] = { ...e.media[m], ...a };
    }
    return e;
  },
  {
    base: {},
    media: {},
    pseudo: {}
  }
), N = (s) => {
  const { as: t, ref: o, className: i, children: e, style: n, $motion: d, ...r } = s, { breakpoints: p, colors: m, allowedDOMPropKeys: a } = W(), { base: f, media: c, pseudo: j } = h(
    r,
    p,
    m
  ), O = g(r, a), S = d ? A[t ?? "div"] : t || "div", w = { ...f, ...j, ...c }, u = x(w);
  return /* @__PURE__ */ q.jsx(
    S,
    {
      ref: o,
      ...O,
      className: P(u, i),
      style: n,
      children: e
    }
  );
};
export {
  N as BaseUi
};
