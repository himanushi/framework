import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
    placeholder: "プレースホルダーテキスト",
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

// デフォルトのテキストエリア
export const Default: Story = {
  args: {
    w: "300px",
  },
};

// 最小/最大行数指定
export const RowLimits: Story = {
  args: {
    w: "300px",
    minRows: 3,
    maxRows: 6,
    defaultValue:
      "この\nテキストエリアは\n最小3行\n最大6行\nまで\n表示されます。",
  },
};

// エラー状態
export const ErrorTextarea: Story = {
  args: {
    w: "300px",
    error: true,
    defaultValue: "エラーがある入力内容",
  },
};

// 無効状態
export const Disabled: Story = {
  args: {
    w: "300px",
    disabled: true,
    defaultValue: "編集不可のテキスト",
  },
};

// リサイズ無効
export const NoResize: Story = {
  args: {
    w: "300px",
    resize: "none",
    defaultValue: "リサイズ不可のテキストエリア",
  },
};

// カスタムスタイル
export const CustomStyled: Story = {
  args: {
    w: "300px",
    backgroundColor: "gray-50",
    borderColor: "blue-300",
    radius: "12px",
    fontSize: "16px",
    placeholder: "カスタムスタイル",
  },
};
