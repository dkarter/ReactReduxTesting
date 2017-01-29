var webpack = require('webpack');
var baseConfig = require('./webpack.config');

module.exports = Object.assign({}, baseConfig, {
  debug: false,
  devtool: false,
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      // mangle: false, turn mangle off if dumping bundle in rails asset
      // pipeline. Sprockets will handle the "mangling"
      sourceMap: false,
      output: {
        comments: false
      },
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
  ],
});
