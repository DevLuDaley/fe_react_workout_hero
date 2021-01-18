const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ManifestPlugin = require('webpack-manifest-plugin')


module.exports = {
    entry: './src/index.js',
    mode: 'development',
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
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        // contentBase: path.join(__dirname, './dist'),
        port: 3003,
        historyApiFallback: true,
        open: true,
        // host: 'localhost',
        // ,
        // publicPath: 'http://localhost:3000/dist/'
        // ,
        // hot: true,
        // hotOnly: true
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
};