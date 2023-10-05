const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const scss = () => ({
    test: /\.(sass|scss|css)$/,
    exclude: /node_modules/,
    use: [
        MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                url: false,
            }
        },
        'sass-loader']
});

module.exports.commonConfig = () => ({
    entry: {
        public: ['./assets/css/index.scss']
    },
    module: {
        rules: [
             scss()
        ]
    },
    output: {
        path: path.resolve(__dirname, '../public'),
    },
    resolve: {
        extensions: ['.scss']
    }, plugins: [
        new MiniCssExtractPlugin({
            filename: './css/[name].css',
        }),
    ]
});