import { j as w } from "../../_virtual/jsx-runtime.js";
import { css as u, cx as q } from "../../node_modules/@emotion/css/dist/emotion-css.esm.js";
import { useSetting as x } from "./UiProvider.js";
const c = (s, t, o) => typeof t == "string" && s.toLowerCase().includes("color") && o[t] ? o[t] : t, P = (s, t, o, n) => {
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
}, b = (s, t) => t.has(s) || s.startsWith("on") || s.startsWith("aria-") || s.startsWith("data-"), A = (s, t) => Object.keys(s).reduce((o, n) => (b(n, t) && (o[n] = s[n]), o), {}), W = /* @__PURE__ */ new Set(), j = (s, t, o, n = "&") => Object.entries(s).reduce(
  (e, [i, m]) => {
    if (b(i, W)) return e;
    if (i.startsWith("__")) {
      const r = `${n}:${i.slice(2)}`;
      if (typeof m == "object" && m !== null) {
        const { base: p, media: d, pseudo: a } = j(
          m,
          t,
          o,
          r
        );
        e.pseudo[r] = { ...p }, e.pseudo = { ...e.pseudo, ...a };
        for (const [f, l] of Object.entries(d))
          e.media[f] = { ...e.media[f], ...l };
      } else
        e.pseudo[r] = m;
    } else {
      const { base: r, media: p } = P(
        i,
        m,
        t,
        o
      );
      e.base = { ...e.base, ...r };
      for (const [d, a] of Object.entries(p))
        e.media[d] = { ...e.media[d], ...a };
    }
    return e;
  },
  {
    base: {},
    media: {},
    pseudo: {}
  }
), D = (s) => {
  const { as: t, ref: o, className: n, children: e, ...i } = s, m = t || "div", { breakpoints: r, colors: p, allowedDOMPropKeys: d } = x(), { base: a, media: f, pseudo: l } = j(
    i,
    r,
    p
  ), h = { ...a, ...l, ...f }, O = u(h), S = A(i, d);
  return /* @__PURE__ */ w.jsx(
    m,
    {
      ref: o,
      ...S,
      className: q(O, n),
      children: e
    }
  );
};
export {
  D as BaseUi
};
