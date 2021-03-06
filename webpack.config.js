const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/Index.bs.js',
    mode: 'production',
    output: {
        path: path.join(__dirname, './public_html'),
        filename: 'index.js',
    },
    plugins: [
        new CopyPlugin([
            { from: './index_prod.html', to: './index.html' }
        ]),
    ],
};