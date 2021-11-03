const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'app.js'
    },
      plugins: [
new CopyPlugin({
      patterns: [
        { from: "./public/img", to: "img" },
        
      ],
    }),
      new HtmlWebpackPlugin({
          title:'Webpack Tailwind Template',
          filename:'index.html',
          template:'public/index.html',
          minify:false
      }),
      new HtmlWebpackPlugin({
          title:'Webpack Tailwind Template',
          filename:'dashboard.html',
          template:'public/dashboard.html',
          minify:false
      }),
      new HtmlWebpackPlugin({
          title:'Webpack Tailwind Template',
          filename:'form.html',
          template:'public/form.html',
          minify:false
      }),
       new HtmlWebpackPlugin({
          title:'Webpack Tailwind Template',
          filename:'form-customer.html',
          template:'public/form.html',
          minify:false
      }),
          new HtmlWebpackPlugin({
          title:'Webpack Tailwind Template',
          filename:'items.html',
          template:'public/items.html',
          minify:false
      }),
              new HtmlWebpackPlugin({
          title:'Webpack Tailwind Template',
          filename:'create-products.html',
          template:'public/create-products.html',
          minify:false
      }),
                 new HtmlWebpackPlugin({
          title:'Webpack Tailwind Template',
          filename:'create-sub-products.html',
          template:'public/create-sub-products.html',
          minify:false
      }),
              new HtmlWebpackPlugin({
          title:'Webpack Tailwind Template',
          filename:'create-stock-product.html',
          template:'public/create-stock-product.html',
          minify:false
      }), 
          new HtmlWebpackPlugin({
          title:'Webpack Tailwind Template',
          filename:'suppliers.html',
          template:'public/suppliers.html',
          minify:false
      }),  
          new HtmlWebpackPlugin({
          title:'Webpack Tailwind Template',
          filename:'create-suppliers.html',
          template:'public/create-suppliers.html',
          minify:false
      }),
       new HtmlWebpackPlugin({
          title:'Webpack Tailwind Template',
          filename:'sales.html',
          template:'public/sales.html',
          minify:false
      }),            
  require('tailwindcss'),
    require('autoprefixer'),
      ],
        module: {
        rules: [
          
      
  
         
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },



                     {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [
                  require('tailwindcss'),
                  require('autoprefixer'),
                ],
              },
            }
          },
                ],


            },

              {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },

        ]
    }
}