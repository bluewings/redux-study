module.exports = {
  entry: './src/index.js',

  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },

  devServer: {
    inline: true,
    port: 7777,
    contentBase: __dirname + '/public/'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        cacheDirectory: true,
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.scss$/,
      loaders: [
        'style',
        'css?modules&importLoaders=1&localIdentName=[name]---[local]---[hash:base64:5]',
        'autoprefixer',
        'sass'
      ]
    }, {
      test: /\.yml$/,
      loaders: ['json', 'yaml'],
      exclude: /node_modules/
    }]
  }
}