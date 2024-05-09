/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#080808",
        white: "#dbdbdb",
        primary: "#10E710",
        secondary: "#222",
        details: "#444",
        emphasis: "#1c1c1c",
        primaryDarken: "#0cac0c",
      },
      fontFamily: {
        title: "Hind, sans-serif",
        def: "Montserrat, sans-serif",
      },
    },
  },
  plugins: [],
};
