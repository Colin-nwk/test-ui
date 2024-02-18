/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        iris: {
          100: "#5D5FEF",
          80: "#7879F1",
          60: "#FF99F1",
        },
        cyellow: {
          100: "#FFEE99",
        },
        cdark: {
          100: "#111014",
        },
      },
    },
  },
  plugins: [],
};
