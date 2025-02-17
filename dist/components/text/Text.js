import { jsx as t } from "react/jsx-runtime";
import { resolveShorthandProps as n } from "../../utils/shorthand.js";
import { Ui as s } from "../../core/ui/Ui.js";
const e = {
  bold: { fontWeight: "bold" },
  nowrap: { whiteSpace: "nowrap" }
}, p = {
  display: "inline",
  color: "gray-900",
  fontWeight: "normal",
  as: "span"
}, m = (o) => {
  const r = n(
    { ...p, ...o },
    e
  );
  return /* @__PURE__ */ t(s, { ...r });
};
export {
  m as Text
};
