/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,cjs}"],
  theme: {
    extend: {
      colors: {
        'anex-jet': '#373737',
        'red-imperial': '#F71735',
        'rosy-brown': '#B09398',
        'tea-green': '#C7DFC5',
        'blue-columbia': '#C1DBE3',
        'dark-orange': '#f76b0a',
        'slate-gray': '#333333',
        'jet-dark': '#3D3C3C',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

