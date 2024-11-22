import React from "react";
import { createComponent } from "@lit/react";
import { RdsButton as LitRdsButton } from "../../../web-components";

// The interface is still useful to provide type safety and documentation
// But we can make it more concise
export interface RdsButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  fullWidth?: boolean;
  size?: "small" | "medium" | "large";
  href?: string;
  icon?: "";
  iconPosition?: "left" | "right";
  onClick?: (_event: CustomEvent) => void;
}

const RdsButton = createComponent({
  tagName: "rds-button",
  elementClass: LitRdsButton,
  react: React,
  events: {
    onClick: "rds-click",
  },
});

export default RdsButton;
