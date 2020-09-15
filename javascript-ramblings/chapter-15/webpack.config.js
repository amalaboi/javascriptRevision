//requre the path module from nodejs
const path = require('path');

module.exports = {

  entry: './src/index.js', 
  output: {
        path: path.resolve(__dirname,'dist/assets'),
        filename:'bundle.js'
  }// end of output property

};// end of module.exports
