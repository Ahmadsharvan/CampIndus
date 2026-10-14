/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0B2B52',
        deepNavy: '#071D3A',
        footerNavy: '#0A1D3D',
        electric: '#1677FF',
        brightBlue: '#2583FF',
        sky: '#EAF3FF',
        paleBlue: '#F4F8FF',
        textDark: '#102B4E',
        textMuted: '#526781',
        borderSoft: '#DFE8F4',
        lavender: '#F3EEFF',
        mint: '#EAF7F2',
        cream: '#FFF8E9',
      },
      boxShadow: {
        soft: '0 18px 40px rgba(11, 43, 82, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
