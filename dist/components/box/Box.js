import { j as r } from "../../_virtual/jsx-runtime.js";
import { Ui as e } from "../../core/Ui.js";
import "../../core/StyleProvider.js";
const n = (o) => /* @__PURE__ */ r.jsx(
  e,
  {
    onClick: () => console.log("click!!"),
    width: "32px",
    backgroundColor: { md: "red", lg: "blue", xl: "green" },
    __hover: {
      backgroundColor: "#333333"
    },
    ...o,
    children: "aaaaaa"
  }
);
export {
  n as Box
};
