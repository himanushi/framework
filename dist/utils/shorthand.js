const s = (r, i) => {
  let t = {};
  const n = {};
  return Object.entries(r).forEach(([f, o]) => {
    if (f in i && o !== void 0) {
      const e = i[f];
      typeof e == "function" ? t = { ...t, ...e(o) } : typeof e == "string" ? typeof o != "boolean" && (t[e] = o) : typeof e == "object" && o === !0 && (t = { ...t, ...e });
    } else
      n[f] = o;
  }), { ...n, ...t };
};
export {
  s as resolveShorthandProps
};
