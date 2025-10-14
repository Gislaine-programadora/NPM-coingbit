const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'CoinGBit',
    libraryTarget: 'umd'
  },
  mode: 'production',
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'chart.js': 'Chart'
  }
};