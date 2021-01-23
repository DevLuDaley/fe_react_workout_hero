const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
// const CopyPlugin = require("copy-webpack-plugin");

 module.exports = {
   entry: {
     app: './src/index.js',
   },
//    entry: './src/index.js',
   module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: { presets: ["@babel/env", "@babel/react"],
                plugins: ['@babel/plugin-proposal-object-rest-spread'] }
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
       title: 'Workout-Hero (Production)',
       template: path.resolve( __dirname, 'public/index.html' ),
         filename: 'index.html',
         favicon: 'public/favicon.ico'
     }),
     
   
    ],
    optimization: {
    // minimize: true,
    minimize: false,
    minimizer: [
    //   new HtmlMinimizerPlugin(),
      new HtmlMinimizerPlugin({
        minimizerOptions: {
          collapseWhitespace: true,
        },
        minify: (data, minimizerOptions) => {
          const htmlMinifier = require("html-minifier-terser");
          const [[filename, input]] = Object.entries(data);

          return htmlMinifier.minify(input, minimizerOptions);
        },
      }),
        // new HtmlMinimizerPlugin(),

    ],
  },
   output: {
    //  filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
     publicPath: '/', 
    // publicPath: 'http://localhost:3000/dist/'
   },
 };