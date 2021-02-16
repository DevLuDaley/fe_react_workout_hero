const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('../webpack-working/webpack.common.js');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require('dotenv');
require("dotenv").config()
const fs = require('fs'); // to check if the file exists

module.exports = (env) =>
{
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
  // const finalPath = fs.existsSync(envPath) ? envPath : basePath;
  const finalPath = basePath
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
      mode: 'production',
      devtool: 'source-map',
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
        }
        ,
      //        new webpack.DefinePlugin({
      // "process.env": {
      //   NODE_ENV: JSON.stringify("production"),
      //   REACT_APP_WH_URL: JSON.stringify(process.env.REACT_APP_WH_URL)
        // , REACT_APP_BOO_URL: JSON.stringify(process.env.REACT_APP_BOO_URL)
        // ,
        // BUILD_DATE: JSON.stringify(new Date()),
        // TRAVIS_COMMIT: JSON.stringify(process.env.TRAVIS_COMMIT)
      // }
    // })
    



      )
}