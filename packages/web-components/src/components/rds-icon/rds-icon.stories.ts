import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./rds-icon";

const meta: Meta = {
  title: "Atoms/Icon",
  component: "rds-icon",
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "text",
      description: "The icon name to display",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "The size of the icon",
    },
  },
};

export default meta;
type Story = StoryObj;

// Base icon story
export const Default: Story = {
  args: {
    icon: "check",
    size: "medium",
  },
  render: (args) => html`
    <rds-icon
      icon=${args.icon}
      size=${args.size}
    ></rds-icon>
  `,
};

// Different sizes
export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <rds-icon
        icon="check"
        size="small"
      ></rds-icon>
      <rds-icon
        icon="check"
        size="medium"
      ></rds-icon>
      <rds-icon
        icon="check"
        size="large"
      ></rds-icon>
    </div>
  `,
};

// Multiple icons
export const IconSet: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <rds-icon
        icon="x"
        size="medium"
      ></rds-icon>
      <rds-icon
        icon="check"
        size="medium"
      ></rds-icon>
    </div>
  `,
};
