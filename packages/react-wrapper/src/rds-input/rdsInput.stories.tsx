import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import RdsInput from "./rdsInput";

type Story = StoryObj<typeof RdsInput>;

const meta = {
  title: "Atoms/RdsInput",
  tags: ["autodocs"],
  component: RdsInput,
  argTypes: {
    placeholder: { control: "text" },
    value: { control: "text" },
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "tel"],
    },
    id: { control: "text" },
    icon: {
      control: "select",
      options: ["check", "x", "chevron-down"],
    },
    iconPosition: { control: "select", options: ["left", "right"] },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    error: { control: "boolean" },
    success: { control: "boolean" },
  },
} satisfies Meta<typeof RdsInput>;

export default meta;

const defaultArgs = {
  placeholder: "Placeholder",
  value: "",
  type: "text" as "text",
  id: "input",
  icon: "check" as "check",
  iconPosition: "left" as "left",
  disabled: false,
  required: false,
  error: false,
  success: false,
};

const Template = (args: any): React.JSX.Element => <RdsInput {...args} />;

export const Default: Story = {
  render: Template,
  args: defaultArgs,
};

export const Disabled: Story = {
  render: Template,
  args: {
    ...defaultArgs,
    disabled: true,
  },
};

export const Required: Story = {
  render: Template,
  args: {
    ...defaultArgs,
    required: true,
  },
};

export const Error: Story = {
  render: Template,
  args: {
    ...defaultArgs,
    error: true,
  },
};

export const Success: Story = {
  render: Template,
  args: {
    ...defaultArgs,
    success: true,
  },
};
