import { Meta, StoryFn } from "@storybook/web-components";
import { html } from "lit";
import "./rds-input";

const meta: Meta = {
  title: "Atoms/Input",
  component: "rds-input",
  argTypes: {
    placeholder: { control: "text" },
    value: { control: "text" },
    type: {
      control: "select",
      options: ["text", "password", "email", "number"],
    },
    id: { control: "text" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    error: { control: "boolean" },
    success: { control: "boolean" },
  },
};
export default meta;

const Template: StoryFn = (args) => html`
  <rds-input
    placeholder=${args.placeholder}
    value=${args.value}
    type=${args.type}
    id=${args.id}
    ?disabled=${args.disabled}
    ?required=${args.required}
    ?error=${args.error}
    ?success=${args.success}
  ></rds-input>
`;

const defaultArgs = {
  placeholder: "Placeholder",
  value: "",
  id: "rds-input",
  type: "text",
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
