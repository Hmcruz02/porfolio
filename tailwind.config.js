/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blackBean': '#160C28',
        'darkPurple': '#280004',
        'darkGray': "#1E1E1E"
      },
    },
  },
  plugins: [],
}
