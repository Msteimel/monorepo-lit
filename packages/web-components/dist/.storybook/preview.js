import "../src/styles/global.css";
import { fn } from "@storybook/test";
const preview = {
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
//# sourceMappingURL=preview.js.map