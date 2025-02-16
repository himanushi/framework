import { j as w } from "../../_virtual/jsx-runtime.js";
import { css as u, cx as q } from "../../node_modules/@emotion/css/dist/emotion-css.esm.js";
import { useSetting as x } from "../provider/UiProvider.js";
import { motion as P } from "../../node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const c = (s, t, o) => typeof t == "string" && s.toLowerCase().includes("color") && o[t] ? o[t] : t, A = (s, t, o, n) => {
  if (typeof t != "object" || t === null || Array.isArray(t))
    return { base: { [s]: c(s, t, n) }, media: {} };
  const e = {}, i = {};
  return Object.keys(t).some((r) => o[r]) ? Object.entries(t).forEach(([r, p]) => {
    if (o[r]) {
      const m = `@media (min-width: ${o[r]})`;
      i[m] = {
        ...i[m],
        [s]: c(s, p, n)
      };
    } else
      e[s] = c(s, p, n);
  }) : e[s] = c(s, t, n), { base: e, media: i };
}, b = (s, t) => t.has(s) || s.startsWith("on") || s.startsWith("aria-") || s.startsWith("data-"), M = (s, t) => Object.keys(s).reduce((o, n) => (b(n, t) && (o[n] = s[n]), o), {}), W = /* @__PURE__ */ new Set(), j = (s, t, o, n = "&") => Object.entries(s).reduce(
  (e, [i, d]) => {
    if (b(i, W)) return e;
    if (i.startsWith("__")) {
      const r = `${n}:${i.slice(2)}`;
      if (typeof d == "object" && d !== null) {
        const { base: p, media: m, pseudo: f } = j(
          d,
          t,
          o,
          r
        );
        e.pseudo[r] = { ...p }, e.pseudo = { ...e.pseudo, ...f };
        for (const [a, l] of Object.entries(m))
          e.media[a] = { ...e.media[a], ...l };
      } else
        e.pseudo[r] = d;
    } else {
      const { base: r, media: p } = A(
        i,
        d,
        t,
        o
      );
      e.base = { ...e.base, ...r };
      for (const [m, f] of Object.entries(p))
        e.media[m] = { ...e.media[m], ...f };
    }
    return e;
  },
  {
    base: {},
    media: {},
    pseudo: {}
  }
), $ = (s) => {
  const { as: t, ref: o, className: n, children: e, ...i } = s, { breakpoints: d, colors: r, allowedDOMPropKeys: p } = x(), { base: m, media: f, pseudo: a } = j(
    i,
    d,
    r
  ), l = { ...m, ...a, ...f }, h = u(l), O = M(i, p), S = P[t ?? "div"];
  return /* @__PURE__ */ w.jsx(
    S,
    {
      ref: o,
      ...O,
      className: q(h, n),
      children: e
    }
  );
};
export {
  $ as BaseMotion
};
