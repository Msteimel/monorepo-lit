import { mergeConfig } from "vite";
import baseConfig from "storybook-config/.storybook/main";
const config = {
    ...baseConfig,
    stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
    viteFinal: async (config) => {
        return mergeConfig(config, {
        // Add package-specific Vite config if needed
        });
    },
};
export default config;
//# sourceMappingURL=main.js.map