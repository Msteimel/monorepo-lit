import type { Meta, StoryObj } from "@storybook/react";
import RdsIcon from "./rdsIcon";

type Story = StoryObj<typeof RdsIcon>;

const meta = {
  title: "Atoms/RdsIcon",
  tags: ["autodocs"],
  component: RdsIcon,
  argTypes: {
    icon: {
      control: { type: "select" },
      options: ["x", "check", "chevron-down"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
} satisfies Meta<typeof RdsIcon>;

export default meta;

const Template = (args: any) => <RdsIcon {...args} />;

export const XIcon: Story = {
  render: Template,
  args: {
    icon: "x",
    size: "medium",
  },
};

export const CheckIcon: Story = {
  render: Template,
  args: {
    icon: "check",
    size: "medium",
  },
};

export const ChevronDownIcon: Story = {
  render: Template,
  args: {
    icon: "chevron-down",
    size: "medium",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <RdsIcon
        icon="check"
        size="small"
      />
      <RdsIcon
        icon="check"
        size="medium"
      />
      <RdsIcon
        icon="check"
        size="large"
      />
    </div>
  ),
};
