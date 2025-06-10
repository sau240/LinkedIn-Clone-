/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // <-- this is where Tailwind looks for classes in your project
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "1/10": "10%",
        "9/10": "90%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
