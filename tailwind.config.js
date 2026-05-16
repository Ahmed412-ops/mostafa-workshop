/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        wood: {
          50: '#faf6f1',
          100: '#f0e6d8',
          200: '#e0cbb3',
          300: '#cba886',
          400: '#b3845c',
          500: '#9c6b45',
          600: '#85563a',
          700: '#6d4532',
          800: '#5a3a2d',
          900: '#4c3229',
          950: '#2a1a14',
        },
        cream: {
          50: '#fdfcfa',
          100: '#f7f3eb',
          200: '#efe8dc',
        },
        ink: {
          DEFAULT: '#1c1917',
          muted: '#44403c',
          soft: '#57534e',
        },
      },
      fontFamily: {
        sans: ['Tajawal', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px -4px rgba(42, 26, 20, 0.12)',
        lift: '0 12px 40px -12px rgba(42, 26, 20, 0.18)',
      },
    },
  },
  plugins: [],
};
