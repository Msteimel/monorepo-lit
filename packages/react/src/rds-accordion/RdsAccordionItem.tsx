import React from "react";
import { createComponent } from "@lit/react";
import { RdsAccordionItem as LitRdsAccordionItem } from "../../../web-components";

export interface RdsAccordionItemProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "onClick"> {
  open?: boolean;
  onClick?: (_event: CustomEvent) => void;
}

export const RdsAccordionItem = createComponent({
  tagName: "rds-accordion-item",
  elementClass: LitRdsAccordionItem,
  react: React,
  events: {
    onClick: "accordion-toggle",
  },
});

export default RdsAccordionItem;
