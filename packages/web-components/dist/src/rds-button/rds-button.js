var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
let RdsButton = class RdsButton extends LitElement {
    constructor() {
        super(...arguments);
        // Host element properties
        this.fullWidth = false;
        // Internal button properties
        this.className = "";
        this.variant = "primary";
        this.disabled = false;
        this.size = "medium";
    }
    _handleClick(e) {
        if (typeof this.onClick === "function") {
            this.onClick(e);
        }
    }
    render() {
        const componentClasses = {
            "rds-btn": true,
            [`rds-btn-${this.variant}`]: true,
            "rds-btn-disabled": this.disabled,
            "rds-btn-full-width": this.fullWidth,
            [this.className]: !!this.className,
        };
        return html `
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
};
RdsButton.styles = css `
    :host {
      display: inline-block;
    }

    :host([fullwidth]),
    :host([fullwidth="true"]) {
      width: 100%;
      display: block;
    }

    button {
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-family: inherit;
      font-size: 1rem;
      width: 100%;

      &[variant="primary"] {
        background-color: var(--color-blue-500);
        color: white;
      }

      &[variant="secondary"] {
        background-color: var(--color-red-500);
        color: white;
      }

      &[size="small"] {
        padding: var(--spacing-1) var(--spacing-2);
      }

      &[size="medium"] {
        padding: var(--spacing-2) var(--spacing-4);
      }

      &[size="large"] {
        padding: var(--spacing-3) var(--spacing-6);
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  `;
__decorate([
    property({ type: Boolean, reflect: true, attribute: "fullwidth" })
], RdsButton.prototype, "fullWidth", void 0);
__decorate([
    property()
], RdsButton.prototype, "className", void 0);
__decorate([
    property()
], RdsButton.prototype, "variant", void 0);
__decorate([
    property({ type: Boolean })
], RdsButton.prototype, "disabled", void 0);
__decorate([
    property()
], RdsButton.prototype, "size", void 0);
__decorate([
    property()
], RdsButton.prototype, "onClick", void 0);
RdsButton = __decorate([
    customElement("rds-button")
], RdsButton);
export { RdsButton };
//# sourceMappingURL=rds-button.js.map