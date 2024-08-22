/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

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
          DEFAULT: '#0D0D0D',
          2: '#31363F',
        },
        base_light:{
          DEFAULT: '#76ABAE',
          2: '#EEEEEE'
        }
      },
      boxShadow: {
        section: '0 0px 180px 220px',
        section_lg: '0 0px 120px 170px',
        tech_inner: 'inset 0 0 140px 250px rgb(0 0 0 / 0.5)',
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}