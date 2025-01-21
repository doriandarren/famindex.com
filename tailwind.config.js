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
        primary: {
          DEFAULT: '#6834a6', // Color sólido principal
          light: '#8052c4', // Un tono más claro
          lighter: '#9971e3', // Aún más claro
          dark: '#522980', // Un tono más oscuro
          darker: '#3b1d5c', // Aún más oscuro
          alpha10: 'rgba(104, 52, 166, 0.1)', // Transparencia 10%
          alpha30: 'rgba(104, 52, 166, 0.3)', // Transparencia 30%
          alpha50: 'rgba(104, 52, 166, 0.5)', // Transparencia 50%
          alpha70: 'rgba(104, 52, 166, 0.7)', // Transparencia 70%
          alpha90: 'rgba(104, 52, 166, 0.9)', // Transparencia 90%
        },
        secondary: {
          DEFAULT: '#78c800',
          light: '#a4e542',
          dark: '#569300',
          alpha10: 'rgba(120, 200, 0, 0.1)',
          alpha30: 'rgba(120, 200, 0, 0.3)',
          alpha50: 'rgba(120, 200, 0, 0.5)',
          alpha70: 'rgba(120, 200, 0, 0.7)',
          alpha90: 'rgba(120, 200, 0, 0.9)',
        },
        accent: {
          DEFAULT: '#ff8c42',
          light: '#ffa866',
          dark: '#cc702f',
          alpha10: 'rgba(255, 140, 66, 0.1)',
          alpha30: 'rgba(255, 140, 66, 0.3)',
          alpha50: 'rgba(255, 140, 66, 0.5)',
          alpha70: 'rgba(255, 140, 66, 0.7)',
          alpha90: 'rgba(255, 140, 66, 0.9)',
        },
        neutral: {
          DEFAULT: '#eaeaea',
          light: '#f7f7f7',
          dark: '#bfbfbf',
        },
        error: '#f44336',
        success: '#4caf50',
        navbar: '#222831',
        background: '#f8fafc',
      },
    },
  },
  plugins: [],
}
