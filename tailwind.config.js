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
        'base-gray': '#c1c1c1',
        'dark-gray': '#8c8c8c',
        'listen-purple': '#7f6088',
        'read-pink': '#ec8ed1',
        'watch-orange': '#fd8248',
        'game-green': '#55ab59',
        'write-yellow': '#decf02',
        'speak-blue': '#00879d',
        'gradient-1': '#cf614a',
        'gradient-2': '#f3d563',
      },
    },
  },
  safelist: [
    'border-4',
    'border-8',
    'border-12',
    'border-[12px]',
    'border-[16px]',

    'border-listen-purple',
    'border-read-pink',
    'border-watch-orange',
    'border-game-green',
    'border-speak-blue',
    'border-gradient-1',
    'border-gradient-2',

    'bg-listen-purple',
    'bg-read-pink',
    'bg-watch-orange',
    'bg-game-green',
    'bg-speak-blue',
    'bg-gradient-1',
    'bg-gradient-2',
  ],
  plugins: [],
};
