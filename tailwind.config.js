/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      'xs': ['0.75rem', {
        lineHeight: '16px',
        fontWeight: '400',
      }],
      'sm': ['0.875rem', {
        lineHeight: '22px',
        fontWeight: '400'
      }],
      'base': ['1rem', {
        lineHeight: '24px',
        fontWeight: '500'
      }],
      'lg': ['1.125rem', {
        lineHeight: '24px',
        fontWeight: '600'
      }],
      'xl': ['1.5rem', {
        lineHeight: '32px',
        fontWeight: '600'
      }],
      '2xl': ['3rem', {
        lineHeight: '58px',
        fontWeight: '700'
      }]
    },
    extend: {
      fontFamily: {
        sans: ['Sohne', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'ms-orange': '#FF5403',
        'ms-black': '#131316',
        'ms-gray-400': '#31373D',
        'ms-gray-500': '#4D5760',
      },
      boxShadow: {
        'xl': "0px 10px 24px rgba(55, 62, 64, 0.15)"
      }
    },
  },
  plugins: [],
}