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
}, h = (t, e, s) => typeof e == "string" && t.toLowerCase().includes("color") && s[e] ? s[e] : e, P = (t, e, s, o) => {
  if (typeof e != "object" || e === null || Array.isArray(e))
    return { base: { [t]: h(t, e, o) }, media: {} };
  const d = {}, i = {};
  return Object.keys(e).some((n) => s[n]) ? (e.xs !== void 0 && (d[t] = h(t, e.xs, o)), Object.entries(e).forEach(([n, a]) => {
    if (n !== "xs" && s[n]) {
      const f = `@media (min-width: ${s[n]})`;
      i[f] = {
        ...i[f],
        [t]: h(t, a, o)
      };
    }
  }), { base: d, media: i }) : { base: { [t]: h(t, e, o) }, media: {} };
}, j = (t, e) => e.has(t) || t.startsWith("on") || t.startsWith("while") || t.startsWith("drag") || t.startsWith("layout") || t.startsWith("aria-") || t.startsWith("data-"), A = (t, e) => Object.keys(t).reduce((s, o) => (j(o, e) && (s[o] = t[o]), s), {}), g = /* @__PURE__ */ new Set(), x = (t) => t.join(""), O = (t, e, s, o = []) => {
  let d = {};
  const i = {}, r = {};
  for (const [n, a] of Object.entries(t))
    if (!j(n, g))
      if (n.startsWith("__")) {
        const f = w(n), b = [...o, f], c = `&${x(b)}`;
        if (typeof a == "object" && a !== null) {
          const {
            base: u,
            media: S,
            pseudo: p
          } = O(a, e, s, b);
          Object.keys(u).length > 0 && (r[c] = u), Object.assign(r, p), Object.entries(S).forEach(([l, m]) => {
            r[l] || (r[l] = {}), r[l][c] || (r[l][c] = {}), Object.assign(r[l][c], m);
          });
        } else
          r[c] = h(n, a, s);
      } else {
        const { base: f, media: b } = P(n, a, e, s);
        d = { ...d, ...f }, Object.entries(b).forEach(([c, u]) => {
          i[c] || (i[c] = {}), i[c] = { ...i[c], ...u };
        });
      }
  return { base: d, media: i, pseudo: r };
}, B = (t, e, s) => O(t, e, s);
export {
  A as filterAllowedDOMProps,
  B as flattenStyles,
  P as resolveResponsiveStyles
};
