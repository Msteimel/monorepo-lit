import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./rds-button";

const meta: Meta = {
  title: "Components/rds-button",
  component: "rds-button",
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Primary: Story = {
  args: {
    variant: "primary",
    disabled: false,
  },
  render: (args) => html`
    <rds-button variant=${args.variant} ?disabled=${args.disabled}>
      Click me
    </rds-button>
  `,
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    disabled: false,
  },
  render: (args) => html`
    <rds-button variant=${args.variant} ?disabled=${args.disabled}>
      Click me
    </rds-button>
  `,
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    disabled: true,
  },
  render: (args) => html`
    <rds-button variant=${args.variant} ?disabled=${args.disabled}>
      Click me
    </rds-button>
  `,
};
