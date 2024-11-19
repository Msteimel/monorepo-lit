import globals from "globals";
import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    ignores: [
      "**/dist/**",
      "**/node_modules/**",
      "**/build/**",
      "**/*.config.{js,ts}",
      "**/coverage/**",
    ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        project: [
          "./tsconfig.json",
          "./packages/*/tsconfig.json",
          "./packages/storybook-config/tsconfig.json",
          "./packages/angular-wrapper/tsconfig.json",
          "./packages/react-wrapper/tsconfig.json",
          "./packages/tokens/tsconfig.json",
          "./packages/web-components/tsconfig.json",
          "./packages/web-components/tsconfig.eslint.json",
        ],
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      quotes: [
        "error",
        "double",
        { avoidEscape: true, allowTemplateLiterals: true },
      ],
      "prefer-template": "error",
    },
  },
  // Storybook-specific configuration
  {
    files: ["**/storybook/**/*.ts"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
];
