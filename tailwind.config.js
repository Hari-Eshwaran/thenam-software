/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'rich-brown': '#5C4328',
        'warm-orange': '#DD8142',
        'golden-yellow': '#F4C842',
        'cream': '#FDF6EC',
      },
    },
  },
  plugins: [],
};
