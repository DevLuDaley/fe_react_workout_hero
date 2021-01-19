const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
// const path = require('path');
// const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
// const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
   mode: 'production',
   devtool: 'source-map',
  //  plugins: [
  //   new CopyPlugin({
  //     patterns: [
  //       {
  //         context: path.resolve(__dirname, "dist"),
  //         from: "*.html",
  //         // from: "./src/*.html",
  //       },
  //     ],
  //   }),
  // ],
  // optimization: {
  //   // minimize: true,
  //   minimize: false,
  //   minimizer: [
  //     // new HtmlMinimizerPlugin(),
  //     new HtmlMinimizerPlugin({
  //       minimizerOptions: {
  //         collapseWhitespace: true,
  //       },
  //       minify: (data, minimizerOptions) => {
  //         const htmlMinifier = require("html-minifier-terser");
  //         const [[filename, input]] = Object.entries(data);

  //         return htmlMinifier.minify(input, minimizerOptions);
  //       },
  //     }),
  //       // new HtmlMinimizerPlugin(),
  //   ],
  // }
});