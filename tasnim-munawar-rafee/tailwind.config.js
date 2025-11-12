/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0ea5a4',
        accent: '#6366f1'
      },
      keyframes: {
        slideInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        slideInRight: {
          '0%': { opacity: 0, transform: 'translateX(30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        pulseSlow: {
          '0%,100%': { opacity: 1 },
          '50%': { opacity: 0.7 }
        }
      },
      animation: {
        slideInLeft: 'slideInLeft 700ms ease-out both',
        slideInRight: 'slideInRight 700ms ease-out both',
        pulseSlow: 'pulseSlow 2.5s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
