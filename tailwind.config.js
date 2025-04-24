module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Activation du mode sombre via classe
  theme: {
    extend: {
      colors: {
        skin: {
          base: 'var(--text-color)',
          fill: 'var(--bg-color)',
        }
      }
    }
  },
  plugins: [],
}