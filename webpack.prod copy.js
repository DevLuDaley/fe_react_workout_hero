const { merge } = require('webpack-merge');
const common = require('./webpack-working/webpack.common.js');
require("dotenv").config()

module.exports = (env) =>
{
  return merge(common, {
      mode: 'production',
      devtool: 'source-map',
        }
      )
}