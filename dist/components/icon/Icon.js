import { jsx as r } from "react/jsx-runtime";
import { css as t } from "../../node_modules/@emotion/css/dist/emotion-css.esm.js";
import { resolveShorthandProps as e } from "../../utils/shorthand.js";
import { Ui as i } from "../../core/ui/Ui.js";
const n = {
  size: "fontSize"
}, m = {
  as: "span",
  display: "inline-block",
  lineHeight: "0.1rem",
  className: t("svg { width: 1em; height: 100%; }")
}, l = (o) => {
  const s = e(
    { ...m, ...o },
    n
  );
  return /* @__PURE__ */ r(i, { ...s });
};
export {
  l as Icon
};
