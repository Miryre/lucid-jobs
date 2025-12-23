/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-ocean': '#003D5B',
        'clear-water': '#00A8E8',
        'shallow-lagoon': '#5BC0EB',
        'crystal': '#E0F4FF',
        'sea-glass': '#7DCEA0',
        'coral-warning': '#FF6B6B',
        'golden-sand': '#FFD97D',
        'midnight-water': '#0A1929',
        'deep-gray': '#1E2A3A',
        'slate': '#3D5467',
        'mist': '#B8C5D6',
        'foam': '#E8EFF5',
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}