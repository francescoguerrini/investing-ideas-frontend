/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
const tailwindConfig = {
  content: [
    "./pages/**/*.{js,mjs,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,mjs,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,mjs,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Font di default per tutto il sito
        poppins: ["Poppins", "sans-serif"], // Per titoli o sezioni specifiche
      },
      colors: {},
    },
  },
  plugins: [nextui()],
};

export default tailwindConfig;
