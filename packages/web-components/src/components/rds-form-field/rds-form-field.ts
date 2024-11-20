import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
// @ts-ignore
import stylesReset from "../../styles/stylesReset.styles";
// @ts-ignore
import styles from "./rds-form-field.styles";

import "../rds-label/rds-label";

@customElement("rds-form-field")
export class RdsFormField extends LitElement {
  static styles = [stylesReset, styles];

  @property({ type: String })
  for = "";

  @property({ type: String })
  label = "";

  @property({ type: Boolean })
  required = false;

  @property({ type: Boolean })
  error = false;

  @property({ type: Boolean })
  success = false;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: String })
  helper = "";

  private get classes() {
    return {
      "rds-form-field": true,
      "rds-form-field--error": this.error,
      "rds-form-field--success": this.success,
      "rds-form-field--disabled": this.disabled,
    };
  }

  render(): ReturnType<typeof html> {
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
