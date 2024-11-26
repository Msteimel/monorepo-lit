import React from "react";
import { createComponent } from "@lit/react";
import { RdsIcon as LitRdsIcon } from "../../../web-components";
import "../styles/styles-reset.css";
import "./rds-icon.css";

const RdsIcon = createComponent({
  tagName: "rds-icon",
  elementClass: LitRdsIcon,
  react: React,
  events: {},
});

export default RdsIcon;
