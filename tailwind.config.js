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
        background: '#00787f',
        'base-gray': '#B7B6C1',
        'mid-gray': '#9291A1',
        'dark-gray': '#5A5353',
        'listen-purple': '#52489C',
        'read-pink': '#CE6D8B',
        'watch-orange': '#F19A3E',
        'game-green': '#758E4F',
        'write-yellow': '#decf02',
        'speak-blue': '#247BA0',
        'gradient-1': '#EB6424',
        'gradient-2': '#FA9500',
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
