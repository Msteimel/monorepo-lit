import { Meta, StoryFn } from "@storybook/web-components";
import { html } from "lit";
import "./rds-form-field";
import "../rds-input/rds-input";

const meta: Meta = {
  title: "Molecules/Form Field",
  component: "rds-form-field",
  argTypes: {
    placeholder: { control: "text" },
    value: { control: "text" },
    type: {
      control: "select",
      options: ["text", "password", "email", "number"],
    },
    icon: { control: "text" },
    iconPosition: { control: "select", options: ["left", "right"] },
    for: { control: "text" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    error: { control: "boolean" },
    success: { control: "boolean" },
    label: { control: "text" },
    helper: { control: "text" },
  },
};
export default meta;

const Template: StoryFn = (args) => html`
  <rds-form-field
    for=${args.for}
    label=${args.label}
    helper=${args.helper}
    ?disabled=${args.disabled}
    ?required=${args.required}
    ?error=${args.error}
    ?success=${args.success}
  >
    <rds-input
      slot="input-field"
      placeholder=${args.placeholder}
      value=${args.value}
      id=${args.id}
      type=${args.type}
      icon=${args.icon}
      iconPosition=${args.iconPosition}
      ?disabled=${args.disabled}
      ?required=${args.required}
      ?error=${args.error}
      ?success=${args.success}
    >
    </rds-input>
  </rds-form-field>
`;

const defaultArgs = {
  placeholder: "Placeholder",
  value: "",
  for: "rds-input",
  type: "text",
  label: "Label",
  helper: "Helper text",
  disabled: false,
  required: false,
  error: false,
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const Disabled = Template.bind({});
Disabled.args = { ...defaultArgs, disabled: true };

export const Required = Template.bind({});
Required.args = { ...defaultArgs, required: true };

export const Error = Template.bind({});
Error.args = { ...defaultArgs, error: true };

export const Success = Template.bind({});
Success.args = { ...defaultArgs, success: true };

export const WithIcon = Template.bind({});
WithIcon.args = { ...defaultArgs, icon: "check" };
