import { j } from "../_virtual/jsx-runtime.js";
import { css as b, cx as x } from "../node_modules/@emotion/css/dist/emotion-css.esm.js";
import { useStyle as S } from "./StyleProvider.js";
const w = (m, c) => {
  const n = {}, i = {}, e = {}, a = {}, d = /* @__PURE__ */ new Set([
    "children",
    "className",
    "style",
    "htmTranslate"
  ]);
  return Object.entries(m).forEach(([s, t]) => {
    if (d.has(s) || s.startsWith("on"))
      a[s] = t;
    else if (s.startsWith("__")) {
      const o = `&:${s.slice(2)}`;
      i[o] = t;
    } else
      typeof t == "object" && t !== null && !Array.isArray(t) ? Object.entries(t).forEach(([o, f]) => {
        if (c[o]) {
          const r = `@media (min-width: ${c[o]})`;
          e[r] || (e[r] = {}), e[r][s] = f;
        }
      }) : s === "content" && typeof t == "object" ? n[s] = t.default : n[s] = t;
  }), { base: n, pseudo: i, media: e, rest: a };
}, P = (m) => {
  const { as: c, ref: n, ...i } = m, e = c || "div", { breakpoints: a } = S(), { base: d, pseudo: s, media: t, rest: o } = w(
    i,
    a
  ), f = { ...d, ...s, ...t }, r = b(f), { htmTranslate: l, className: p, ...h } = o;
  return /* @__PURE__ */ j.jsx(
    e,
    {
      ref: n,
      ...h,
      translate: l,
      className: x(r, p)
    }
  );
};
export {
  P as Ui
};
