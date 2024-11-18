import { html } from "lit";
import "./rds-button";
const meta = {
    title: "Components/rds-button",
    component: "rds-button",
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["primary", "secondary"],
        },
        size: {
            control: { type: "select" },
            options: ["small", "medium", "large"],
        },
        fullWidth: {
            control: { type: "boolean" },
        },
        disabled: {
            control: { type: "boolean" },
        },
    },
};
export default meta;
export const Primary = {
    args: {
        variant: "primary",
        size: "medium",
        fullWidth: false,
        disabled: false,
    },
    render: (args) => html `
    <rds-button
      variant=${args.variant}
      size=${args.size}
      ?fullWidth=${args.fullWidth}
      ?disabled=${args.disabled}
      onclick="(console.log('clicked'))"
    >
      Click me
    </rds-button>
  `,
};
export const Secondary = {
    args: {
        variant: "secondary",
        disabled: false,
    },
    render: (args) => html `
    <rds-button
      variant=${args.variant}
      ?disabled=${args.disabled}
    >
      Click me
    </rds-button>
  `,
};
export const disabled = {
    args: {
        variant: "primary",
        disabled: true,
    },
    render: (args) => html `
    <rds-button
      variant=${args.variant}
      ?disabled=${args.disabled}
    >
      Click me
    </rds-button>
  `,
};
//# sourceMappingURL=rds-button.stories.js.map