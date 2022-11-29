/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#015604',
        secondary: '#818181',
      },
      height: {
        header: '88px',
        '40px': '40px',
      },
      width: {
        main: '768px',
        '103px': '103px',
        '477px': '477px',
        '372px': '372px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-font-inter'),
  ],
};
