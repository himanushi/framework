import { j as O } from "../_virtual/jsx-runtime.js";
import { css as y, cx as A } from "../node_modules/@emotion/css/dist/emotion-css.esm.js";
import { useStyle as E } from "./StyleProvider.js";
const b = (d, i, a) => typeof i == "string" && d.toLowerCase().includes("color") && a[i] ? a[i] : i, w = (d, i, a) => {
  const l = {}, p = {}, c = {}, m = {}, h = /* @__PURE__ */ new Set([
    "children",
    "className",
    "style",
    "htmTranslate"
  ]), j = (e) => {
    const s = {}, o = {};
    return Object.entries(e).forEach(([r, t]) => {
      if (typeof t == "object" && t !== null && !Array.isArray(t)) {
        let n = !1;
        for (const f in t)
          if (i[f]) {
            n = !0;
            break;
          }
        if (n)
          for (const [f, x] of Object.entries(t))
            if (i[f]) {
              const u = `@media (min-width: ${i[f]})`;
              o[u] || (o[u] = {}), o[u][r] = b(r, x, a);
            } else
              s[r] = b(r, x, a);
        else
          s[r] = b(r, t, a);
      } else
        s[r] = b(r, t, a);
    }), { base: s, media: o };
  };
  return Object.entries(d).forEach(([e, s]) => {
    if (h.has(e) || e.startsWith("on"))
      m[e] = s;
    else if (e.startsWith("__")) {
      const o = `&:${e.slice(2)}`;
      if (typeof s == "object" && s !== null && !Array.isArray(s)) {
        const { base: r, media: t } = j(s);
        p[o] = r, Object.entries(t).forEach(([n, f]) => {
          c[n] || (c[n] = {}), c[n][o] || (c[n][o] = {}), Object.assign(c[n][o], f);
        });
      } else
        p[o] = s;
    } else if (typeof s == "object" && s !== null && !Array.isArray(s)) {
      const { base: o, media: r } = j({
        [e]: s
      });
      l[e] = o[e], Object.entries(r).forEach(([t, n]) => {
        c[t] || (c[t] = {}), c[t][e] = n[e];
      });
    } else
      e === "content" && typeof s == "object" ? l[e] = s.default : l[e] = b(
        e,
        s,
        a
      );
  }), { base: l, pseudo: p, media: c, rest: m };
}, B = (d) => {
  const { as: i, ref: a, ...l } = d, p = i || "div", { breakpoints: c, colors: m } = E(), { base: h, pseudo: j, media: e, rest: s } = w(
    l,
    c,
    m
  ), o = { ...h, ...j, ...e }, r = y(o), { htmTranslate: t, className: n, ...f } = s;
  return /* @__PURE__ */ O.jsx(
    p,
    {
      ref: a,
      ...f,
      translate: t,
      className: A(r, n)
    }
  );
};
export {
  B as Ui
};
