import { j as s } from "../../_virtual/jsx-runtime.js";
import { Ui as n } from "../../core/Ui.js";
import "../../node_modules/@emotion/css/dist/emotion-css.esm.js";
import "../../core/UiProvider.js";
import { resolveShorthandProps as p } from "../../utils/shorthand.js";
const e = {
  bold: { fontWeight: "bold" },
  nowrap: { whiteSpace: "nowrap" }
}, i = {
  display: "inline",
  color: "gray-900",
  fontWeight: "normal",
  as: "span"
}, f = (o) => {
  const r = { ...i, ...o }, t = p(r, e);
  return /* @__PURE__ */ s.jsx(n, { ...t });
};
export {
  f as Text
};
