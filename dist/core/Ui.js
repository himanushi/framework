import { j as O } from "../_virtual/jsx-runtime.js";
import { css as w, cx as x } from "../node_modules/@emotion/css/dist/emotion-css.esm.js";
import { useStyle as P } from "./StyleProvider.js";
const h = (e, t, s) => typeof t == "string" && e.toLowerCase().includes("color") && s[t] ? s[t] : t, S = (e, t, s, c) => {
  if (typeof t != "object" || t === null || Array.isArray(t))
    return { base: { [e]: h(e, t, c) }, media: {} };
  const i = {}, r = {};
  return Object.keys(t).some((o) => s[o]) ? Object.entries(t).forEach(([o, n]) => {
    if (s[o]) {
      const a = `@media (min-width: ${s[o]})`;
      r[a] = {
        ...r[a],
        [e]: h(e, n, c)
      };
    } else
      i[e] = h(e, n, c);
  }) : i[e] = h(e, t, c), { base: i, media: r };
}, E = /* @__PURE__ */ new Set([
  "children",
  "className",
  "style",
  "htmTranslate",
  "id",
  "disabled",
  "href",
  "alt",
  "src",
  "value",
  "defaultValue",
  "placeholder",
  "name",
  "type",
  "readOnly",
  "required",
  "role",
  "autoFocus",
  "form",
  "max",
  "min",
  "step",
  "method"
]), u = (e) => E.has(e) || e.startsWith("on") || e.startsWith("aria-") || e.startsWith("data-"), M = (e) => Object.keys(e).reduce(
  (t, s) => (u(s) && (t[s] = e[s]), t),
  {}
), j = (e, t, s, c = "&") => {
  let i = {};
  const r = {};
  let d = {};
  return Object.entries(e).forEach(([o, n]) => {
    if (!u(o))
      if (o.startsWith("__")) {
        const a = `${c}:${o.slice(2)}`;
        if (typeof n == "object" && n !== null) {
          const {
            base: m,
            media: l,
            pseudo: f
          } = j(n, t, s, a);
          d[a] = { ...m }, d = { ...d, ...f }, Object.entries(l).forEach(([p, b]) => {
            r[p] = { ...r[p], ...b };
          });
        } else
          d[a] = n;
      } else {
        const { base: a, media: m } = S(o, n, t, s);
        i = { ...i, ...a }, Object.entries(m).forEach(([l, f]) => {
          r[l] = { ...r[l], ...f };
        });
      }
  }), { base: i, media: r, pseudo: d };
}, C = (e) => {
  const { as: t, ref: s, htmTranslate: c, className: i, ...r } = e, d = t || "div", { breakpoints: o, colors: n } = P(), { base: a, media: m, pseudo: l } = j(
    r,
    o,
    n
  ), f = { ...a, ...l, ...m }, p = w(f), b = M(r);
  return /* @__PURE__ */ O.jsx(
    d,
    {
      ref: s,
      ...b,
      translate: c,
      className: x(p, i)
    }
  );
};
export {
  C as Ui
};
