import { RdsButton } from "../../../web-components";

export function registerWebComponents(): void {
  // Only register if it hasn't been registered yet
  if (!customElements.get("rds-button")) {
    customElements.define("rds-button", RdsButton);
  }
}
