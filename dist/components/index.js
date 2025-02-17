import { jsxs as o, jsx as n } from "react/jsx-runtime";
import { useState as r } from "react";
const i = () => {
  const [t, e] = r(0);
  return /* @__PURE__ */ o("div", { children: [
    /* @__PURE__ */ n("h1", { children: t }),
    /* @__PURE__ */ n("button", { onClick: () => e(t + 1), children: "Increment" })
  ] });
};
export {
  i as Test
};
