// .storybook/webpack.config.ts
import type { Configuration } from "webpack";
import path from "path";

module.exports = async ({ config }: { config: Configuration }) => {
  // Ensure config.module.rules exists
  if (!config.module?.rules) {
    config.module = { rules: [] };
  }

  // Resolve Aliases
  config.resolve = config.resolve || {};
  config.resolve.alias = {
    ...config.resolve.alias,
    "@monorepo-lit/tokens": path.resolve(__dirname, "../../tokens/build/css"),
    "@monorepo-lit/web-components": path.resolve(
      __dirname,
      "../../web-components/dist",
    ),
  };

  // Add module resolution paths
  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve(__dirname, "../src"),
    path.resolve(__dirname, "../../tokens/build/css"),
    path.resolve(__dirname, "../../web-components/dist"),
  ];

  // CSS Loader Configuration
  config.module.rules.push({
    test: /\.css$/,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          importLoaders: 1,
          sourceMap: true,
        },
      },
      {
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            plugins: [require("postcss-import"), require("autoprefixer")],
          },
          sourceMap: true,
        },
      },
    ],
    include: [
      path.resolve(__dirname, "../src"),
      path.resolve(__dirname, "../../tokens/build/css"),
      path.resolve(__dirname, "../../web-components/dist"),
    ],
  });

  return config;
};
