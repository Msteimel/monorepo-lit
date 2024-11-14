import type { StorybookConfig } from "@storybook/web-components-vite";
import { mergeConfig } from "vite";
import baseConfig from "storybook-config/.storybook/main";

const config: StorybookConfig = {
  ...baseConfig,
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  viteFinal: async (config) => {
    return mergeConfig(config, {
      // Add package-specific Vite config if needed
    });
  },
};

export default config;
