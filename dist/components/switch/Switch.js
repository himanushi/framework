import { jsxs as b, jsx as t } from "react/jsx-runtime";
import { Ui as n } from "../../core/ui/Ui.js";
import { defaultColors as a } from "../../core/provider/defaultValues.js";
const w = {
  s: { container: { w: 35, h: 20, p: 2 }, handle: { w: 16, h: 16 } },
  m: { container: { w: 40, h: 24, p: 2 }, handle: { w: 20, h: 20 } },
  l: { container: { w: 50, h: 28, p: 2 }, handle: { w: 24, h: 24 } }
}, f = {
  radius: 20,
  cursor: "pointer",
  border: "none"
}, k = {
  radius: "50%",
  backgroundColor: "white"
}, g = (r) => {
  const {
    checked: s,
    value: i,
    className: c,
    style: l,
    switchSize: d = "m",
    disabled: o,
    ...h
  } = r, e = s ?? !!i ?? !1, { container: u, handle: p } = w[d], m = {
    ...f,
    ...u,
    backgroundColor: e ? a["amber-400"] : a["gray-400"],
    justifyContent: e ? "flex-end" : "flex-start",
    ...o ? { opacity: 0.5, cursor: "not-allowed" } : {},
    style: l
  }, y = {
    ...k,
    ...p
  };
  return /* @__PURE__ */ b(n, { as: "label", className: c, ...m, children: [
    /* @__PURE__ */ t(
      n,
      {
        as: "div",
        $motion: !0,
        layout: !0,
        transition: {
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2
        },
        ...y
      }
    ),
    /* @__PURE__ */ t(
      n,
      {
        as: "input",
        type: "checkbox",
        checked: e,
        disabled: o,
        style: { display: "none" },
        ...h
      }
    )
  ] });
};
export {
  g as Switch
};
