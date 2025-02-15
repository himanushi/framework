const f = (i, n) => {
  const e = {}, r = {};
  return Object.entries(i).forEach(([s, t]) => {
    if (s in n && t !== void 0) {
      const o = n[s];
      typeof o == "string" ? typeof t != "boolean" && (e[o] = t) : typeof o == "object" && t === !0 && Object.assign(e, o);
    } else
      r[s] = t;
  }), { ...e, ...r };
};
export {
  f as resolveShorthandProps
};
