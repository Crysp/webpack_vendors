const webpack = require('webpack');
const path = require('path');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require(`./dist/vendor.manifest.json`)
        })
    ],
    resolve: {
        modules: ['node_modules']
    },
    devtool: 'source-map'
};