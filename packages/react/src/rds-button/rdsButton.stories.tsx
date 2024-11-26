import type { Meta, StoryObj } from "@storybook/react";
import RdsButton from "./rdsButton";

type Story = StoryObj<typeof RdsButton>;

const meta = {
  title: "Atoms/RdsButton",
  tags: ["autodocs"],
  component: RdsButton,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
  },
} satisfies Meta<typeof RdsButton>;

export default meta;

const Template = (args: any) => (
  <RdsButton {...args}>{args.children}</RdsButton>
);

export const PrimaryButton: Story = {
  render: Template,
  args: {
    children: "Button Text",
    variant: "primary",
  },
};
