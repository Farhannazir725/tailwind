/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      spacing:{
        13: '3.2rem'
      },
      fontSize:{
        '10xl': ['10rem',{lineHeight:'1.2'}],
      },
    },
  },
  plugins: [],
}

