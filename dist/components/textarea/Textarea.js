import { jsx as e } from "react/jsx-runtime";
import p from "../../node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js";
import { resolveShorthandProps as s } from "../../utils/shorthand.js";
import { textShortHands as m, defaultTextProps as n } from "../text-field/TextField.js";
import { Ui as x } from "../../core/ui/Ui.js";
const i = {
  ...n,
  as: p,
  px: "12px",
  py: "12px",
  resize: "none"
}, h = (o) => {
  const r = { ...i, ...o }, t = s(r, m);
  return /* @__PURE__ */ e(x, { ...t });
};
export {
  h as Textarea
};
