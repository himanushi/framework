import { jsxs as b, jsx as n } from "react/jsx-runtime";
import { useRef as h, useEffect as y } from "react";
import { Ui as t } from "../../core/ui/Ui.js";
import { colors as i } from "../../core/ui/values.js";
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
    value: u,
    indeterminate: r,
    className: d,
    style: m,
    disabled: s,
    ...p
  } = c, e = l ?? !!u ?? !1, f = {
    ...k,
    backgroundColor: r || e ? i["blue-500"] : "transparent",
    borderColor: r || e ? i["blue-500"] : i["gray-200"],
    ...s ? { opacity: 0.5, cursor: "not-allowed" } : {},
    style: m
  }, o = h(!0);
  return y(() => {
    o.current = !1;
  }, []), /* @__PURE__ */ b(t, { as: "label", userSelect: "none", className: d, ...f, children: [
    r ? /* @__PURE__ */ n(
      t,
      {
        as: "div",
        $motion: !0,
        layout: !0,
        initial: o.current ? void 0 : { scale: 0 },
        animate: { scale: 1 },
        transition: { duration: 0.1 },
        ...a,
        children: "—"
      }
    ) : e ? /* @__PURE__ */ n(
      t,
      {
        as: "div",
        $motion: !0,
        layout: !0,
        initial: o.current ? void 0 : { scale: 0 },
        animate: { scale: 1 },
        transition: { duration: 0.1 },
        ...a,
        children: "✓"
      }
    ) : null,
    /* @__PURE__ */ n(
      t,
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
