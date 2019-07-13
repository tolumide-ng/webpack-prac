const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
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
