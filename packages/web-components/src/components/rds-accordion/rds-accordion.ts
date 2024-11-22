import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
// @ts-ignore
import stylesReset from "../../styles/stylesReset.css";
// @ts-ignore
import styles from "./rds-accordion.css";

@customElement("rds-accordion")
export class RdsAccordion extends LitElement {
  static styles = [stylesReset, styles];

  render() {
    return html`
      <div class="rds-accordion">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "rds-accordion": RdsAccordion;
  }
}
