const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    port: 9000,
    compress: true,
    liveReload: true,
    hot: true,
    open: true,
  },
});
