/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#feffff",
        primary_text: "#444344",
        grey: "#e1e2e2",
        blue: "#003364",
        soft_blue: "#26b3f2",
        green: "#00d591",
      },
    },
  },
  plugins: [],
};

