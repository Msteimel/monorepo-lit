import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import stylesReset from "../../styles/stylesReset.css";
import styles from "./rds-input.css";
import "../rds-icon/rds-icon";

export interface RdsInputProps {
  placeholder?: string;
  value?: string;
  type?: "text" | "password" | "email" | "tel" | "number";
  disabled: boolean;
  required: boolean;
  error: boolean;
  success: boolean;
  id: string;
  icon?: "x" | "check" | "chevron-down";
  iconPosition?: "left" | "right";
}

@customElement("rds-input")
export class RdsInput extends LitElement {
  @property({ type: String }) placeholder?: RdsInputProps["placeholder"];
  @property({ type: String }) value?: RdsInputProps["value"];
  @property({ type: String }) type?: RdsInputProps["type"] = "text";
  @property({ type: Boolean }) disabled: RdsInputProps["disabled"] = false;
  @property({ type: Boolean }) required: RdsInputProps["required"] = false;
  @property({ type: Boolean }) error: RdsInputProps["error"] = false;
  @property({ type: Boolean }) success: RdsInputProps["success"] = false;
  @property({ type: String }) override id: RdsInputProps["id"] = "";
  @property({ type: String }) icon?: RdsInputProps["icon"] = "check";
  @property({ type: String }) iconPosition?: RdsInputProps["iconPosition"] =
    "left";

  static override styles = [stylesReset, styles];

  private handleInput(e: Event): void {
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

  private get classes(): Record<string, boolean> {
    return {
      "rds-input": true,
      "rds-input--error": this.error,
      "rds-input--success": this.success,
      "rds-input--disabled": this.disabled,
      "rds-input--required": this.required,
    };
  }

  override render(): ReturnType<typeof html> {
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
          type=${ifDefined(this.type)}
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
    "rds-input": RdsInput;
  }
}
