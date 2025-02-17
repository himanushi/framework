import { jsxs as b, jsx as n } from "react/jsx-runtime";
import { useRef as h, useEffect as y } from "react";
import { Ui as r } from "../../core/ui/Ui.js";
import { defaultColors as i } from "../../core/provider/defaultValues.js";
const k = {
  w: 20,
  h: 20,
  border: "2px solid",
  radius: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer"
}, s = {
  color: "white",
  fontSize: 16
}, j = (c) => {
  const {
    checked: l,
    value: u,
    indeterminate: e,
    className: d,
    style: m,
    disabled: a,
    ...p
  } = c, t = l ?? !!u ?? !1, f = {
    ...k,
    backgroundColor: e || t ? i["amber-400"] : "transparent",
    borderColor: e || t ? i["amber-400"] : i["gray-400"],
    ...a ? { opacity: 0.5, cursor: "not-allowed" } : {},
    style: m
  }, o = h(!0);
  return y(() => {
    o.current = !1;
  }, []), /* @__PURE__ */ b(r, { as: "label", userSelect: "none", className: d, ...f, children: [
    e ? /* @__PURE__ */ n(
      r,
      {
        as: "div",
        $motion: !0,
        layout: !0,
        initial: o.current ? void 0 : { scale: 0 },
        animate: { scale: 1 },
        transition: { duration: 0.1 },
        ...s,
        children: "—"
      }
    ) : t ? /* @__PURE__ */ n(
      r,
      {
        as: "div",
        $motion: !0,
        layout: !0,
        initial: o.current ? void 0 : { scale: 0 },
        animate: { scale: 1 },
        transition: { duration: 0.1 },
        ...s,
        children: "✓"
      }
    ) : null,
    /* @__PURE__ */ n(
      r,
      {
        as: "input",
        type: "checkbox",
        checked: t,
        disabled: a,
        style: { display: "none" },
        indeterminate: e,
        ...p
      }
    )
  ] });
};
export {
  j as Checkbox
};
