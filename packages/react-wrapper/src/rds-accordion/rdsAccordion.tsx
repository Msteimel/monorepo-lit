import React from "react";
import { createComponent } from "@lit/react";
import { RdsAccordion as LitRdsAccordion } from "../../../web-components";

export interface RdsAccordionProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "onClick"> {
  open?: boolean;
  onClick?: (_event: CustomEvent) => void;
  children?: React.ReactNode;
}

export const RdsAccordion = createComponent({
  tagName: "rds-accordion",
  elementClass: LitRdsAccordion,
  react: React,
  events: {
    onClick: "accordion-toggle",
  },
});

export default RdsAccordion;
