import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import stylesReset from "../../styles/stylesReset.styles";
// @ts-ignore
import styles from "./rds-icon.styles";

@customElement("rds-icon")
export class RdsIcon extends LitElement {
  @property({ type: String })
  icon: "x" | "check" | "chevron-down" = "check";

  @property({ type: String })
  size: "small" | "medium" | "large" = "medium";

  static styles = [styles, stylesReset];

  iconList = {
    x: "x",
    check: "✔",
    "chevron-down": "⌄",
  };

  render(): ReturnType<typeof html> {
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
