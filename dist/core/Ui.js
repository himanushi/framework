import { j as S } from "../_virtual/jsx-runtime.js";
import { css as u, cx as P } from "../node_modules/@emotion/css/dist/emotion-css.esm.js";
import { useSetting as x } from "./UiProvider.js";
const h = (t, e, s) => typeof e == "string" && t.toLowerCase().includes("color") && s[e] ? s[e] : e, E = (t, e, s, r) => {
  if (typeof e != "object" || e === null || Array.isArray(e))
    return { base: { [t]: h(t, e, r) }, media: {} };
  const a = {}, o = {};
  return Object.keys(e).some((n) => s[n]) ? Object.entries(e).forEach(([n, i]) => {
    if (s[n]) {
      const c = `@media (min-width: ${s[n]})`;
      o[c] = {
        ...o[c],
        [t]: h(t, i, r)
      };
    } else
      a[t] = h(t, i, r);
  }) : a[t] = h(t, e, r), { base: a, media: o };
}, j = (t, e) => e.has(t) || t.startsWith("on") || t.startsWith("aria-") || t.startsWith("data-"), M = (t, e) => Object.keys(t).reduce(
  (s, r) => (j(r, e) && (s[r] = t[r]), s),
  {}
), A = /* @__PURE__ */ new Set(), O = (t, e, s, r = "&") => {
  let a = {};
  const o = {};
  let d = {};
  return Object.entries(t).forEach(([n, i]) => {
    if (!j(n, A))
      if (n.startsWith("__")) {
        const c = `${r}:${n.slice(2)}`;
        if (typeof i == "object" && i !== null) {
          const {
            base: m,
            media: f,
            pseudo: l
          } = O(i, e, s, c);
          d[c] = { ...m }, d = { ...d, ...l }, Object.entries(f).forEach(([p, b]) => {
            o[p] = { ...o[p], ...b };
          });
        } else
          d[c] = i;
      } else {
        const { base: c, media: m } = E(n, i, e, s);
        a = { ...a, ...c }, Object.entries(m).forEach(([f, l]) => {
          o[f] = { ...o[f], ...l };
        });
      }
  }), { base: a, media: o, pseudo: d };
}, C = (t) => {
  const { as: e, ref: s, htmTranslate: r, className: a, ...o } = t, d = e || "div", { breakpoints: n, colors: i, allowedDOMPropKeys: c } = x(), { base: m, media: f, pseudo: l } = O(
    o,
    n,
    i
  ), p = { ...m, ...l, ...f }, b = u(p), w = M(o, c);
  return /* @__PURE__ */ S.jsx(
    d,
    {
      ref: s,
      ...w,
      translate: r,
      className: P(b, a)
    }
  );
};
export {
  C as Ui
};
