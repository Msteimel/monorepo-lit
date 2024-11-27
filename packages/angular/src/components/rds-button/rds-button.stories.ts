// src/components/rds-button/rds-button.stories.ts
import type { Meta, StoryFn } from "@storybook/angular";
import { RdsButtonComponent } from "./rds-button.component";

const meta: Meta<RdsButtonComponent> = {
  title: "Components/Button",
  component: RdsButtonComponent,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
};

export default meta;

const Template: StoryFn = (args) => ({
  component: RdsButtonComponent,
  props: args,
  template: `
    <rds-button
      [variant]="variant"
      [size]="size"
      [disabled]="disabled"
      [fullWidth]="fullWidth"
    >{{ text }}</rds-button>
  `,
});

const defaultArgs = {
  text: "Click me",
  variant: "primary",
  size: "medium",
  fullWidth: false,
  disabled: false,
};

export const Primary = Template.bind({});
Primary.args = {
  ...defaultArgs,
};

// export const Secondary: Story = {
//   args: {
//     variant: "secondary",
//     size: "medium",
//     disabled: false,
//   },
// };

// export const Disabled: Story = {
//   args: {
//     variant: "primary",
//     size: "medium",
//     disabled: true,
//   },
// };
