import { jsx as t } from "react/jsx-runtime";
import { resolveShorthandProps as n } from "../../utils/shorthand.js";
import { Ui as e } from "../../core/ui/Ui.js";
const p = {}, m = {
  as: "div"
}, a = (o) => {
  const r = { ...m, ...o }, s = n(r, p);
  return /* @__PURE__ */ t(e, { ...s });
};
export {
  a as Box
};
