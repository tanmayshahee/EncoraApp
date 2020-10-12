const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
module.exports = {
   context: __dirname,
   entry: './src/index.js',
   output: {
      path: path.resolve( __dirname, 'build' ),
      filename: 'main.js',
      publicPath: './',
   },
   devServer: {
      historyApiFallback: true,
      contentBase: "./build",
   },
   devtool: "source-map",
   module: {
      rules: [
         {
            test: /\.js$/,
            use: 'babel-loader',
         },
         {
            test:/\.(s*)css$/,
            use:['style-loader','css-loader', 'sass-loader']
         },
         {
            test: /\.(png|j?g|svg|gif)?$/,
            use: 'file-loader'
         }
]
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: path.resolve( __dirname, 'index.html' ),
         filename: 'index.html'
      })
   ]
};