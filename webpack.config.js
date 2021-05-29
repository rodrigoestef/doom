const path = require("path");
const htmlPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
module.exports = (e, v) => ({
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "doom.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new htmlPlugin({
      filename: "index.html",
      template: "./src/template/index.html",
    }),
    new webpack.DefinePlugin({
      process: JSON.stringify(v),
    }),
  ],
  devServer: {
    compress: true,
    port: 3000,
  },
});
