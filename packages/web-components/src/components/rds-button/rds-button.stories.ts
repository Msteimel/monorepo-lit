import { ifDefined } from "lit/directives/if-defined.js";
import { Meta, StoryFn } from "@storybook/web-components";
import { html } from "lit";
import { action } from "@storybook/addon-actions";
import "./rds-button";

const meta: Meta = {
  title: "Molecules/rds-button",
  component: "rds-button",
  argTypes: {
    text: {
      control: { type: "text" },
    },
    href: {
      control: { type: "text" },
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    icon: {
      control: { type: "text" },
      description: "Name of the icon to display",
    },
    iconPosition: {
      control: { type: "select" },
      options: ["left", "right"],
    },
    fullWidth: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    onClick: {
      action: "clicked",
    },
  },
};
export default meta;

const Template: StoryFn = (args) => html`
  <rds-button
    variant=${args.variant}
    size=${args.size}
    ?fullWidth=${args.fullWidth}
    ?disabled=${args.disabled}
    href=${ifDefined(args.href)}
    icon=${ifDefined(args.icon)}
    iconPosition=${ifDefined(args.iconPosition)}
    @click=${args.onClick || action("clicked")}
  >
    ${args.text}
  </rds-button>
`;

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

export const Secondary = Template.bind({});
Secondary.args = {
  ...defaultArgs,
  variant: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  ...defaultArgs,
  variant: "tertiary",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...defaultArgs,
  icon: "check",
  iconPosition: "left",
};

export const WithIconRight = Template.bind({});
WithIconRight.args = {
  ...defaultArgs,
  icon: "check",
  iconPosition: "right",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...defaultArgs,
  disabled: true,
};

export const AsLink = Template.bind({});
AsLink.args = {
  ...defaultArgs,
  href: "https://www.ryder.com",
};

export const CustomClickEvent = Template.bind({});
CustomClickEvent.args = {
  ...defaultArgs,
  onClick: (e: Event) => {
    alert("custom click event handler");
    console.log("Button clicked", e);
    action("Button Clicked")(e);
  },
};
CustomClickEvent.parameters = {
  docs: {
    description: {
      story: "Example of a custom click event handler",
    },
  },
};
