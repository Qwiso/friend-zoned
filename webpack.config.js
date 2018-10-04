const path = require('path');

module.exports = {
  entry: './public/js/index.js',
  resolve: {
    extensions: ['.ts','.js','.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'public/js/'),
    filename: 'bundle.js'
  }
};