const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: {
        app: "./src/index.js"
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, '../src')
        },
        extensions: ['.js', '.vue']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ["vue-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "images/",
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ["file-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
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
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
}