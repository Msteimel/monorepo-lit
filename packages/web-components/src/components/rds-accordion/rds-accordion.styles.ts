import { css } from "lit";

export default css`
  :host {
    display: block;
  }

  .rds-accordion {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
    border: 1px solid var(--color-neutral-gray-300);
    border-radius: var(--spacing-2);
    padding: var(--spacing-4);
    width: 100%;
  }

  .rds-accordion-item {
    padding: var(--spacing-4);
    width: 100%;
    border: 1px solid var(--color-neutral-gray-300);
    border-radius: var(--spacing-2);
    background-color: var(--color-neutral-gray-100);
  }

  .rds-accordion-item_header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-neutral-gray-300);
    margin-bottom: var(--spacing-2);
    font-size: 1.5rem;
    cursor: pointer;
  }

  .rds-accordion-item__open {
    rds-icon {
      transform: rotate(180deg);
    }
  }

  ::slotted([slot="content"]),
  .rds-accordion-item_content {
    display: none;
  }

  .rds-accordion-item__open .rds-accordion-item_content,
  .rds-accordion-item__open ::slotted([slot="content"]) {
    display: block;
  }

  ::slotted([slot="content"]),
  .rds-accordion-item_content {
    display: none;
  }
`;
