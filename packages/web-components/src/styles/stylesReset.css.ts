import { css } from "lit-element";

const stylesReset = css`
  :host {
    display: block;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    border: 0;
  }
`;

export default stylesReset;
