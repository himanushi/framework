import { jsxs as m, jsx as t } from "react/jsx-runtime";
import { Ui as n } from "../../core/ui/Ui.js";
import { colors as s } from "../../core/ui/values.js";
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
    checked: a,
    value: i,
    className: c,
    style: l,
    switchSize: d = "m",
    disabled: o,
    ...h
  } = r, e = a ?? !!i ?? !1, { container: u, handle: p } = w[d], y = {
    ...f,
    ...u,
    backgroundColor: e ? s["blue-500"] : s["gray-500"],
    justifyContent: e ? "flex-end" : "flex-start",
    ...o ? { opacity: 0.5, cursor: "not-allowed" } : {},
    style: l
  }, b = {
    ...k,
    ...p
  };
  return /* @__PURE__ */ m(n, { as: "label", className: c, ...y, children: [
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
        ...b
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
