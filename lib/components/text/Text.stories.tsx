import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Ui } from "~/core";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Example/Text",
  component: Text,
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
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    children: "ああああああ",
  },
};

export const Secondary: Story = {
  args: {
    children: "bold",
    bold: true,
  },
};

export const Large: Story = {
  args: {
    children: "ああああああ",
  },
};

export const Small: Story = {
  args: {
    children: (
      <Ui>
        {[0, 1, 2, 3].map((_, i) => (
          <Ui
            key={i}
            // width={1}
            // height={1}
            // backgroundColor={i % 2 === 0 ? "red" : "blue"}
            // __hover={{ backgroundColor: "black" }}
          >
            a
          </Ui>
        ))}
      </Ui>
    ),
  },
};
