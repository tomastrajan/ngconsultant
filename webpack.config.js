const path = require("path");
const _ = require("lodash");

const webpack = require("webpack");

const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OpenBrowserWebpackPlugin = require("open-browser-webpack-plugin");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

const CONFIG_DEFAULT = {
    context: path.join(__dirname, "./src"),
    entry: {
        vendor: [
            "es6-shim", "es6-promise", "zone.js", "rxjs", "rxjs/Rx", "reflect-metadata",
            "angular2/animate", "angular2/bootstrap", "angular2/common", "angular2/compiler", "angular2/core",
            "angular2/http", "angular2/instrumentation", "angular2/router"
        ],
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
                    ExtractTextWebpackPlugin.extract("style"),
                    { loader: "css", query: { modules: false, sourceMap: true } },
                    { loader: "resolve-url" },
                    { loader: "sass", query: { sourceMap: true } }
                ]
            }, {
                test: /\.(jpg|eot|ttf|woff|woff2|svg)/,
                loader: "file",
                query: {
                    name: "[path][hash].[ext]"
                }
            }, {
                test: /\.png/,
                loader: "url"
            }, {
                test: /\.html$/,
                loader: "html"
            }
        ]
    },
    resolve: {
        extensions: ["", ".ts", ".js"],
        modules: [
            path.resolve("./src"),
            "node_modules"
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin("styles.[hash].css"),
        new HtmlWebpackPlugin({
            template: "./index.html",
            favicon: "./favicon.ico",
            chunksSortMode: "dependency"
        })
    ]
};

const CONFIG_TARGET = {
    DEV: {
        debug: true,
        devtool: "source-map",
        output: {
            path: path.join(__dirname, "./dev"),
            filename: "[name].js"
        },
        plugins: [
            new OpenBrowserWebpackPlugin(),
            new webpack.DefinePlugin({
                PROD: "false"
            })
        ]
    },
    PROD: {
        output: {
            path: path.join(__dirname, "./prod"),
            filename: "[name].[chunkhash].js"
        },
        plugins: [
            new CleanWebpackPlugin(["prod"]),
            new webpack.optimize.UglifyJsPlugin({
                mangle: false
                // mangle: {
                //     except: ["RouterLink", "OssRepositoryComponent"]
                // }
            }),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.CommonsChunkPlugin({
                name: "vendor",
                filename: "vendor.[chunkhash].js"
            }),
            new webpack.DefinePlugin({
                PROD: "true"
            })
        ]
    }
};

module.exports = function(env) {
    return  _.mergeWith(CONFIG_DEFAULT, CONFIG_TARGET[env.TARGET || "DEV"], function (a, b) {
        return _.isArray(a) ? _.concat(a, b) : undefined;
    });
    return config;
};