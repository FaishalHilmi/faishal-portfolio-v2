/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        figtree: ["Figtree", "sans-serif"],
      },
      colors: {
        base: "#F3F4F4",
        primary: {
          DEFAULT: "#2F2289", // warna utama
          light: "#7362E2",
          dark: "#272343",
        },
        secondary: {
          DEFAULT: "#AD95EB",
          soft: "#5A66E1",
        },
        accent: {
          DEFAULT: "#7FC5C5",
          success: "#ADFDA2",
          info: "#83B7FF",
        },
      },
    },
  },
  plugins: [],
};
