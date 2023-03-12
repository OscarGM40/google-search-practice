/** @type {import('tailwindcss').Config} */
module.exports = {
  // fijate que Tailwind necesita las rutas para poder escanear estos directorios e interpretar
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
