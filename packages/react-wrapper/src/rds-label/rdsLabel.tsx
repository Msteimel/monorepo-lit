import React from "react";
import { createComponent } from "@lit/react";
import { RdsLabel as LitRdsLabel } from "../../../web-components";
import "../styles/styles-reset.css";
import "./rds-label.css";

const RdsLabel = createComponent({
  tagName: "rds-label",
  elementClass: LitRdsLabel,
  react: React,
  events: {},
});

export default RdsLabel;
