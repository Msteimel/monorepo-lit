import "../src/styles/global.css";
import type { Preview } from "@storybook/web-components";
import { fn } from "@storybook/test";

const preview: Preview = {
  parameters: {
    chromatic: { disableSnapshot: false },
    actions: fn(),
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
