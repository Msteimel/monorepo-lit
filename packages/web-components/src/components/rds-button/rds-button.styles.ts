import { css } from "lit";

export default css`
  /**
  Sets host element to inline-block.
 */
  :host {
    display: inline-block;
  }

  /**
  If the fullwidth attribute is present, the button will take up 100% of the width.
 */
  :host([fullwidth]),
  :host([fullwidth="true"]) {
    width: 100%;
  }

  /**
  default button styles
 */
  button,
  a {
    border: none;
    border-radius: 4px;
    font-family: inherit;
    text-decoration: none;
    text-align: center;
    display: inline-block;
    cursor: pointer;
    font-size: 1rem;
    line-height: 1;
    width: 100%;

    /**
   Primary button styles
   */
    &[variant="primary"] {
      background-color: var(--color-blue-500);
      color: white;
    }

    /**
  * Secondary button styles
  */
    &[variant="secondary"] {
      background-color: var(--color-green-500);
      color: white;
    }

    /**
   * Tertiary button styles
   */
    &[variant="tertiary"] {
      background-color: var(--color-neutral-white);
      color: var(--color-red-600);
      border: 1px solid var(--color-red-600);
    }

    /**
   * adjusts padding based on size
   */
    &[size="small"] {
      padding: var(--spacing-1) var(--spacing-2);
    }

    /**
   * adjusts padding based on size
   */
    &[size="medium"] {
      padding: var(--spacing-2) var(--spacing-4);
    }

    /**
   * adjusts padding based on size
   */
    &[size="large"] {
      padding: var(--spacing-3) var(--spacing-6);
    }

    /**
   * Sets slot to flex and handles icon position
   */
    .rds-button__content {
      display: flex;
      gap: var(--spacing-2);
      justify-content: center;
      align-items: center;

      &[iconposition="right"] {
        flex-direction: row-reverse;
      }
    }

    /**
   * Styles for disabled state
   */
    &:disabled,
    &.rds-button--disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /**
   * Hover state
   */
    &:hover {
      transform: translateY(-1px);
    }
  }
`;
