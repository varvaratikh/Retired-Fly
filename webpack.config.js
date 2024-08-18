const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: 'bundle.js',
        clean: true,
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    stylesHandler,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(eot|ttf|woff|woff2|svg|png|jpg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
        open: true,
        host: 'localhost',
        port: 3000,
        static: {
            directory: path.resolve(process.cwd(), 'public'),
        },
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            inject: 'body',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new ESLintPlugin({
            extensions: ['js', 'jsx'],
            emitWarning: !isProduction,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    mode: isProduction ? 'production' : 'development',
};
