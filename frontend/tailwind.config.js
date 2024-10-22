/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#505D56",
        customWhite: "#F2F7FB",
        customGrey: "#979797",
      },
    },
  },
  plugins: [],
};
