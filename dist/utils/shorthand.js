const r = (i, n) => {
  let e = {};
  const s = {};
  for (const [f, o] of Object.entries(i))
    if (f in n && o !== void 0) {
      const t = n[f];
      typeof t == "function" ? e = { ...e, ...t(o) } : typeof t == "string" ? typeof o != "boolean" && (e[t] = o) : typeof t == "object" && o === !0 && (e = { ...e, ...t });
    } else
      s[f] = o;
  return { ...s, ...e };
};
export {
  r as resolveShorthandProps
};
