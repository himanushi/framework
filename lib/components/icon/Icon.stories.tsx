import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Cookie } from "./Cookie";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
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
type Story = StoryObj<typeof Icon>;

export const Normal: Story = {
  args: {
    children: <Cookie />,
    size: { xs: 24, sm: 32 },
    color: "red",
  },
};

export const Large: Story = {
  args: {
    children: <Cookie />,
    size: "50px",
  },
};

export const Color: Story = {
  args: {
    children: <Cookie />,
    size: "50px",
    color: "red-90",
  },
};
