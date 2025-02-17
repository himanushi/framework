import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Example/Checkbox",
  component: (props) => {
    const { checked: defaultChecked, ...newProps } = props;
    const [checked, setChecked] = useState(defaultChecked);
    useEffect(() => {
      setChecked(!!defaultChecked);
    }, [defaultChecked]);

    return (
      <Checkbox
        {...newProps}
        checked={checked}
        onClick={() => {
          setChecked((c) => !c);
        }}
      />
    );
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean" },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Small: Story = {
  args: {
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};
