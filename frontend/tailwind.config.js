/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'main': '#f59e0b',
        'main-light': '#fde68a',
        'main-dark': '#d97706',
        'support': '#ff4500',
        'dark': '#111',
        'light': '#fffdf2',
        'grey-1': '#333',
        'grey-2': '#999',
        'grey-3': '#ccc',
        'grey-4': '#eee',
        'grey-5': '#fafafa',
      },
    },
  },
  plugins: [],
}

