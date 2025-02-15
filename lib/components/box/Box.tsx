import { Ui } from "~/core";

export const Box = () => {
  return (
    <Ui
      onClick={() => console.log("click!!")}
      width="32px"
      backgroundColor={{ md: "red", lg: "blue", xl: "green" }}
      __hover={{
        backgroundColor: "#333333",
      }}
      as="input"
    />
  );
};
