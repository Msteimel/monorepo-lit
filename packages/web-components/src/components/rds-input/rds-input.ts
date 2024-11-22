import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
// @ts-ignore
import stylesReset from "../../styles/stylesReset.css";
// @ts-ignore
import styles from "./rds-input.css";

import "../rds-icon/rds-icon";

@customElement("rds-input")
export class RDSInput extends LitElement {
  static styles = [stylesReset, styles];

  @property({ type: String })
  placeholder? = "";

  @property({ type: String })
  value? = "";

  @property({ type: String })
  type: "text" | "password" | "email" | "tel" | "number" = "text";

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  required = false;

  @property({ type: Boolean })
  error = false;

  @property({ type: Boolean })
  success = false;

  @property({ type: String })
  id = "";

  @property({ type: String })
  icon? = "";

  @property({ type: String })
  iconPosition: "left" | "right" = "left";

  private handleInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.value = input.value;
    this.dispatchEvent(
      new CustomEvent("input", {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private get classes() {
    return {
      "rds-input": true,
      "rds-input--error": this.error,
      "rds-input--success": this.success,
      "rds-input--disabled": this.disabled,
      "rds-input--required": this.required,
    };
  }

  render() {
    return html`
      <div
        class=${classMap(this.classes)}
        iconPosition=${ifDefined(this.iconPosition)}
      >
        ${ifDefined(
          this.icon
            ? html`<rds-icon
                icon=${this.icon}
                size="small"
              ></rds-icon>`
            : null,
        )}
        <input
          type="${this.type}"
          .value="${this.value ?? ""}"
          id="${this.id}"
          placeholder="${ifDefined(this.placeholder)}"
          ?disabled="${this.disabled}"
          ?required="${this.required}"
          @input="${this.handleInput}"
          ?success="${this.success}"
          ?error="${this.error}"
        />
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "rds-input": RDSInput;
  }
}
