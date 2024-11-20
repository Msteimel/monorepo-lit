import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./rds-accordion";
import "./rds-accordion-item";
import "../rds-button/rds-button";

const meta: Meta = {
  title: "Molecules/Accordion",
  component: "rds-accordion",
  tags: ["autodocs"],
  render: () => html`
    <rds-accordion>
      <rds-accordion-item ?open=${true}>
        <span slot="header">Accordion Item 1</span>
        <div slot="content">This is the content for accordion item 1.</div>
      </rds-accordion-item>
      <rds-accordion-item>
        <span slot="header">Accordion Item 2</span>
        <div slot="content">
          This is the content for accordion item 2.
          <rds-button>Button</rds-button>
        </div>
      </rds-accordion-item>
    </rds-accordion>
  `,
  parameters: {
    docs: {
      description: {
        component:
          "The RDS Accordion component is used to show and hide content in an expandable/collapsible format.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {},
};

export const MultipleItems: Story = {
  render: () => html`
    <rds-accordion>
      <rds-accordion-item>
        <span slot="header">Section 1</span>
        <div slot="content">Content for section 1</div>
      </rds-accordion-item>
      <rds-accordion-item>
        <span slot="header">Section 2</span>
        <div slot="content">Content for section 2</div>
      </rds-accordion-item>
      <rds-accordion-item>
        <span slot="header">Section 3</span>
        <div slot="content">Content for section 3</div>
      </rds-accordion-item>
    </rds-accordion>
  `,
};
