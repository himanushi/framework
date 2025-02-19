import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "email", "tel", "number", "search", "url"],
    },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
  },
  args: {
    onChange: fn(),
    placeholder: "プレースホルダーテキスト",
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

// デフォルトのテキストフィールド
export const Default: Story = {
  args: {
    w: "300px",
  },
};

// エラー状態
export const ErrorTextField: Story = {
  args: {
    w: "300px",
    error: true,
    value: "invalid@email",
    type: "email",
  },
};

// 無効状態
export const Disabled: Story = {
  args: {
    w: "300px",
    disabled: true,
    value: "編集不可のテキスト",
  },
};

// パスワード入力
export const Password: Story = {
  args: {
    w: "300px",
    type: "password",
    placeholder: "パスワードを入力",
  },
};

// 検索フィールド
export const Search: Story = {
  args: {
    w: "300px",
    type: "search",
    placeholder: "検索キーワードを入力",
  },
};

// カスタムスタイル
export const CustomStyled: Story = {
  args: {
    w: "300px",
    backgroundColor: "gray-50",
    borderColor: "blue-300",
    radius: "12px",
    h: "48px",
    fontSize: "16px",
    placeholder: "カスタムスタイル",
  },
};
