import { html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

// @ts-ignore
import stylesReset from "../../styles/stylesReset.css?raw";
// @ts-ignore
import componentStyles from "./rds-input.css?raw";

@customElement("rds-input")
export class RDSInput extends LitElement {
  static styles = [unsafeCSS(stylesReset), unsafeCSS(componentStyles)];

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
      <div class=${classMap(this.classes)}>
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
