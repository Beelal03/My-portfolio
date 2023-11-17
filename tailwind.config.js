/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        'primary-bg' :'#CCD7C5',
        'secondary-bg':'#555358',
        'text-primary':'#19647E'
      },
      backgroundImage : {
        'primary-img' : "url('/assets/main-bg.jpg')"
      }
    },
  },
  plugins: [],
}

