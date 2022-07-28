const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const { resolve } = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, '../../dist/client')
        },
        historyApiFallback: true,
        hot: true
    },
    resolve:{
        fallback:{
            "util": false,
            "path": false,
            "fs": false
        }
    }
});