import { html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

// @ts-ignore
import stylesReset from "../../styles/stylesReset.styles";
// @ts-ignore
import styles from "./rds-label.styles";

@customElement("rds-label")
export class RDSLabel extends LitElement {
  static styles = [stylesReset, unsafeCSS(styles)];

  @property({ type: String })
  for = "";

  @property({ type: Boolean })
  required = false;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  success = false;

  @property({ type: Boolean })
  error = false;

  private get classes() {
    return {
      "rds-label": true,
      "rds-label--disabled": this.disabled,
      "rds-label--error": this.error,
      "rds-label--success": this.success,
      "rds-label--required": this.required,
    };
  }

  render() {
    return html`
      <label
        class=${classMap(this.classes)}
        for="${this.for}"
      >
        <slot></slot>
        ${this.required ? html`<span class="rds-label__required">*</span>` : ""}
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "rds-label": RDSLabel;
  }
}
