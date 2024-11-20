import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import stylesReset from "../../styles/stylesReset.styles";
import styles from "./rds-accordion.styles";

@customElement("rds-accordion-item")
export class RdsAccordionItem extends LitElement {
  static styles = [stylesReset, styles];

  @property({ type: Boolean, reflect: true })
  open = false;

  private get classes() {
    return {
      "rds-accordion-item": true,
      "rds-accordion-item__open": this.open,
    };
  }

  private _handleClick() {
    this.open = !this.open;
    // Dispatch event if other components need to know about state change
    this.dispatchEvent(
      new CustomEvent("accordion-toggle", {
        detail: { open: this.open },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render(): ReturnType<typeof html> {
    return html`
      <div
        class=${classMap(this.classes)}
        role="region"
        aria-expanded=${this.open}
      >
        <div
          class="rds-accordion-item_header"
          role="button"
          tabindex="0"
          @click=${this._handleClick}
          @keydown=${(e: KeyboardEvent) => {
            if (e.key === "Enter" || e.key === " ") {
              this._handleClick();
            }
          }}
        >
          <slot name="header"></slot>
          <rds-icon
            icon="chevron-down"
            part="icon"
          ></rds-icon>
        </div>
        <div
          class="rds-accordion-item_content"
          aria-hidden=${!this.open}
        >
          <slot name="content"></slot>
        </div>
      </div>
    `;
  }
}
