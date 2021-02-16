const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack-working/webpack.common-working.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require('dotenv');
require("dotenv").config()
require("dotenv-webpack").config()
const Dotenv = require('dotenv-webpack');

// const dotenv-webpack = require('dotenv-webpack');

const fs = require('fs'); // to check if the file exists

module.exports = (env) => {
     // Get the root path (assuming your webpack config is in the root of your project!)
  const currentPath = path.join(__dirname);
  console.log('🚀 ~ file: webpack.dev.js ~ line 13 ~ currentPath', currentPath);
  
  // Create the fallback path (the production .env)
  const basePath = currentPath + '/.env';
  console.log('🚀 ~ file: webpack.dev.js ~ line 16 ~ basePath', basePath);

  // We're concatenating the environment name to our filename to specify the correct env file!
  const envPath = basePath + '.DEVELOPMENT';
//   const envPath = basePath + '.' + env.ENVIRONMENT;
  console.log('🚀 ~ file: webpack.dev.js ~ line 19 ~ envPath', envPath);

  // Check if the file exists, otherwise fall back to the production .env
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;
  console.log('🚀 ~ file: webpack.dev.js ~ line 22 ~ finalPath', finalPath);

  // Set the path parameter in the dotenv config
  const fileEnv = dotenv.config({ path: finalPath }).parsed;
  console.log('🚀 ~ file: webpack.dev.js ~ line 29 ~ fileEnv', fileEnv);
  
  // reduce it to a nice object, the same as before (but with the variables from the file)
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});
  console.log('🚀 ~ file: webpack.dev.js ~ line 36 ~ envKeys ~ envKeys', envKeys);
   
   
   return merge(common, {
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
     
// new Dotenv({
//       path: './.env.development', // load this now instead of the ones in '.env'
//       safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
//       allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
//       systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
//       silent: true, // hide any errors
//       defaults: false // load '.env.defaults' as the default values if empty.
//     })

     new webpack.DefinePlugin(
        envKeys ? envKeys :
        {
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
        REACT_APP_WH_URL: JSON.stringify(process.env.REACT_APP_WH_URL)
      }
    }
    )
]

   
 });}