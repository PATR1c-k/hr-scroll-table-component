/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        calendar: "200px repeat(32, minmax(120px, 1fr))",
      },
    },
  },
  plugins: [],
};
