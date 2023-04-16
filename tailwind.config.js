/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        default: '#ffffff',
        'default-dark': '#000000',
        primary: '#f87171',
        secondary: '#ffffff66',
        'primary-hl': '#ef4444',
        'secondary-hl': '#dddddd66',
      },
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
      animation: {
        shine: 'shine 0.5s linear',
        float: 'float 2.5s infinite',
        'blur-in': 'blur-in 0.5s linear forwards 0.3s',
        'swing-in': 'swing-in 0.5s ease-out forwards 0.5s',
        'slide-in-bottom': 'slide-in-bottom 1.5s both',
        'slide-in-left': 'slide-in-left 1.5s both',
        'slide-in-right': 'slide-in-right 1.5s both',
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
        'blur-in': {
          '0%': { filter: 'blur(5px)', opacity: '0' },
          '100%': { filter: 'blur(0)', opacity: '1' },
        },
        'swing-in': {
          '0%': {
            transform: 'rotateX(-70deg)',
            'transform-origin': 'bottom',
            opacity: '0',
          },
          '100%': {
            transform: 'rotateX(0)',
            'transform-origin': 'bottom',
            opacity: '1',
          },
        },
        'slide-in-bottom': {
          '0%': { transform: 'translateY(150px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-150px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(150px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      screens: {
        'has-hover': { raw: '(hover: hover)' },
      },
    },
  },
  plugins: [],
};
