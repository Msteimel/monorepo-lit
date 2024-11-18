import type { StorybookConfig } from "@storybook/web-components-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../../*/src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-test",
    "@storybook/addon-a11y",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  viteFinal: async (config, { configType }) => {
    // Add global Vite configurations if needed
    return mergeConfig(config, {
      // Example of adding global Vite config
      // resolve: {
      //   alias: {
      //     '@': path.resolve(__dirname, '../src'),
      //   },
      // },
    });
  },
};

export default config;
