import React from "react";
import { createComponent } from "@lit/react";
import { RdsInput as LitRdsInput } from "../../../web-components";
import "../styles/styles-reset.css";
import "./rds-input.css";

const RdsInput = createComponent({
  tagName: "rds-input",
  elementClass: LitRdsInput,
  react: React,
  events: {
    onInput: "input",
  },
});

export default RdsInput;
