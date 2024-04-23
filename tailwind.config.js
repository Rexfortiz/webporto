/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      serif: ['"Playfair Display"', ...defaultTheme.fontFamily.sans],
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      fontFamily:{
        comfortaa: ["Comfortaa",...defaultTheme.fontFamily.sans],
        josefin:["Josefin Sans", ...defaultTheme.fontFamily.sans],
      },
      colors:{
        blue: '#2997FF',
        gray: {
          DEFAULT: '#86868b',
          100: '#94928d',
          200: '#afafaf',
          200: '#42424570',
        },
        zinc: '#101010',
        base: {
          DEFAULT: '#222831',
          2: '#31363F',
        },
        base_light:{
          DEFAULT: '#76ABAE',
          2: '#EEEEEE'
        }
      },
      boxShadow: {
        section: '0 0px 240px 350px',
        section_lg: '0 0px 140px 250px',
      },
    },
  },
  plugins: [],
}

