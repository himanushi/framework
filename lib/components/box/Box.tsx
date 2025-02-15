import { useRef } from "react";
import { Ui } from "~/core";

export const Box = () => {
  const ref = useRef(null);
  return (
    <Ui
      onClick={() => console.log("clic!!")}
      ref={ref}
      width="32px"
      backgroundColor="#555555"
      __active={{
        backgroundColor: "#333333",
      }}
    >
      aaaa
    </Ui>
  );
};
