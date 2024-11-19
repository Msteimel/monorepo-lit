import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
// @ts-ignore
import stylesReset from "../../styles/stylesReset.css?raw";
// @ts-ignore
import buttonStyles from "./rds-button.css?raw";

@customElement("rds-button")
export class RdsButton extends LitElement {
  static properties = {
    /**
     * The variant of the button
     * @type {"primary" | "secondary" | "tertiary"}
     * @default "primary"
     */
    variant: { type: String },
    /**
     * Whether the button is disabled
     * @type {Boolean}
     * @default false
     */
    disabled: { type: Boolean },
    /**
     * Whether the button should be full width
     * @type {Boolean}
     * @default false
     */
    fullWidth: { type: Boolean },
    /**
     * The size of the button
     * @type {"small" | "medium" | "large"}
     * @default "medium"
     */
    size: { type: String },
    /**
     * The href for the button
     * @type {String}
     */
    href: { type: String },
    /**
     * The name of the icon to display
     * @type {String}
     */
    icon: { type: String },
    /**
     * The position of the icon
     * @type {"left" | "right"}
     */
    iconPosition: { type: String },
    /**
     * The click event handler for the button
     * @type {Function}
     * @default undefined
     * @param {Event} e - The click event
     * @returns {void}
     */
    onClick: { type: Function },
  };

  variant: "primary" | "secondary" | "tertiary" = "primary";
  disabled = false;
  fullWidth = false;
  size: "small" | "medium" | "large" = "medium";
  href?: string;
  icon?: string;
  iconPosition: "left" | "right" | undefined = undefined;
  /**
   * Handles the click event for the button
   * @param {Event} e - The click event
   */
  onClick?: (e: Event) => void;

  /**
   * The styles for the button
   * stylesReset is a global CSS reset
   * buttonStyles is the component's styles
   */
  static styles = [unsafeCSS(stylesReset), unsafeCSS(buttonStyles)];

  /**
   * Handles the click event for the button
   * @param {Event} e - The click event
   * @returns {void}
   * @private
   */
  private _handleClick(e: Event): void {
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
  private _disabledClickHandler = (e: Event) => e.preventDefault();

  /**
   * Renders the button
   */
  render(): ReturnType<typeof html> {
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
