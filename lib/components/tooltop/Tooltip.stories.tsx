import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  args: {
    content: "This is a tooltip",
    children: <Button>Hover me</Button>,
  },
};

export const CustomPlacement: Story = {
  args: {
    content: "Tooltip on the right",
    children: <Button>Hover me</Button>,
    placement: "right",
  },
};

export const NoArrow: Story = {
  args: {
    content: "Tooltip without arrow",
    children: <Button>Hover me</Button>,
    showArrow: false,
  },
};

export const CustomOffset: Story = {
  args: {
    content: "Tooltip with custom offset",
    children: <Button>Hover me</Button>,
    offset: 16,
  },
};

export const CustomDelay: Story = {
  args: {
    content: "Tooltip with custom delay",
    children: <Button>Hover me</Button>,
    delay: 500,
  },
};
