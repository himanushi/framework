import { fn } from "@storybook/test";
import { Motion } from "./Motion";

export default {
  title: "Example/Motion",
  component: Motion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    padding: { control: "object" },
    margin: { control: "object" },
    __hover: { control: "object" },
    __active: { control: "object" },
    __focus: { control: "object" },
    as: { control: "text" },
  },
  args: { onClick: fn() },
};

export const Default = {
  args: {
    children: "Default: Hello, Box!",
    padding: "16px",
    color: "black",
    backgroundColor: "#f0f0f0",
  },
};

// レスポンシブなスタイル指定の例
export const Responsive = {
  args: {
    children: "Responsive Padding Example",
    animate: { rotate: 360 },
  },
};

// 擬似クラス (__hover, __active, __focus) の適用例
export const PseudoStyles = {
  args: {
    children: "PseudoStyles Example",
    padding: "16px",
    __hover: {
      backgroundColor: "lightblue",
      color: "white",
    },
    __active: {
      backgroundColor: "lightgreen",
    },
    __focus: {
      outline: "2px solid blue",
    },
  },
};

// 複数のスタイルプロパティを組み合わせた例
export const CombinedExample = {
  args: {
    children: "Combined Example",
    padding: {
      xs: "4px",
      md: "12px",
      xl: "24px",
    },
    margin: "8px",
    color: "darkred",
    backgroundColor: "lightyellow",
    __hover: {
      color: "white",
      backgroundColor: "red",
    },
    __focus: {
      outline: "2px dashed blue",
    },
    className: "custom-class",
  },
};

// as プロパティを利用したポリモーフィックなレンダリング例
export const PolymorphicExample = {
  args: {
    as: "button",
    children: "I am rendered as a button",
    padding: "12px",
    backgroundColor: "purple",
    color: "white",
    onClick: () => alert("Button clicked"),
  },
};

// DOM の追加プロパティ (onClick, style, className など) が反映される例
export const ExtraPropsExample = {
  args: {
    children: "Extra Props Example",
    padding: "16px",
    onClick: () => console.log("Clicked!"),
    style: { border: "1px solid #ccc", borderRadius: "4px" },
    className: "extra-class",
  },
};
