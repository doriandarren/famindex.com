/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Asegúrate de incluir las extensiones que uses
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Lato', 'sans-serif'], // Usar Lato como fuente sans
      },
      colors: {
        primary: '#4f9da6',
        'primary-dark': '#35757d',
        'primary-light': '#7dbdc8',
        secondary: '#78c800',
        'secondary-dark': '#569300',
        'secondary-light': '#a4e542',
        accent: '#ff8c42',
        'accent-dark': '#cc702f',
        'accent-light': '#ffa866',
        neutral: '#eaeaea',
        'neutral-dark': '#bfbfbf',
        'neutral-light': '#f7f7f7',
        navbar: '#222831',
        background: '#f8fafc',
        error: '#f44336',
        success: '#4caf50',
      },
    },
  },
  plugins: [],
}
