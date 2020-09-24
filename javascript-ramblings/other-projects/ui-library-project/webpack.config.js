//requre the path module from nodejs
const path = require('path');

module.exports = {

  entry: './src/index.js', 
  output: {
        path: path.resolve(__dirname,'dist/assets'),
        filename:'bundle.js'
  },// end of output property
  devServer:{
    contentBase: path.resolve(__dirname,'dist'),
    publicPath: '/assets/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use:{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  }

};// end of module.exports
