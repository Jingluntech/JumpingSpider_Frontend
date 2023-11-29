/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '768px',
        lg: '992px',
        xl: '1440px',
      },
      colors: {
        'primary-blue': {
          500: '#205EA4',
          400: '#4E7BB3',
          300: '#7B9CC7',
          200: '#A7BCD9',
          100: '#D2DDEC',
        },
        'primary-yellow': {
          500: '#DDA923',
          400: '#DBB766',
          300: '#E3CBB9',
          200: '#EBDAB0',
          100: '#F4EAD5',
        },
        'secondary-red': {
          500: '#CB3023',
          400: '#E14537',
          300: '#F19C96',
          200: '#FAE1DF',
          100: '#FBF0EF',
        },
        'secondary-yellow': {
          500: '#CF6613',
          400: '#EB8A18',
          300: '#F2A92B',
          200: '#F5D886',
          100: '#FAEBC3',
        },
        'secondary-green': {
          500: '#0E9053',
          400: '#24AC67',
          300: '#53B77A',
          200: '#A8D5B5',
          100: '#CDE6D4',
          text: '#097646',
        },
        grey: {
          900: '#0E1727',
          800: '#1B2839',
          700: '#323F52',
          600: '#465465',
          500: '#656E80',
          400: '#949EAE',
          300: '#CED2DA',
          200: '#E8E9ED',
          100: '#EFF2F5',
          50: '#F7F9FA',
          25: '#FBFBFC',
        },
      },
      fontFamily: {
        sans: ['var(--font-notoSans)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      height: {
        'screen-minus': 'calc(100vh - 128px)',
      },
    },
  },
  plugins: [],
};
