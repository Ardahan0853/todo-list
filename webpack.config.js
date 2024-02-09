const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,  // Target CSS files
        use: ["style-loader", "css-loader"],  // Use style-loader and css-loader
      },
      {
        test: /\.svg$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Path to your HTML template
      filename: 'index.html',        // Output filename
    }),
  ],
};
