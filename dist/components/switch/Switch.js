import { jsxs as b, jsx as r } from "react/jsx-runtime";
import { Ui as n } from "../../core/ui/Ui.js";
import { colors as s } from "../../utils/constants.js";
const y = {
  s: { container: { w: 35, h: 20, p: 2 }, handle: { w: 16, h: 16 } },
  m: { container: { w: 40, h: 24, p: 2 }, handle: { w: 20, h: 20 } },
  l: { container: { w: 50, h: 28, p: 2 }, handle: { w: 24, h: 24 } }
}, f = {
  radius: 20,
  cursor: "pointer",
  border: "none",
  position: "relative"
}, k = {
  radius: "50%",
  backgroundColor: "white",
  position: "absolute",
  transform: "translateY(-50%)"
}, z = (i) => {
  const {
    checked: c,
    value: l,
    className: d,
    style: h,
    switchSize: p = "m",
    disabled: o,
    ...u
  } = i, e = c ?? !!l ?? !1, { container: t, handle: a } = y[p], m = {
    ...f,
    ...t,
    backgroundColor: e ? s["primary-50"] : s["gray-50"],
    ...o ? { opacity: 0.5, cursor: "not-allowed" } : {},
    style: h
  }, w = {
    ...k,
    ...a,
    left: 2,
    $motion: !0,
    animate: {
      x: e ? t.w - a.w - 4 : 0
    },
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.2
    }
  };
  return /* @__PURE__ */ b(n, { as: "label", className: d, ...m, children: [
    /* @__PURE__ */ r(n, { as: "div", ...w }),
    /* @__PURE__ */ r(
      n,
      {
        as: "input",
        type: "checkbox",
        checked: e,
        disabled: o,
        style: { display: "none" },
        ...u
      }
    )
  ] });
};
export {
  z as Switch
};
