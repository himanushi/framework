import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "../icon";
import { Cookie } from "../icon/Cookie";
import { Text } from "../text";
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
    children: "ボタン",
    primary: true,
  },
};

export const Secondary: Story = {
  args: {
    children: "ボタン",
    secondary: true,
  },
};

export const IconButton: Story = {
  args: {
    children: (
      <>
        <Icon size={17} color={"red-900"}>
          <Cookie />
        </Icon>
        <Text>ボタン</Text>
      </>
    ),
    gap: "10px",
    primary: true,
  },
};

export const Large: Story = {
  args: {
    children: "ボタン",
    disabled: true,
    onClick: () => console.log("click"),
  },
};

export const Small: Story = {
  args: {
    children: "ボタン",
  },
};
