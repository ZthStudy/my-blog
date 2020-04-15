const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const prdConfig = {
    mode: "production",
    // devtool: 'cheap-module-source-map',
    output: {
        filename: "[name].[hash].js",
        chunkFilename: '[name].[hash].js',
        path: path.resolve(__dirname, "../dist")
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader 
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2 // 0 => 无 loader(默认); 1 => postcss-loader; 2 => postcss-loader, sass-loader
                        } // 将 CSS 转化成 CommonJS 模块
                    },
                    {
                        loader: "sass-loader" // 将 Sass 编译成 CSS
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader 
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1 // 0 => 无 loader(默认); 1 => postcss-loader; 2 => postcss-loader, sass-loader
                        } // 将 CSS 转化成 CommonJS 模块
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin()],
};

module.exports = merge(commonConfig, prdConfig)