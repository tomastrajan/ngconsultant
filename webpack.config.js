const path = require("path");
const _ = require("lodash");

const webpack = require("webpack");

const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OpenBrowserWebpackPlugin = require("open-browser-webpack-plugin");

const CONFIG_DEFAULT = {
    context: path.join(__dirname, "./src"),
    entry: {
        main: "./main.ts"
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: "ts",
                exclude: /node_modules|typings/,
                query: {
                    compilerOptions: {
                        //"target": "es6",
                        //"module": "es2015"
                    }
                }
            }, {
                test: /\.json/,
                loader: "json"
            }, {
                test: /\.scss/,
                loaders: [
                    "style",
                    { loader: "css", query: { modules: false, sourceMap: true } },
                    { loader: "resolve-url" },
                    { loader: "sass", query: { sourceMap: true } }
                ]
            }, {
                test: /\.(eot|ttf|woff|woff2|svg)/,
                loader: "file"
            }
        ]
    },
    resolve: {
        extensions: ["", ".ts", ".js"],
        modules: [
            path.resolve("./src"),
            "node_modules"
        ]
    }
};

const CONFIG_TARGET = {
    DEV: {
        debug: true,
        devtool: "source-map",
        output: {
            path: path.join(__dirname, "./dev"),
            filename: "[name].js"
        },
        module: {
          loaders: [
          ]
        },
        plugins: [
            new OpenBrowserWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: "./index.html",
                favicon: "./favicon.ico"
            }),
            new webpack.LoaderOptionsPlugin({
                minimize: false,
                debug: true
            })
        ]
    },
    PROD: {
        output: {
            path: path.join(__dirname, "./prod"),
            filename: "[name].[chunkhash].js",
            publicPath: "ngconsultant/"
        },
        plugins: [
            new CleanWebpackPlugin(["prod"]),
            new HtmlWebpackPlugin({
                template: "./index.html"
            })
            //,
            //new webpack.LoaderOptionsPlugin({
            //    minimize: true,
            //    debug: false
            //}),
            //new webpack.optimize.DedupePlugin(),
            //new webpack.optimize.UglifyJsPlugin()
        ]
    }
};

module.exports = function(env) {
    return _.merge(CONFIG_DEFAULT, CONFIG_TARGET[env.TARGET || "DEV"])
};