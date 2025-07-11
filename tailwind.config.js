/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'progress': 'progress 3s ease-in-out forwards',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        progress: {
          '0%': { width: '0%' },
          '25%': { width: '40%' },
          '50%': { width: '60%' },
          '75%': { width: '80%' },
          '100%': { width: '100%' },
        },
        'fly-through': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(100vw + 100px))' },
        }
      },
    },
  },
  plugins: [],
};
