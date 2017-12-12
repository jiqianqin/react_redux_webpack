const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const commonConfig = {
    entry: {
        app: [
            "babel-polyfill",
            path.join(__dirname, './src/index.tsx')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        publicPath: "/"
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        },{
            test: /\.tsx$/,
            use: ['ts-loader'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        })
    ],

    resolve: {
        extensions: [".tsx", ".ts", ".js"],        
        // alias: {
        //     modules: path.join(__dirname, 'src/modules'),
        //     common: path.join(__dirname, 'src/common'),
        //     components: path.join(__dirname, 'src/components'),
        //     libs:path.join(__dirname, 'src/libs'),
        //     routers: path.join(__dirname, 'src/routers'),
        //     mock: path.join(__dirname, 'mock')
        // }
    }
};

module.exports = commonConfig;