import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Example/Switch",
  component: (props) => {
    const { checked: defaultChecked, ...newProps } = props;
    const [checked, setChecked] = useState(defaultChecked);
    useEffect(() => {
      setChecked(!!defaultChecked);
    }, [defaultChecked]);

    return (
      <Switch
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
type Story = StoryObj<typeof Switch>;

export const Small: Story = {
  args: {
    switchSize: "m",
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
