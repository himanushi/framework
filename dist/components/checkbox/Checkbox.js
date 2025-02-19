import { jsxs as h, jsx as n } from "react/jsx-runtime";
import { useRef as y, useEffect as b } from "react";
import { Ui as r } from "../../core/ui/Ui.js";
import { colors as i } from "../../utils/constants.js";
const k = {
  w: 20,
  h: 20,
  border: "2px solid",
  radius: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer"
}, a = {
  color: "white",
  fontSize: 16
}, j = (c) => {
  const {
    checked: l,
    value: d,
    indeterminate: t,
    className: u,
    style: m,
    disabled: s,
    ...p
  } = c, e = l ?? !!d ?? !1, f = {
    ...k,
    backgroundColor: t || e ? i["primary-50"] : "transparent",
    borderColor: t || e ? i["primary-50"] : i["gray-20"],
    ...s ? { opacity: 0.5, cursor: "not-allowed" } : {},
    style: m
  }, o = y(!0);
  return b(() => {
    o.current = !1;
  }, []), /* @__PURE__ */ h(r, { as: "label", userSelect: "none", className: u, ...f, children: [
    t ? /* @__PURE__ */ n(
      r,
      {
        as: "div",
        $motion: !0,
        initial: o.current ? void 0 : { scale: 0 },
        animate: { scale: 1 },
        transition: { duration: 0.1 },
        ...a,
        children: "—"
      }
    ) : e ? /* @__PURE__ */ n(
      r,
      {
        as: "div",
        $motion: !0,
        initial: o.current ? void 0 : { scale: 0 },
        animate: { scale: 1 },
        transition: { duration: 0.1 },
        ...a,
        children: "✓"
      }
    ) : null,
    /* @__PURE__ */ n(
      r,
      {
        as: "input",
        type: "checkbox",
        checked: e,
        disabled: s,
        style: { display: "none" },
        ...p
      }
    )
  ] });
};
export {
  j as Checkbox
};
