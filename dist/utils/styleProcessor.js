const W = /* @__PURE__ */ new Set([
  "before",
  "after",
  "first-line",
  "first-letter",
  "selection",
  "marker",
  "backdrop",
  "placeholder"
]), w = (t) => {
  if (t.startsWith("__")) {
    const e = t.slice(2);
    return `${W.has(e) ? "::" : ":"}${e}`;
  }
  return t;
}, b = (t, e, s) => typeof e == "string" && t.toLowerCase().includes("color") && s[e] ? s[e] : e, P = (t, e, s, n) => {
  if (typeof e != "object" || e === null || Array.isArray(e))
    return { base: { [t]: b(t, e, n) }, media: {} };
  const d = {}, c = {};
  if (!Object.keys(e).some((o) => s[o]))
    return { base: { [t]: b(t, e, n) }, media: {} };
  e.xs !== void 0 && (d[t] = b(t, e.xs, n));
  for (const [o, a] of Object.entries(e))
    if (o !== "xs" && s[o]) {
      const f = `@media (min-width: ${s[o]})`;
      c[f] = {
        ...c[f],
        [t]: b(t, a, n)
      };
    }
  return { base: d, media: c };
}, h = (t, e) => e.has(t) || t.startsWith("on") || t.startsWith("while") || t.startsWith("drag") || t.startsWith("layout") || t.startsWith("aria-") || t.startsWith("data-"), A = (t, e) => Object.keys(t).reduce((s, n) => (h(n, e) && (s[n] = t[n]), s), {}), g = /* @__PURE__ */ new Set(), x = (t) => t.join(""), p = (t, e, s, n = []) => {
  let d = {};
  const c = {}, r = {};
  for (const [o, a] of Object.entries(t))
    if (!h(o, g))
      if (o.startsWith("__")) {
        const f = w(o), m = [...n, f], i = `&${x(m)}`;
        if (typeof a == "object" && a !== null) {
          const {
            base: u,
            media: j,
            pseudo: S
          } = p(a, e, s, m);
          Object.keys(u).length > 0 && (r[i] = u), Object.assign(r, S);
          for (const [l, O] of Object.entries(j))
            r[l] || (r[l] = {}), r[l][i] || (r[l][i] = {}), Object.assign(r[l][i], O);
        } else
          r[i] = b(o, a, s);
      } else {
        const { base: f, media: m } = P(o, a, e, s);
        d = { ...d, ...f };
        for (const [i, u] of Object.entries(m))
          c[i] || (c[i] = {}), c[i] = { ...c[i], ...u };
      }
  return { base: d, media: c, pseudo: r };
}, B = (t, e, s) => p(t, e, s);
export {
  A as filterAllowedDOMProps,
  B as flattenStyles,
  P as resolveResponsiveStyles
};
