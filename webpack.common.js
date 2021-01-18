const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
//    entry: {
//      app: './src/index.js',
//    },
   entry: './src/index.js',
   module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
   plugins: [
    //    new webpack.HotModuleReplacementPlugin(), 
     // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
     new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
       title: 'Production',
     }),
   ],
   output: {
    //  filename: '[name].bundle.js',
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
 };