import type { StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Ui } from "./Ui";

export default {
  title: "Core/Ui",
  component: Ui,
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

type Story = StoryObj<typeof Ui>;

// 基本的なスタイリング
export const BasicStyling: Story = {
  args: {
    children: "Basic Styling Example",
    padding: "16px",
    margin: "8px",
    backgroundColor: "#f0f0f0",
    color: "#333",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
};

// レスポンシブデザイン
export const ResponsiveDesign: Story = {
  args: {
    children: "Responsive Design Example",
    width: {
      xs: "100px",
      sm: "200px",
      md: "300px",
      lg: "400px",
      xl: "500px",
    },
    padding: {
      xs: "8px",
      sm: "12px",
      md: "16px",
      lg: "20px",
      xl: "24px",
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px",
    },
    backgroundColor: "#e0e0e0",
  },
};

// 擬似クラスの組み合わせ
export const PseudoClassCombinations: Story = {
  args: {
    children: "Hover, Focus, and Active States",
    padding: "16px",
    backgroundColor: "#ffffff",
    border: "2px solid #ccc",
    borderRadius: "8px",
    cursor: "pointer",
    __hover: {
      backgroundColor: "#f0f0f0",
      transform: "translateY(-2px)",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    __active: {
      backgroundColor: "#e0e0e0",
      transform: "translateY(0)",
      boxShadow: "none",
    },
    __focus: {
      outline: "none",
      borderColor: "#007bff",
      boxShadow: "0 0 0 3px rgba(0,123,255,0.25)",
    },
  },
};

// ネストされた要素のスタイリング
export const NestedElements: Story = {
  args: {
    style: { gap: "8px" },
    children: (
      <>
        <Ui
          padding="16px"
          backgroundColor="#f8f9fa"
          borderRadius="8px"
          boxShadow="0 2px 4px rgba(0,0,0,0.05)"
        >
          <Ui
            as="h3"
            margin="0"
            marginBottom="8px"
            color="#2b2b2b"
            fontSize="18px"
          >
            Parent Container
          </Ui>
          <Ui
            padding="12px"
            backgroundColor="#ffffff"
            borderRadius="4px"
            border="1px solid #e9ecef"
          >
            Nested Child
          </Ui>
        </Ui>
      </>
    ),
  },
};

// フレックスボックスレイアウト
export const FlexboxLayout: Story = {
  args: {
    style: { gap: "8px" },
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    children: (
      <>
        <Ui
          padding="12px"
          backgroundColor="#ffffff"
          borderRadius="4px"
          boxShadow="0 1px 3px rgba(0,0,0,0.1)"
          width="200px"
          textAlign="center"
        >
          Item 1
        </Ui>
        <Ui
          padding="12px"
          backgroundColor="#ffffff"
          borderRadius="4px"
          boxShadow="0 1px 3px rgba(0,0,0,0.1)"
          width="200px"
          textAlign="center"
        >
          Item 2
        </Ui>
        <Ui
          padding="12px"
          backgroundColor="#ffffff"
          borderRadius="4px"
          boxShadow="0 1px 3px rgba(0,0,0,0.1)"
          width="200px"
          textAlign="center"
        >
          Item 3
        </Ui>
      </>
    ),
  },
};

// グリッドレイアウト
export const GridLayout: Story = {
  args: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    padding: "16px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    children: Array.from({ length: 9 }).map((_, index) => (
      <Ui
        key={index}
        padding="16px"
        backgroundColor="#ffffff"
        borderRadius="4px"
        boxShadow="0 1px 3px rgba(0,0,0,0.1)"
        textAlign="center"
      >
        Grid Item {index + 1}
      </Ui>
    )),
  },
};

// 複雑なアニメーション
export const ComplexAnimations: Story = {
  args: {
    $motion: true,
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    padding: "16px",
    backgroundColor: "#4a90e2",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer",
    children: "Animated Element",
  },
};

// カスタムスタイルの継承
export const StyleInheritance: Story = {
  args: {
    className: "custom-component",
    style: {
      "--custom-color": "#ff6b6b",
      "--custom-padding": "16px",
    },
    padding: "var(--custom-padding)",
    color: "var(--custom-color)",
    backgroundColor: "#ffffff",
    border: "2px solid var(--custom-color)",
    borderRadius: "8px",
    children: "Custom Styled Component",
  },
};

// 条件付きスタイリング
export const ConditionalStyling: Story = {
  args: {
    children: (() => {
      const items = ["Success", "Warning", "Error"];
      return (
        <Ui style={{ gap: "8px" }} flexDirection="column">
          {items.map((status) => (
            <Ui
              key={status}
              padding="12px"
              borderRadius="4px"
              backgroundColor={
                status === "Success"
                  ? "#d4edda"
                  : status === "Warning"
                    ? "#fff3cd"
                    : "#f8d7da"
              }
              color={
                status === "Success"
                  ? "#155724"
                  : status === "Warning"
                    ? "#856404"
                    : "#721c24"
              }
              border={`1px solid ${
                status === "Success"
                  ? "#c3e6cb"
                  : status === "Warning"
                    ? "#ffeeba"
                    : "#f5c6cb"
              }`}
            >
              {status} Message
            </Ui>
          ))}
        </Ui>
      );
    })(),
  },
};

// ポジショニングとz-index
export const PositioningAndStacking: Story = {
  args: {
    style: { height: "200px" },
    position: "relative",
    padding: "16px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    children: (
      <>
        <Ui
          position="absolute"
          top="16px"
          left="16px"
          zIndex={1}
          padding="8px"
          backgroundColor="#007bff"
          color="white"
          borderRadius="4px"
        >
          Top Left
        </Ui>
        <Ui
          position="absolute"
          top="16px"
          right="16px"
          zIndex={2}
          padding="8px"
          backgroundColor="#28a745"
          color="white"
          borderRadius="4px"
        >
          Top Right
        </Ui>
        <Ui
          position="absolute"
          bottom="16px"
          left="16px"
          zIndex={3}
          padding="8px"
          backgroundColor="#ffc107"
          color="black"
          borderRadius="4px"
        >
          Bottom Left
        </Ui>
        <Ui
          position="absolute"
          bottom="16px"
          right="16px"
          zIndex={4}
          padding="8px"
          backgroundColor="#dc3545"
          color="white"
          borderRadius="4px"
        >
          Bottom Right
        </Ui>
      </>
    ),
  },
};

// アクセシビリティ対応
export const AccessibilityFeatures: Story = {
  args: {
    as: "button",
    role: "button",
    tabIndex: 0,
    "aria-label": "Accessible Button",
    padding: "16px",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    __hover: {
      backgroundColor: "#0056b3",
    },
    __focus: {
      outline: "none",
      boxShadow: "0 0 0 3px rgba(0,123,255,0.5)",
    },
    children: "Click Me",
  },
};

// ネストした擬似クラスとレスポンシブデザイン
export const NestedPseudo: Story = {
  args: {
    as: "button",
    role: "button",
    tabIndex: 0,
    "aria-label": "Accessible Button",
    padding: "16px",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    disabled: true,
    __disabled: {
      backgroundColor: "red",
      __hover: {
        backgroundColor: {
          xs: "blue",
          sm: "green",
          md: "yellow",
          lg: "purple",
        },
      },
    },
    children: "Click Me",
  },
};
