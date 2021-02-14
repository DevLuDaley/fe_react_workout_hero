const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack-working/webpack.common.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');



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
          new Dotenv({
      path: './.env.development', // load this now instead of the ones in '.env'
      safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent: true, // hide any errors
      defaults: false // load '.env.defaults' as the default values if empty.
    }),
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