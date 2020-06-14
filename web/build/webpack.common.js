const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
module.exports = {
  entry: {
    app: "./src/index.ts",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
    extensions: [".tsx", ".ts", ".js", ".vue"],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          transformAssetUrls: {
            audio: "src",
          },
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.mp3$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "[name].[ext]",
          esModule: false
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
  ],
  performance: false,
  optimization: {
    //Tree Shaking
    usedExports: true,
    //code spliting
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
