import React from "react";
import { createComponent } from "@lit/react";
import { RdsButton as LitRdsButton } from "../../../web-components";
import "../styles/styles-reset.css";
import "./rds-button.css";

const RdsButton = createComponent({
  tagName: "rds-button",
  elementClass: LitRdsButton,
  react: React,
  events: {
    onClick: "rds-click",
  },
});

export default RdsButton;
