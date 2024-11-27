import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import stylesReset from "../../styles/stylesReset.css";
import styles from "./rds-form-field.css";
import "../rds-label/rds-label";

interface RdsFormFieldProps {
  for: string;
  label: string;
  required: boolean;
  error: boolean;
  success: boolean;
  disabled: boolean;
  helper: string;
}
@customElement("rds-form-field")
export class RdsFormField extends LitElement {
  @property({ type: String }) for: RdsFormFieldProps["for"] = "";
  @property({ type: String }) label: RdsFormFieldProps["label"] = "";
  @property({ type: Boolean }) required: RdsFormFieldProps["required"] = false;
  @property({ type: Boolean }) error: RdsFormFieldProps["error"] = false;
  @property({ type: Boolean }) success: RdsFormFieldProps["success"] = false;
  @property({ type: Boolean }) disabled: RdsFormFieldProps["disabled"] = false;
  @property({ type: String }) helper: RdsFormFieldProps["helper"] = "";

  static override styles = [stylesReset, styles];

  private get classes(): Record<string, boolean> {
    return {
      "rds-form-field": true,
      "rds-form-field--error": this.error,
      "rds-form-field--success": this.success,
      "rds-form-field--disabled": this.disabled,
    };
  }

  override render(): ReturnType<typeof html> {
    return html`
      <div class=${classMap(this.classes)}>
        ${this.label
          ? html`
              <rds-label
                for=${ifDefined(this.for)}
                ?disabled=${this.disabled}
                ?error=${this.error}
                ?success=${this.success}
              >
                ${this.label}
                ${this.required ? html`<span class="required">*</span>` : null}
              </rds-label>
            `
          : null}
        <slot name="input-field"></slot>
        <span class="rds-form-field__helper"> ${this.helper}</span>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "rds-form-field": RdsFormField;
  }
}
