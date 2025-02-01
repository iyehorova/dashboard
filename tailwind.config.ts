import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [ ],
  theme: {
    extend: {
      colors: {
        'black-main': '#222222',
        yellow: '#F4C93F',
        'dark-grey': '#363F4F',
        'light-grey': '#E3E8F3',
        grey: '#9A9FA7',
      },
      fontSize: {
        main: '15px',
        h3: '20px',
        logo: '26px',
        'input-title': '13px',
        'btn-text': '17px',
        additional: '13px',
      },
      fontFamily: {
        'inherit': 'inherit',
      }
    },
  },
} satisfies Config;
