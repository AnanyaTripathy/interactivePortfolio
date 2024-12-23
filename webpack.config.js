const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
    return ({
        // stats: 'minimal', // Keep console output easy to read.
        entry: './src/game.ts', // Your program entry point

        // Your build destination
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'game.js'
        },

        // Config for your testing server
        devServer: {
            compress: true,
            allowedHosts: "all", // If you are using WebpackDevServer as your production server, please fix this line!
            static: false,
            client: {
                logging: "warn",
                overlay: {
                    errors: true,
                    warnings: false,
                },
                progress: true,
            },
            port: 1234, host: '0.0.0.0'
        },

        performance: { hints: false },

        devtool: argv.mode === 'development' ? 'eval-source-map' : undefined,

        // Minify the code when making a final build
        optimization: {
            minimize: argv.mode === 'production',
            minimizer: [new TerserPlugin({
                terserOptions: {
                    ecma: 6,
                    compress: { drop_console: true },
                    output: { comments: false, beautify: false },
                },
            })],
        },


        // Explain webpack how to do Typescript
        module: {
            rules: [
                {
                    test: /\.ts(x)?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                }
            ]
        },
        resolve: {
            extensions: [
                '.tsx',
                '.ts',
                '.js',
                '.css'
            ]
        },

        plugins: [
            // Copy our static assets to the final build
            new CopyPlugin({
                patterns: [{ from: 'src/assets/' }],
            }),

            // Make an index.html from the template
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                hash: true,
                minify: false
            })
        ]
    });
}