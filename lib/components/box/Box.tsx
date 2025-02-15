import { Ui, type UiProps } from "~/core";
import { resolveShorthandProps } from "~/utils/resolveShorthandProps";

const shortHands = {
  itemsCenter: { alignItems: "center" },
  itemsStart: { alignItems: "flex-start" },
  itemsEnd: { alignItems: "flex-end" },
  justifyCenter: { justifyContent: "center" },
  justifyStart: { justifyContent: "flex-start" },
  justifyEnd: { justifyContent: "flex-end" },
};

const defaultProps = {
  display: "flex",
};

export const Box = (props: UiProps) => {
  const mergedProps = { ...defaultProps, ...props };
  const newProps = resolveShorthandProps(mergedProps, shortHands);

  return (
    <Ui
      color="gray-900"
      height="1000px"
      backgroundColor={{
        xs: "",
        sm: "",
        md: "red",
        lg: "blue",
        xl: "green",
      }}
      border={{
        xs: "1px solid",
        sm: "2px solid",
        md: "3px solid",
        lg: "4px solid",
        xl: "5px solid",
      }}
      borderColor="gray-900"
      width={{ lg: "35px" }}
      __hover={{
        backgroundColor: {
          xs: "",
          sm: "",
          md: "yellow",
          lg: "purple",
          xl: "pink",
        },
      }}
      {...newProps}
    />
  );
};
