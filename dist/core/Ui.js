import { j as u } from "../_virtual/jsx-runtime.js";
import { css as O, cx as x } from "../node_modules/@emotion/css/dist/emotion-css.esm.js";
import { useStyle as S } from "./StyleProvider.js";
const h = (t, e, r) => typeof e == "string" && t.toLowerCase().includes("color") && r[e] ? r[e] : e, E = (t, e, r, i) => {
  if (typeof e != "object" || e === null || Array.isArray(e))
    return { base: { [t]: h(t, e, i) }, media: {} };
  const c = {}, o = {};
  return Object.keys(e).some((s) => r[s]) ? Object.entries(e).forEach(([s, n]) => {
    if (r[s]) {
      const a = `@media (min-width: ${r[s]})`;
      o[a] = {
        ...o[a],
        [t]: h(t, n, i)
      };
    } else
      c[t] = h(t, n, i);
  }) : c[t] = h(t, e, i), { base: c, media: o };
}, w = /* @__PURE__ */ new Set([
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
]), j = (t, e, r, i = "&") => {
  let c = {};
  const o = {};
  let d = {};
  return Object.entries(t).forEach(([s, n]) => {
    if (!(w.has(s) || s.startsWith("on") || s.startsWith("aria-") || s.startsWith("data-")))
      if (s.startsWith("__")) {
        const a = `${i}:${s.slice(2)}`;
        if (typeof n == "object" && n !== null) {
          const {
            base: l,
            media: m,
            pseudo: f
          } = j(n, e, r, a);
          d[a] = { ...l }, d = { ...d, ...f }, Object.entries(m).forEach(([p, b]) => {
            o[p] = { ...o[p], ...b };
          });
        } else
          d[a] = n;
      } else {
        const { base: a, media: l } = E(s, n, e, r);
        c = { ...c, ...a }, Object.entries(l).forEach(([m, f]) => {
          o[m] = { ...o[m], ...f };
        });
      }
  }), { base: c, media: o, pseudo: d };
}, C = (t) => {
  const { as: e, ref: r, ...i } = t, c = e || "div", { breakpoints: o, colors: d } = S(), { base: s, media: n, pseudo: a } = j(
    i,
    o,
    d
  ), l = { ...s, ...a, ...n }, m = O(l), { htmTranslate: f, className: p, ...b } = i;
  return /* @__PURE__ */ u.jsx(
    c,
    {
      ref: r,
      ...b,
      translate: f,
      className: x(m, p)
    }
  );
};
export {
  C as Ui
};
