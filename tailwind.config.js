/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Hero': ['linear-gradient(to bottom, #8898d3 10%, #ffffff 100%)'],
        'Nav': ['linear-gradient(-225deg, #e3fdf595 0%, #ffe6fa98 100%)'],
        'Track': ['linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)'],
        'Bar': ['linear-gradient(to top, #30cfd0 0%, #330867 100%)'],
      }
    },
  },
  plugins: [
  ],
})