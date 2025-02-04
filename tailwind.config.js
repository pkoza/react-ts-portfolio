/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBorderColor: 'var(--custom-border-color, #D1D5DB)',
        customBorderFocusColor: 'var(--custom-border-focus-color, #3B82F6)',
        customTagColor: 'var(--custom-tag-color, #DBEAFE)',
        primary: '#0052cc',
        secondary: '#00b8d9'
      },
    },
  },
  plugins: [],
}

