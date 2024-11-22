import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import stylesReset from "../../styles/stylesReset.styles";
import buttonStyles from "./rds-button.styles";

@customElement("rds-button")
export class RdsButton extends LitElement {
  /**
   * The variant of the button
   * @type {"primary" | "secondary" | "tertiary"}
   * @default "primary"
   */
  @property({ type: String })
  variant: "primary" | "secondary" | "tertiary" = "primary";

  /**
   * Whether the button is disabled
   * @type {Boolean}
   * @default false
   */
  @property({ type: Boolean })
  disabled: boolean = false;

  /**
   * Whether the button should be full width
   * @type {Boolean}
   * @default false
   */
  @property({ type: Boolean })
  fullWidth: boolean = false;

  /**
   * The size of the button
   * @type {"small" | "medium" | "large"}
   * @default "medium"
   */
  @property({ type: String })
  size: "small" | "medium" | "large" = "medium";
  /**
   * The href for the button
   * @type {String}
   */
  @property({ type: String })
  href?: string;

  /**
   * The name of the icon to display
   * @type {String}
   */
  @property({ type: String })
  icon?: "";

  /**
   * The position of the icon
   * @type {"left" | "right"}
   */
  @property({ type: String })
  iconPosition: "left" | "right" | undefined = undefined;

  /**
   * The click event handler for the button
   * @type {Function}
   * @default undefined
   * @param {Event} _e - The click event
   * @returns {void}
   */
  @property({ attribute: false })
  onClick?: (_e: Event) => void;

  /**
   * The styles for the button
   * stylesReset is a global CSS reset
   * buttonStyles is the component's styles
   */
  static styles = [stylesReset, buttonStyles];

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
