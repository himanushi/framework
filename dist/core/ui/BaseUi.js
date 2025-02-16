import { j as u } from "../../_virtual/jsx-runtime.js";
import { css as q, cx as x } from "../../node_modules/@emotion/css/dist/emotion-css.esm.js";
import { useSetting as P } from "../provider/UiProvider.js";
import { motion as A } from "../../node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const c = (s, t, o) => typeof t == "string" && s.toLowerCase().includes("color") && o[t] ? o[t] : t, W = (s, t, o, n) => {
  if (typeof t != "object" || t === null || Array.isArray(t))
    return { base: { [s]: c(s, t, n) }, media: {} };
  const e = {}, i = {};
  return Object.keys(t).some((r) => o[r]) ? Object.entries(t).forEach(([r, p]) => {
    if (o[r]) {
      const d = `@media (min-width: ${o[r]})`;
      i[d] = {
        ...i[d],
        [s]: c(s, p, n)
      };
    } else
      e[s] = c(s, p, n);
  }) : e[s] = c(s, t, n), { base: e, media: i };
}, b = (s, t) => t.has(s) || s.startsWith("on") || s.startsWith("aria-") || s.startsWith("data-"), $ = (s, t) => Object.keys(s).reduce((o, n) => (b(n, t) && (o[n] = s[n]), o), {}), g = /* @__PURE__ */ new Set(), j = (s, t, o, n = "&") => Object.entries(s).reduce(
  (e, [i, m]) => {
    if (b(i, g)) return e;
    if (i.startsWith("__")) {
      const r = `${n}:${i.slice(2)}`;
      if (typeof m == "object" && m !== null) {
        const { base: p, media: d, pseudo: f } = j(
          m,
          t,
          o,
          r
        );
        e.pseudo[r] = { ...p }, e.pseudo = { ...e.pseudo, ...f };
        for (const [a, l] of Object.entries(d))
          e.media[a] = { ...e.media[a], ...l };
      } else
        e.pseudo[r] = m;
    } else {
      const { base: r, media: p } = W(
        i,
        m,
        t,
        o
      );
      e.base = { ...e.base, ...r };
      for (const [d, f] of Object.entries(p))
        e.media[d] = { ...e.media[d], ...f };
    }
    return e;
  },
  {
    base: {},
    media: {},
    pseudo: {}
  }
), E = (s) => {
  const { as: t, ref: o, className: n, children: e, $motion: i, ...m } = s, { breakpoints: r, colors: p, allowedDOMPropKeys: d } = P(), { base: f, media: a, pseudo: l } = j(
    m,
    r,
    p
  ), h = $(m, d), O = i ? A[t ?? "div"] : t || "div", S = { ...f, ...l, ...a }, w = q(S);
  return /* @__PURE__ */ u.jsx(
    O,
    {
      ref: o,
      ...h,
      className: x(w, n),
      children: e
    }
  );
};
export {
  E as BaseUi
};
