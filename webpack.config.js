const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  optimization: {
    usedExports: true, // Optional if already in production mode
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 8080, // Specify port
    open: true, // Opens the browser on server start
    hot: true, // Enables Hot Module Replacement
  },
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "thread-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
};
