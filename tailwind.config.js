/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dv: "#0A0B20",
        dvgray: "#13142B",
        para: "#6F7983",
        dvblue: "#0A0B20",
        lgreen: "#09A04F"
      },
      fontFamily: {
        Plus: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
