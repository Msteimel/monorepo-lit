import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs";
import path from "path";
import { CSSResult } from "lit";

// Import styles for each component
import stylesReset from "./src/styles/stylesReset.css.js";
import buttonCss from "./src/components/rds-button/rds-button.css.js";
import accordionCss from "./src/components/rds-accordion/rds-accordion.css.js";
import formFieldCss from "./src/components/rds-form-field/rds-form-field.css.js";
import inputCss from "./src/components/rds-input/rds-input.css.js";
import iconCss from "./src/components/rds-icon/rds-icon.css.js";
import labelCss from "./src/components/rds-label/rds-label.css.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Map of component names to their styles
const componentStyles = {
  // Add more components here as needed
  "rds-button": buttonCss,
  "rds-accordion": accordionCss,
  "rds-form-field": formFieldCss,
  "rds-input": inputCss,
  "rds-icon": iconCss,
  "rds-label": labelCss,
} as const;

interface StylesMap {
  [key: string]: CSSResult;
}

function generateFrameworkStyles(componentStyles: StylesMap): void {
  Object.entries(componentStyles).forEach(([componentName, styles]) => {
    const reactStylesDir = path.resolve(
      __dirname,
      `../react/src/${componentName}`,
    );
    const angularStylesDir = path.resolve(
      __dirname,
      `../angular/src/${componentName}`,
    );

    fs.mkdirSync(reactStylesDir, { recursive: true });
    fs.mkdirSync(angularStylesDir, { recursive: true });

    fs.writeFileSync(
      path.join(reactStylesDir, `${componentName}.css`),
      styles.cssText,
    );
    fs.writeFileSync(
      path.join(angularStylesDir, `${componentName}.css`),
      styles.cssText,
    );

    console.log(`Generated styles for ${componentName}`);
  });
}

function generateResetStyles(): void {
  const reactStylesDir = path.resolve(__dirname, `../react/src/styles`);
  const angularStylesDir = path.resolve(__dirname, `../angular/src/styles`);

  fs.mkdirSync(reactStylesDir, { recursive: true });
  fs.mkdirSync(angularStylesDir, { recursive: true });

  fs.writeFileSync(
    path.join(reactStylesDir, "styles-reset.css"),
    stylesReset.cssText,
  );
  fs.writeFileSync(
    path.join(angularStylesDir, "styles-reset.css"),
    stylesReset.cssText,
  );

  console.log("Generated reset styles");
}

// Generate styles for all components
generateFrameworkStyles(componentStyles);
generateResetStyles();
