/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F1B3D',
          soft: '#1E2B52',
        },
        green: {
          DEFAULT: '#22C55E',
          hover: '#16A34A',
          tint: '#DCFCE7',
        },
        background: '#F8FAFC',
        surface: '#FFFFFF',
        border: '#E2E8F0',
        muted: '#64748B',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(15, 27, 61, 0.04), 0 8px 24px rgba(15, 27, 61, 0.06)',
      },
    },
  },
  plugins: [],
}
