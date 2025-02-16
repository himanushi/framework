import { j as w } from "../../_virtual/jsx-runtime.js";
import { css as u, cx as q } from "../../node_modules/@emotion/css/dist/emotion-css.esm.js";
import { useSetting as x } from "../provider/UiProvider.js";
import { motion as P } from "../../node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const c = (s, t, o) => typeof t == "string" && s.toLowerCase().includes("color") && o[t] ? o[t] : t, A = (s, t, o, r) => {
  if (typeof t != "object" || t === null || Array.isArray(t))
    return { base: { [s]: c(s, t, r) }, media: {} };
  const e = {}, i = {};
  return Object.keys(t).some((n) => o[n]) ? Object.entries(t).forEach(([n, p]) => {
    if (o[n]) {
      const m = `@media (min-width: ${o[n]})`;
      i[m] = {
        ...i[m],
        [s]: c(s, p, r)
      };
    } else
      e[s] = c(s, p, r);
  }) : e[s] = c(s, t, r), { base: e, media: i };
}, b = (s, t) => t.has(s) || s.startsWith("on") || s.startsWith("aria-") || s.startsWith("data-"), W = (s, t) => Object.keys(s).reduce((o, r) => (b(r, t) && (o[r] = s[r]), o), {}), g = /* @__PURE__ */ new Set(), j = (s, t, o, r = "&") => Object.entries(s).reduce(
  (e, [i, d]) => {
    if (b(i, g)) return e;
    if (i.startsWith("__")) {
      const n = `${r}:${i.slice(2)}`;
      if (typeof d == "object" && d !== null) {
        const { base: p, media: m, pseudo: f } = j(
          d,
          t,
          o,
          n
        );
        e.pseudo[n] = { ...p }, e.pseudo = { ...e.pseudo, ...f };
        for (const [a, l] of Object.entries(m))
          e.media[a] = { ...e.media[a], ...l };
      } else
        e.pseudo[n] = d;
    } else {
      const { base: n, media: p } = A(
        i,
        d,
        t,
        o
      );
      e.base = { ...e.base, ...n };
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
  const { as: t, ref: o, className: r, children: e, ...i } = s, { breakpoints: d, colors: n, allowedDOMPropKeys: p } = x(), { base: m, media: f, pseudo: a } = j(
    i,
    d,
    n
  ), l = { ...m, ...a, ...f }, h = u(l), O = W(i, p), S = P[t ?? "div"];
  return /* @__PURE__ */ w.jsx(
    S,
    {
      ref: o,
      ...O,
      className: q(h, r),
      children: e
    }
  );
};
export {
  $ as BaseUi
};
