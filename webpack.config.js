const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3. Inject css into DOM
          "css-loader", //2. Turns css in vanilajs
          "sass-loader", //1. Turns sass into css
        ],
      },
    ],
  },
};
