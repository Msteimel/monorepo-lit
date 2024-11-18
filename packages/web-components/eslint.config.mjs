import baseConfig from "../../eslint.config.mjs";

export default [
  ...baseConfig,
  {
    files: ["src/**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "warn", // Override to warning instead of error
    },
  },
];
