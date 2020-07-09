var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// const pathToCats = require.context('../img', true);
// var req = require.context("../img", false, /.*\.png$/);


module.exports = {

    entry: {
        main: "./js/index.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif|mp4|webm)$/,
                use:{
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "img"
                    }
                }
            }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./template.html"
    })]
};