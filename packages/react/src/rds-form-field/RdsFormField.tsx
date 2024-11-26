import React from "react";
import { createComponent } from "@lit/react";
import { RdsFormField as LitRdsFormField } from "../../../web-components";
import "../styles/styles-reset.css";
import "./rds-form-field.css";

export interface RdsFormFieldProps {
  for?: string;
  label?: string;
  required?: boolean;
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  helper?: string;
  children?: React.ReactNode;
}

const RdsFormFieldLit = createComponent({
  tagName: "rds-form-field",
  elementClass: LitRdsFormField,
  react: React,
  events: {
    onInput: "input",
  },
});

export const RdsFormField = (props: RdsFormFieldProps) => {
  const { children, ...rest } = props;

  return <RdsFormFieldLit {...rest}>{children}</RdsFormFieldLit>;
};

export default RdsFormField;
