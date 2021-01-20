const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");



module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
   devServer: {
    //  contentBase: './dist',
     contentBase: path.join(__dirname, 'public/'),
        // contentBase: path.join(__dirname, './dist'),
        port: 3003,
        historyApiFallback: true,
        open: true,
   },
       plugins: [
        new webpack.HotModuleReplacementPlugin(), 
        new HtmlWebpackPlugin({
        //  template: path.resolve( __dirname, 'dist/index.html' ),
         template: path.resolve( __dirname, 'public/index.html' ),
         filename: 'index.html',
         favicon: 'public/favicon.ico'
      }), new webpack.NoEmitOnErrorsPlugin(),
      
    //    new ManifestPlugin({
    //   fileName: 'manifest.json'
    // })
]

   
 });