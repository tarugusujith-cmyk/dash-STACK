/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#4880FF',
          dark: '#3B6FE0',
          deep: '#2E5BFF',
          soft: '#EDF2FF',
        },
        ink: {
          DEFAULT: '#202224',
          muted: '#606A72',
          light: '#9CA3AF',
        },
        surface: {
          page: '#F5F6FA',
          card: '#FFFFFF',
          line: '#E0E0E0',
        },
        night: {
          page: '#1B2431',
          card: '#273142',
          line: '#313D4F',
          soft: '#323D4E',
        },
        status: {
          completed: '#00B69B',
          processing: '#6226EF',
          rejected: '#EF3826',
          hold: '#FFA756',
          transit: '#BA29FF',
        },
      },
      boxShadow: {
        card: '0px 4px 20px rgba(238, 238, 238, 0.5)',
        pop: '0px 6px 24px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        card: '14px',
      },
    },
  },
  plugins: [],
}
