const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [new CleanWebpackPlugin()],
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist"),
  },
});