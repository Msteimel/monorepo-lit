// build-css.js
import fs from "fs";
import path from "path";
import postcss from "postcss";
import postcssNesting from "postcss-nesting";
import autoprefixer from "autoprefixer";

async function processCSS(inputDir, outputDir) {
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Find all CSS files
  const findCSS = (dir) => {
    const files = fs.readdirSync(dir);
    const cssFiles = [];

    files.forEach((file) => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        cssFiles.push(...findCSS(fullPath));
      } else if (file.endsWith(".css")) {
        cssFiles.push(fullPath);
      }
    });

    return cssFiles;
  };

  const cssFiles = findCSS(inputDir);

  // Process each CSS file
  for (const file of cssFiles) {
    const css = fs.readFileSync(file, "utf8");
    const relativePath = path.relative(inputDir, file);
    const outputPath = path.join(outputDir, relativePath);

    // Ensure output subdirectory exists
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });

    try {
      const result = await postcss([
        postcssNesting({
          preserveEmpty: true,
          addDuplicates: true,
        }),
        autoprefixer({
          grid: "autoplace",
          flexbox: true,
          cascade: false,
          remove: false,
          supports: true,
          overrideBrowserslist: ["last 8 versions"],
        }),
      ]).process(css, {
        from: file,
        to: outputPath,
      });

      // Write processed CSS
      fs.writeFileSync(outputPath, result.css);

      console.log(`Processed: ${relativePath}`);
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }

  // Generate aggregate CSS file
  await generateAggregateCss(outputDir);
}

async function generateAggregateCss(outputDir) {
  const aggregateCssPath = path.join(outputDir, "index.css");
  const cssFiles = fs
    .readdirSync(outputDir)
    .filter((file) => file.endsWith(".css") && file !== "index.css")
    .map((file) => `@import './${file}';`)
    .join("\n");

  fs.writeFileSync(aggregateCssPath, cssFiles);
  console.log("Generated aggregate CSS");
}

// Run the CSS processing
processCSS(
  path.resolve(__dirname, "src/components"),
  path.resolve(__dirname, "dist/components"),
);
