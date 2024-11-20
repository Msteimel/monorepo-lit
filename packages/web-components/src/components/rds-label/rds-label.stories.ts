import { Meta, StoryFn } from "@storybook/web-components";
import { html } from "lit";
import "./rds-label";

const meta: Meta = {
  title: "Atoms/Label",
  component: "rds-label",
  argTypes: {
    for: { control: "text" },
    required: { control: "boolean" },
    slot: { control: "text" },
    error: { control: "boolean" },
    disabled: { control: "boolean" },
    success: { control: "boolean" },
  },
};
export default meta;

const Template: StoryFn = (args) => html`
  <rds-label
    for=${args.for}
    ?required=${args.required}
    ?disabled=${args.disabled}
    ?error=${args.error}
    ?success=${args.success}
  >
    ${args.slot || "Label Text"}
  </rds-label>
`;

const defaultArgs = {
  for: "input-id",
  required: false,
  slot: "Label Text",
  error: false,
  success: false,
  disabled: false,
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const Required = Template.bind({});
Required.args = { ...defaultArgs, required: true };

export const Disabled = Template.bind({});
Disabled.args = { ...defaultArgs, disabled: true };

export const Error = Template.bind({});
Error.args = { ...defaultArgs, error: true };

export const Success = Template.bind({});
Success.args = { ...defaultArgs, success: true };
