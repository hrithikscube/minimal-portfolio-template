/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'interRegular': ['Inter Regular'],
        'interMedium': ['Inter Medium'],
        'interSemiBold': ['Inter SemiBold'],
        'interBold': ['Inter Bold'],
      }
    },
  },
  plugins: [],
}