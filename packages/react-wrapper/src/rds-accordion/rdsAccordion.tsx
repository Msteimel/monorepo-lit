import React from "react";
import { createComponent } from "@lit/react";
import { RdsAccordion as LitRdsAccordion } from "../../../web-components";

export interface RdsAccordionProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "onClick"> {
  open?: boolean;
  onClick?: (_e: Event) => void;
  children?: React.ReactNode;
}

export const RdsAccordionLit = createComponent({
  tagName: "rds-accordion",
  elementClass: LitRdsAccordion,
  react: React,
  events: {
    onClick: "accordion-toggle",
  },
});

const RdsAccordion = (props: RdsAccordionProps) => {
  const { children, ...rest } = props;
  return <RdsAccordionLit {...rest}>{children}</RdsAccordionLit>;
};

export default RdsAccordion;
