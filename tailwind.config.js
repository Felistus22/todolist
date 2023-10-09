/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.bg-light-gradient': {
          'background-image': 'linear-gradient(90deg, #6b705c, #a8d5e2)', // Replace with your custom gradient
        },
        '.bg-dark-gradient': {
          'background-image': 'linear-gradient(145deg, #6b705c, #be8014)', // Replace with your custom gradient
        },
      };
      addUtilities(newUtilities, ['background-image']);
    },
  ],
}

