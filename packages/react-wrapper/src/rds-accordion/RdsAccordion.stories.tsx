import { Meta, StoryFn } from "@storybook/react";
import RdsAccordion from "./RdsAccordion";
import RdsAccordionItem from "./RdsAccordionItem";

type Story = StoryFn<typeof RdsAccordion>;

export default {
  title: "Molecules/RdsAccordion",
  component: RdsAccordion,
} as Meta;

const Template: Story = (args) => (
  <RdsAccordion {...args}>
    <RdsAccordionItem
      open={true}
      onClick={() => console.log("Item 1 clicked")}
    >
      <h3 slot="header"> Item 1 Content</h3>
      <p slot="content"> body content</p>
    </RdsAccordionItem>
    <RdsAccordionItem onClick={() => console.log("Item 2 clicked")}>
      <h3 slot="header">Item 2 Content</h3>
      <p slot="content"> body content</p>
    </RdsAccordionItem>
    <RdsAccordionItem onClick={() => console.log("Item 3 clicked")}>
      <h3 slot="header">Item 3 Content</h3>
      <p slot="content"> body content</p>
    </RdsAccordionItem>
  </RdsAccordion>
);

export const Default = Template.bind({});
Default.args = {};
