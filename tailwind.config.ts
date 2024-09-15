import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Class-based dark mode
  theme: {
    extend: {
      colors: {
        darkBg: "#1a1a1a", // Tilpasset bakgrunn for mørk modus
        lightBg: "#f8f8f8", // Tilpasset bakgrunn for lys modus (valgfritt)
      },
    },
  },
  plugins: [],
};

export default config;
