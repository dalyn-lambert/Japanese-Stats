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
        background: '#6170b3',
        'windows-gray': '#c1c1c1',
        'gradient-1': '#cf614a',
        'gradient-2': '#f3d563',
      },
    },
  },
  plugins: [],
};
