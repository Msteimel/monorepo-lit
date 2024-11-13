export default {
  source: ["src/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "dist/styles/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
        },
      ],
    },
  },
};
