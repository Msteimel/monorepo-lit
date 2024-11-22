import { css } from "lit-element";
export default css`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .rds-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &[size="small"] {
      font-size: 1rem;
    }

    &[size="medium"] {
      font-size: 1.5rem;
    }

    &[size="large"] {
      font-size: 2rem;
    }
  }
`;
