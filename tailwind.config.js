export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af', // blue-600
        secondary: '#f2db43', // yellow-400
      },
      spacing: {
        safe: 'max(1rem, env(safe-area-inset-left))',
      },
    },
  },
  plugins: [],
}