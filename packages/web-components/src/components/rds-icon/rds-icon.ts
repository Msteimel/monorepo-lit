import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import stylesReset from "../../styles/stylesReset.css";
// @ts-ignore
import styles from "./rds-icon.css";

export interface RdsIconProps {
  icon: "x" | "check" | "chevron-down";
  size: "small" | "medium" | "large";
}

@customElement("rds-icon")
export class RdsIcon extends LitElement {
  @property({ type: String }) icon: RdsIconProps["icon"] = "x";
  @property({ type: String }) size: RdsIconProps["size"] = "medium";

  static override styles = [styles, stylesReset];

  iconList = {
    x: "x",
    check: "✔",
    "chevron-down": "⌄",
  };

  override render(): ReturnType<typeof html> {
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
