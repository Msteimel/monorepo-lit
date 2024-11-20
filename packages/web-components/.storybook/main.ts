import type { StorybookConfig } from "@storybook/web-components-vite";
import { mergeConfig } from "vite";
import baseConfig from "storybook-config/.storybook/main";
import postcssNesting from "postcss-nesting";
import autoprefixer from "autoprefixer";

const config: StorybookConfig = {
  ...baseConfig,
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
  core: {
    builder: "@storybook/builder-vite",
  },
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  viteFinal: async (config) => {
    return mergeConfig(config, {
      css: {
        postcss: {
          plugins: [
            postcssNesting({}),
            autoprefixer({
              overrideBrowserslist: ["> 3%", "last 8 versions"],
            }),
          ],
        },
        modules: {
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
      build: {
        cssCodeSplit: true,
        cssTarget: ["chrome64", "edge79", "firefox62", "safari11.1"],
        rollupOptions: {
          output: {
            assetFileNames: "assets/[name][extname]",
          },
        },
      },
    });
  },
};

export default config;
