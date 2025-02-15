import { Ui, type UiProps } from "~/core";

export const Box = (props: UiProps) => {
  return (
    <Ui
      onClick={() => console.log("click!!")}
      width="32px"
      backgroundColor={{ md: "red", lg: "blue", xl: "green" }}
      __hover={{
        backgroundColor: "#333333",
      }}
      {...props}
    >
      aaaaaa
    </Ui>
  );
};
