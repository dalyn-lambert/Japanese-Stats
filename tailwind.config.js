/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#66679f',
        'base-gray': '#B7B6C1',
        'mid-gray': '#9291A1',
        'dark-gray': '#5A5353',
        'listen-purple': '#52489C',
        'read-pink': '#CE6D8B',
        'watch-orange': '#FA8334',
        'game-green': '#018E42',
        'speak-blue': '#247BA0',
        'gradient-1': '#3EB488',
        'gradient-2': '#AAF0D0',
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

    'fill-listen-purple',
    'fill-read-pink',
    'fill-watch-orange',
    'fill-game-green',
    'fill-speak-blue',
    'fill-gradient-1',
    'fill-gradient-2',
  ],
  plugins: [],
};
