import { html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import stylesReset from "../../styles/stylesReset.css";
import styles from "./rds-label.css";
import { ifDefined } from "lit/directives/if-defined.js";

export interface RdsLabelProps {
  for?: string;
  required: boolean;
  disabled: boolean;
  success: boolean;
  error: boolean;
}

@customElement("rds-label")
export class RdsLabel extends LitElement {
  @property({ type: String }) for?: RdsLabelProps["for"] = "";
  @property({ type: Boolean }) required: RdsLabelProps["required"] = false;
  @property({ type: Boolean }) disabled: RdsLabelProps["disabled"] = false;
  @property({ type: Boolean }) success: RdsLabelProps["success"] = false;
  @property({ type: Boolean }) error: RdsLabelProps["error"] = false;

  static styles = [stylesReset, unsafeCSS(styles)];

  private get classes() {
    return {
      "rds-label": true,
      "rds-label--disabled": this.disabled,
      "rds-label--error": this.error,
      "rds-label--success": this.success,
      "rds-label--required": this.required,
    };
  }

  render(): ReturnType<typeof html> {
    return html`
      <label
        class=${classMap(this.classes)}
        for="${ifDefined(this.for)}"
      >
        <slot></slot>
        ${this.required ? html`<span class="rds-label__required">*</span>` : ""}
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "rds-label": RdsLabel;
  }
}
