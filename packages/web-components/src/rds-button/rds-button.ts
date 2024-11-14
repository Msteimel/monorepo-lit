import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

type Variant = "primary" | "secondary" | "tertiary";

@customElement("rds-button")
export class RdsButton extends LitElement {
  @property({ type: String }) variant: Variant = "primary";
  @property({ type: Boolean }) disabled = false;

  static styles = css`
    :host {
      display: inline-block;
    }

    button {
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-family: inherit;
      font-size: 1rem;
    }

    button[variant="primary"] {
      background-color: #007bff;
      color: white;
    }

    button[variant="secondary"] {
      background-color: #6c757d;
      color: white;
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

  render() {
    return html`
      <button
        variant=${this.variant}
        ?disabled=${this.disabled}
        @click=${this._handleClick}>
        <slot></slot>
      </button>
    `;
  }

  private _handleClick(e: Event) {
    this.dispatchEvent(
      new CustomEvent("click", { bubbles: true, composed: true }),
    );
  }
}
