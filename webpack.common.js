const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const outputDir = "./dist";

module.exports = {
    entry: path.resolve(__dirname, "src", "javascript", "index.js"), //
    output: {
        path: path.join(__dirname, outputDir),
        filename: "[name].js",
        publicPath: "/dist/"
    },
    resolve: {
        extensions: [".js"] // if we were using React.js, we would include ".jsx"
    },
    module: {

        rules: [{
                test: /\.js$/, // if we were using React.js, we would use \.jsx?$/
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        exclude: /node_modules/
                    } // if we were using React.js, we would include "react"
                }
            },
            {
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: "../",
                            hmr: process.env.NODE_ENV === "development"
                        }
                    },
                    "css-loader",
                    "postcss-loader"
                ]
            },
            // {
            //     test: /\.scss/,
            //     use: [{
            //             loader: MiniCssExtractPlugin.loader,
            //             options: {
            //                 // you can specify a publicPath here
            //                 // by default it uses publicPath in webpackOptions.output
            //                 publicPath: "../",
            //                 hmr: process.env.NODE_ENV === "development"
            //             }
            //         },
            //         "css-loader",
            //         "sass-loader",
            //         "postcss-loader"
            //     ]
            // },
            {
                test: /\.(scss)$/,
                use: [{
                loader: 'style-loader', // inject CSS to page
                }, {
                loader: 'css-loader', // translates CSS into CommonJS modules
                }, {
                loader: 'postcss-loader', // Run post css actions
                options: {
                    plugins: function () { // post css plugins, can be exported to postcss.config.js
                    return [
                        require('precss'),
                        require('autoprefixer')
                    ];
                    }
                }
                }, {
                loader: 'sass-loader' // compiles Sass to CSS
                }]
            },  
            {
                test: /\.(png|jp(e*)g|svg)$/,  
                use: [{
                    loader: 'url-loader',
                    options: { 
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]',
                        publicPath: '../dist/'
                    } 
                }]
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        filename: "[name].css",
        chunkFilename: "[id].css",
        ignoreOrder: false // Enable to remove warnings about conflicting order
    }), require("autoprefixer")]
};