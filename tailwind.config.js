/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'logo-movement': 'movingSlow 10s infinite linear',
      },
      keyframes: {
        movingSlow: {
          '0%, 100%': { transform: 'rotate(-20deg) translateY(-10%)' },
          '50%': { transform: 'rotate(20deg) translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}