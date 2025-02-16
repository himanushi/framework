import { j as h } from "../../_virtual/jsx-runtime.js";
import { css as g, cx as q } from "../../node_modules/@emotion/css/dist/emotion-css.esm.js";
import { useSetting as y } from "../provider/UiProvider.js";
import { motion as P } from "../../node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const c = (t, e, o) => typeof e == "string" && t.toLowerCase().includes("color") && o[e] ? o[e] : e, A = (t, e, o, n) => {
  if (typeof e != "object" || e === null || Array.isArray(e))
    return { base: { [t]: c(t, e, n) }, media: {} };
  const s = {}, r = {};
  return Object.keys(e).some((i) => o[i]) ? Object.entries(e).forEach(([i, l]) => {
    if (o[i]) {
      const d = `@media (min-width: ${o[i]})`;
      r[d] = {
        ...r[d],
        [t]: c(t, l, n)
      };
    } else
      s[t] = c(t, l, n);
  }) : s[t] = c(t, e, n), { base: s, media: r };
}, S = (t, e) => e.has(t) || t.startsWith("on") || t.startsWith("aria-") || t.startsWith("data-"), W = (t, e) => Object.keys(t).reduce((o, n) => (S(n, e) && (o[n] = t[n]), o), {}), $ = /* @__PURE__ */ new Set(), O = (t, e, o, n = "&") => Object.entries(t).reduce(
  (s, [r, m]) => {
    if (S(r, $)) return s;
    if (r.startsWith("__")) {
      const i = `${n}:${r.slice(2)}`;
      if (typeof m == "object" && m !== null) {
        const { base: l, media: d, pseudo: f } = O(
          m,
          e,
          o,
          i
        );
        s.pseudo[i] = { ...l }, s.pseudo = { ...s.pseudo, ...f };
        for (const [p, a] of Object.entries(d))
          s.media[p] = { ...s.media[p], ...a };
      } else
        s.pseudo[i] = m;
    } else {
      const { base: i, media: l } = A(
        r,
        m,
        e,
        o
      );
      s.base = { ...s.base, ...i };
      for (const [d, f] of Object.entries(l))
        s.media[d] = { ...s.media[d], ...f };
    }
    return s;
  },
  {
    base: {},
    media: {},
    pseudo: {}
  }
), I = (t) => {
  const { as: e, ref: o, className: n, children: s, $motion: r, ...m } = t, { breakpoints: i, colors: l, allowedDOMPropKeys: d } = y(), { base: f, media: p, pseudo: a } = O(
    m,
    i,
    l
  ), b = W(m, d), j = r ? P[e ?? "div"] : e || "div";
  if (Object.keys(p).length === 0 && Object.keys(a).length === 0) {
    const x = {
      ...f,
      ...b.style
    };
    return /* @__PURE__ */ h.jsx(
      j,
      {
        ref: o,
        ...b,
        style: x,
        className: n,
        children: s
      }
    );
  }
  const u = { ...f, ...a, ...p }, w = g(u);
  return /* @__PURE__ */ h.jsx(
    j,
    {
      ref: o,
      ...b,
      className: q(w, n),
      children: s
    }
  );
};
export {
  I as BaseUi
};
