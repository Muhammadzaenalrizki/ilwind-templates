module.exports = {

   purge: {
    enabled: true,
    content: ['./public/**/*.html','./src/**/*.js'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {width: {
         '1/12': '12%',
        
         
       },
       zIndex:{
        '999':999
       }

     },

  },
  variants: {
    extend: {
       
    },
  },
  plugins: [],
}
