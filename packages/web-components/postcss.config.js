import autoprefixer from "autoprefixer";
import postcssNesting from "postcss-nesting";

export default {
  plugins: [
    postcssNesting(),
    autoprefixer({
      overrideBrowserslist: ["last 8 versions"],
    }),
  ],
};
