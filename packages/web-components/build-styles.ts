import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs";
import path from "path";

// Import styles for each component
import stylesReset from "./src/styles/stylesReset.css.js";
import buttonStyles from "./src/components/rds-button/rds-button.css.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Map of component names to their styles
const componentStyles = {
  // Add more components here as needed
  "rds-styles-reset": stylesReset,
  "rds-button": buttonStyles,
} as const;

function generateFrameworkStyles(componentName: string, styles: string): void {
  const reactStylesDir = path.resolve(__dirname, "../react-wrapper/src/styles");
  const angularStylesDir = path.resolve(
    __dirname,
    "../angular-wrapper/src/styles",
  );

  fs.mkdirSync(reactStylesDir, { recursive: true });
  fs.mkdirSync(angularStylesDir, { recursive: true });

  fs.writeFileSync(path.join(reactStylesDir, `${componentName}.css`), styles);
  fs.writeFileSync(path.join(angularStylesDir, `${componentName}.css`), styles);

  console.log(`Generated styles for ${componentName}`);
}

// Generate styles for all components
Object.entries(componentStyles).forEach(([componentName, styles]) => {
  generateFrameworkStyles(componentName, styles.toString());
});
