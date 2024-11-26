import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import RdsLabel from "./rdsLabel";

type Story = StoryObj<typeof RdsLabel>;

const meta = {
  title: "Atoms/RdsLabel",
  tags: ["autodocs"],
  component: RdsLabel,
  argTypes: {
    for: { control: "text" },
    required: { control: "boolean" },
    slot: { control: "text" },
    error: { control: "boolean" },
    disabled: { control: "boolean" },
    success: { control: "boolean" },
  },
} as Meta<typeof RdsLabel>;

export default meta;

const defaultArgs = {
  for: "input-id",
  required: false,
  slot: "Label Text",
  error: false,
  success: false,
  disabled: false,
};

const Template = (args: any): React.JSX.Element => (
  <RdsLabel {...args}> {args.slot} </RdsLabel>
);

export const Default: Story = {
  render: Template,
  args: defaultArgs,
};

export const Required: Story = {
  render: Template,
  args: { ...defaultArgs, required: true },
};

export const Disabled: Story = {
  render: Template,
  args: { ...defaultArgs, disabled: true },
};

export const Error: Story = {
  render: Template,
  args: { ...defaultArgs, error: true },
};

export const Success: Story = {
  render: Template,
  args: { ...defaultArgs, success: true },
};
