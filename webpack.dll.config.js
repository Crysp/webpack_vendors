const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        vendors: [
            './libs/moduleA/index.js',
            './libs/moduleB/index.js'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'vendor.js',
        library: 'vendor_[hash]'
    },
    plugins: [
        new webpack.DllPlugin({
            context: __dirname,
            path: path.join(__dirname, 'dist', 'vendor.manifest.json'),
            name: 'vendor_[hash]'
        })
    ]
};