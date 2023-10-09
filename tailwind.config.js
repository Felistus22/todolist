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
          'background-image': 'linear-gradient(90deg, #f9a620, #a8d5e2)', // Replace with your custom gradient
        },
      };
      addUtilities(newUtilities, ['background-image']);
    },
  ],
}

