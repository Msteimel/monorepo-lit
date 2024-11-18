import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap, ClassInfo } from "lit/directives/class-map.js";
// @ts-ignore
import buttonStyles from "./rds-button.css?raw";

interface RdsButtonProps {
  className?: string;
  variant: "primary" | "secondary" | "tertiary";
  disabled: boolean;
  size: "small" | "medium" | "large";
  onClick?: (_e: Event) => void;
}

@customElement("rds-button")
export class RdsButton extends LitElement implements RdsButtonProps {
  // Host element properties
  @property({ type: Boolean, reflect: true, attribute: "fullwidth" })
  fullWidth = false;

  // Internal button properties
  @property() className = "";
  @property() variant: RdsButtonProps["variant"] = "primary";
  @property({ type: Boolean }) disabled = false;
  @property() size: RdsButtonProps["size"] = "medium";
  @property() onClick: RdsButtonProps["onClick"];

  static styles = unsafeCSS(buttonStyles);

  private _handleClick(e: Event): void {
    if (typeof this.onClick === "function") {
      this.onClick(e);
    }
  }

  render(): ReturnType<typeof html> {
    const componentClasses: ClassInfo = {
      "rds-btn": true,
      [`rds-btn-${this.variant}`]: true,
      "rds-btn-disabled": this.disabled,
      "rds-btn-full-width": this.fullWidth,
      [this.className]: !!this.className,
    };

    return html`
      <button
        class=${classMap(componentClasses)}
        variant=${this.variant}
        size=${this.size}
        ?disabled=${this.disabled}
        @click=${this._handleClick}
      >
        <slot></slot>
      </button>
    `;
  }
}
