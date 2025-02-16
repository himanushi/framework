import { j as t } from "../../_virtual/jsx-runtime.js";
import { css as e } from "../../node_modules/@emotion/css/dist/emotion-css.esm.js";
import { Ui as i } from "../../core/Ui.js";
import "../../core/UiProvider.js";
import { resolveShorthandProps as n } from "../../utils/shorthand.js";
const m = {
  size: "fontSize"
}, p = {
  as: "span",
  display: "inline-block",
  lineHeight: "0.1rem",
  className: e("svg { width: 1em; height: 100%; }")
}, f = (o) => {
  const s = { ...p, ...o }, r = n(s, m);
  return /* @__PURE__ */ t.jsx(i, { ...r });
};
export {
  f as Icon
};
