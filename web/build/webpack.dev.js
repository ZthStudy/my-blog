const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");
const devConfig = {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "[name].js",
    chunkFilename: "[name].[hash].js",
    path: path.resolve(__dirname, "../dist"),
  },
  devServer: {
    contentBase: "./dist",
    open: true,
    port: "5000",
    hot: true,
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader", // 将 JS 字符串生成为 style 节点
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2, // 0 => 无 loader(默认); 1 => postcss-loader; 2 => postcss-loader, sass-loader
            }, // 将 CSS 转化成 CommonJS 模块
          },
          {
            loader: "sass-loader", // 将 Sass 编译成 CSS
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader", // 将 JS 字符串生成为 style 节点
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1, // 0 => 无 loader(默认); 1 => postcss-loader; 2 => postcss-loader, sass-loader
            }, // 将 CSS 转化成 CommonJS 模块
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
    ],
  },
  // plugins: [
  //     new webpack.HotModuleReplacementPlugin()
  // ],
};

module.exports = merge(commonConfig, devConfig);
