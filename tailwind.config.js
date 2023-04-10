/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
        serif: ['Times New Roman', 'serif'],
        mono: ['Courier New', 'monospace'],
      },
      backgroundImage: {
        bubble:
          'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 10%)',
        shine: 'linear-gradient(90deg, transparent, white, transparent)',
      },
      boxShadow: {
        bubble:
          '0 10px 20px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 0.7)',
      },
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(150px, 1fr))',
      },
      animation: {
        shine: 'shine 0.5s linear',
        float: 'float 2.5s infinite',
        'slidein-top': 'slidetop 1.5s both',
        'slidein-bottom': 'slidebottom 1.5s both',
        'slidein-left': 'slideleft 1.5s both',
        'slidein-right': 'slideright 1.5s both',
      },
      keyframes: {
        shine: {
          '0%': { left: '-200%' },
          '100%': { left: '200%' },
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        rise: {
          '0%': { bottom: '-100px', transform: 'translateX(0)' },
          '33%': { transform: 'translate(100px)' },
          '66%': { transform: 'translate(-100px)' },
          '100%': { bottom: '100%', transform: 'translateX(100px)' },
        },
        slidetop: {
          '0%': { transform: 'translateY(-150px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slidebottom: {
          '0%': { transform: 'translateY(150px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideleft: {
          '0%': { transform: 'translateX(-150px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideright: {
          '0%': { transform: 'translateX(150px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
