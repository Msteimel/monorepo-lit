import autoprefixer from "autoprefixer";
import postcssNesting from "postcss-nesting";

export default {
  plugins: [
    postcssNesting(),
    autoprefixer({
      overrideBrowserslist: ["> 3%", "last 8 versions"],
    }),
  ],
};
