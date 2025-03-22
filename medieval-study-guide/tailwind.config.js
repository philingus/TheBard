/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#f4e4bc',
        ink: '#2c1810',
        accent: '#8b4513',
      },
      fontFamily: {
        medieval: ['MedievalSharp', 'cursive'],
      },
      boxShadow: {
        'glow': '0 0 10px rgba(255, 223, 148, 0.5)',
        'magic': '0 0 15px rgba(147, 51, 234, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}