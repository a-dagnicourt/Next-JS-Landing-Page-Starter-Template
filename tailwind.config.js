const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      title: ['Spectral SC', 'system-ui', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          100: '#E6F6FE',
          200: '#C0EAFC',
          300: '#9ADDFB',
          400: '#4FC3F7',
          500: '#03A9F4',
          600: '#0398DC',
          700: '#026592',
          800: '#014C6E',
          900: '#013349',
        },
        gray: {
          DEFAULT: '#737373',
          50: '#CFCFCF',
          100: '#C4C4C4',
          200: '#B0B0B0',
          300: '#9C9C9C',
          400: '#878787',
          500: '#737373',
          600: '#595959',
          700: '#404040',
          800: '#262626',
          900: '#0D0D0D',
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/images/mint_preview-2.jpg')",
      },
      animation: {
        'pulse-slow': 'pulse 9s linear infinite',
        'bounce-slow': 'bounce 2s linear infinite',
      },
    },
  },
  variants: {},
  plugins: [],
};
