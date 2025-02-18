import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "ああああああ",
    primary: true,
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    children: "bold",
    secondary: true,
  },
};

export const Large: Story = {
  args: {
    children: "ああああああ",
    disabled: true,
    onClick: () => console.log("click"),
  },
};

export const Small: Story = {
  args: {
    children: "ああああああ",
  },
};
