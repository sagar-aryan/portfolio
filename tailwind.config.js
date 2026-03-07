/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'matrix-green': '#00FF41',
        'matrix-green-dark': '#008F11',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'glow-green': '0 0 15px rgba(0, 255, 65, 0.5)',
        'glow-green-strong': '0 0 25px rgba(0, 255, 65, 0.8)',
      },
      backgroundImage: {
        'circuit-grid': 'linear-gradient(rgba(0, 255, 65, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'circuit-grid-size': '30px 30px',
      }
    },
  },
  plugins: [],
}
