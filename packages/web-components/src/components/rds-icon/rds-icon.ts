import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
// @ts-ignore
import iconStyles from "./rds-icon.css?raw";

@customElement("rds-icon")
export class RdsIcon extends LitElement {
  static properties = {
    icon: { type: String },
    size: { type: String },
  };

  icon: "x" | "check" = "x";
  size: "small" | "medium" | "large" = "medium";

  static styles = unsafeCSS(iconStyles);

  iconList = {
    x: "x",
    check: "✔",
  };

  render() {
    return html`
      <span
        class="rds-icon"
        size=${this.size}
      >
        ${this.iconList[this.icon]}
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "rds-icon": RdsIcon;
  }
}
