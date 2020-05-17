var HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require("./webpack.common");
const merge = require("webpack-merge");
const path = require('path');

module.exports = merge(common, {    
    mode: "development",
    entry: './js/index.js',

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }

});