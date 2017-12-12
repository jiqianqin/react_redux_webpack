const merge = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");

const commonConfig = require("./webpack.common.config.js");

const devConfig = {
    devtool: "inline-source-map",
    entry: {
        app: [
            "babel-polyfill",
            "react-hot-loader/patch",
            path.join(__dirname, "./src/index.tsx")
        ]
    },
    output: {
        /* 这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协 */
        filename: "[name].[hash].js"
    },
    module: {
        rules: [{
            test: /\.(css|scss)$/,
            /**  1、将 JS 字符串生成为 style 节点 
             *   2、将 CSS 转化成 CommonJS 模块
             *   3、将 Sass 编译成 CSS
             *   4、允许你使用未来的 CSS 特性
             */
            use: ["style-loader","css-loader","sass-loader", "postcss-loader"]
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0',
    },
    plugins:[
        new webpack.DefinePlugin({
               MOCK: true
        })
    ]
};

module.exports = merge({
    customizeArray(a, b, key) {
        /*entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig);