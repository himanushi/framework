import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Box } from "./Box";

const meta: Meta<typeof Box> = {
  title: "Example/Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Primary: Story = {
  args: {
    children: "ああああああ",
    iEnd: true,
    px: "10px",
  },
};

export const Secondary: Story = {
  args: {
    children: "ああああああ",
    iEnd: true,
  },
};

export const Large: Story = {
  args: {
    children: "ああああああ",
    iEnd: true,
  },
};

export const Small: Story = {
  args: {
    children: "ああああああ",
    iEnd: true,
  },
};
