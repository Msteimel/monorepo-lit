import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import RdsFormField from "./RdsFormField";
import RdsInput from "../rds-input/rdsInput";

type Story = StoryObj<typeof RdsFormField>;

const meta = {
  title: "Molecules/RdsFormField",
  tags: ["autodocs"],
  component: RdsFormField,
  argTypes: {
    label: {
      control: { type: "text" },
    },
    required: {
      control: { type: "boolean" },
    },
    error: {
      control: { type: "boolean" },
    },
    success: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    helper: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof RdsFormField>;

export default meta;

const defaultArgs = {
  placeholder: "Placeholder",
  value: "",
  for: "rds-input",
  type: "text" as "text" | "number" | "password" | "email" | "tel",
  label: "Label",
  helper: "Helper text",
  disabled: false,
  required: false,
  error: false,
  success: false,
  icon: undefined as "check" | "x" | "chevron-down" | undefined,
  iconPosition: "left" as "left" | "right",
};

const Template = (args: any): React.JSX.Element => (
  <RdsFormField {...args}>
    <RdsInput
      slot="input-field"
      placeholder={args.placeholder}
      value={args.value}
      id={args.id}
      type={args.type}
      icon={args.icon}
      iconPosition={args.iconPosition}
      disabled={args.disabled}
      required={args.required}
      error={args.error}
      success={args.success}
    />
  </RdsFormField>
);

export const Default: Story = {
  render: Template,
  args: { ...defaultArgs },
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

export const WithIcon: Story = {
  render: Template,
  args: {
    ...defaultArgs,
    //@ts-ignore
    icon: "check",
  },
};
