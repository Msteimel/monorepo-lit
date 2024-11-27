// src/components/rds-button/rds-button.component.ts
import {
  Component,
  Input,
  Output,
  EventEmitter,
  CUSTOM_ELEMENTS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import "../src/styles/variables.css";
import "../src/styles/global.css";

@Component({
  selector: "rds-button-wrapper", // Changed selector to avoid conflict
  template: `
    <rds-button
      [attr.variant]="variant"
      [attr.disabled]="disabled"
      [attr.fullWidth]="fullWidth"
      [attr.size]="size"
      (rds-click)="handleClick($event)"
    >
      <ng-content></ng-content>
    </rds-button>
  `,
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add schema for web components
  styleUrls: ["./rds-button.css"],
})
export class RdsButtonComponent {
  @Input() variant: "primary" | "secondary" | "tertiary" = "primary";
  @Input() disabled = false;
  @Input() fullWidth = false;
  @Input() size: "small" | "medium" | "large" = "medium";

  @Output() clicked = new EventEmitter<CustomEvent>();

  constructor() {
    console.log("RdsButtonComponent initialized");
  }

  handleClick(event: CustomEvent): void {
    console.log("RdsButtonComponent handleClick", event);
    this.clicked.emit(event);
  }
}
