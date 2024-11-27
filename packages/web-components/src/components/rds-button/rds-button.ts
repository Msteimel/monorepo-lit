import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import stylesReset from "../../styles/stylesReset.css";
import buttonStyles from "./rds-button.css";

export interface RdsButtonProps {
  variant: "primary" | "secondary" | "tertiary";
  disabled: boolean;
  fullWidth: boolean;
  size: "small" | "medium" | "large";
  href?: string;
  icon?: "x" | "check" | "chevron-down" | undefined;
  iconPosition?: "left" | "right";
  onClick?: (_e: Event) => void;
}

@customElement("rds-button")
export class RdsButton extends LitElement {
  @property({ type: String }) variant: RdsButtonProps["variant"] = "primary";
  @property({ type: Boolean }) disabled: RdsButtonProps["disabled"] = false;
  @property({ type: Boolean }) fullWidth: RdsButtonProps["fullWidth"] = false;
  @property({ type: String }) size: RdsButtonProps["size"] = "medium";
  @property({ type: String }) href?: RdsButtonProps["href"];
  @property({ type: String }) icon?: RdsButtonProps["icon"];
  @property({ type: String }) iconPosition?: RdsButtonProps["iconPosition"];
  @property({ attribute: false }) onClick?: RdsButtonProps["onClick"];

  /**
   * The styles for the button
   * stylesReset is a global CSS reset
   * buttonStyles is the component's styles
   */
  static override styles = [stylesReset, buttonStyles];

  /**
   * Handles the click event for the button
   * @param {Event} e - The click event
   * @returns {void}
   * @private
   */
  private _handleClick(e: Event): void {
    // Dispatch a custom event that React can listen to
    const event = new CustomEvent("rds-click", {
      detail: e,
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);

    // If local onClick is defined, still call it
    if (typeof this.onClick === "function") {
      this.onClick(e);
    }
  }

  /**
   * Prevents the click event from firing when the button is disabled
   * @param {Event} e - The click event
   * @returns {void}
   * @private
   */
  private _disabledClickHandler = (e: Event): void => e.preventDefault();

  /**
   * Renders the button
   */
  override render(): ReturnType<typeof html> {
    /**
     * The content of the button
     * The icon is displayed if it exists
     * Sets the icon position if it exists
     */
    const content = html`
      <span
        class="rds-button__content"
        iconPosition=${ifDefined(this.iconPosition)}
        part="content"
      >
        ${ifDefined(
          this.icon
            ? html`
                <rds-icon
                  icon=${this.icon}
                  size=${this.size}
                  part="icon"
                ></rds-icon>
              `
            : null,
        )}
        <slot></slot>
      </span>
    `;

    /**
     * The button element render
     * If the href exists, the button is an anchor element
     * If the button is disabled, the click event is prevented
     */
    if (this.href) {
      return html`
        <a
          class=${this.disabled ? "rds-button--disabled" : ""}
          href=${this.href}
          variant=${this.variant}
          size=${this.size}
          ?disabled=${this.disabled}
          @click=${this.disabled
            ? this._disabledClickHandler
            : this._handleClick}
          part="button"
        >
          ${content}
        </a>
      `;
    } else {
      return html`
        <button
          variant=${this.variant}
          size=${this.size}
          ?disabled=${this.disabled}
          @click=${this._handleClick}
          part="button"
        >
          ${content}
        </button>
      `;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "rds-button": RdsButton;
  }
}
