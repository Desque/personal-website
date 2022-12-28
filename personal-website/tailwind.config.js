/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      'sans': ['Raleway', 'sans-serif'],
      'serif': ['Exo', 'sans-serif'],
    },
    fontSize: {
      'sm': '0.8rem',
      'base': '1rem',
      'xl': '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      },
    colors: {
      'primary':'#333C42',
      'secondary':'#EEEEEE',
      'tertiary':'#8c52ff',
      'dark-primary':'#353745',
      'dark-secondary':'#A4A9CE',
      'dark-tertiary':'#00C6C1',
      'imagebg':'#FFB352',
      'white':'#ffffff',
      'purple':'#8c52ff',
      'blue':'#008CFF',
      'info':'#008CFF',
      'success':'#02CE4D',
      'warning':'#F9F871',
      'fail':'#F97171'
    },
    extend: {
      boxShadow: {
        '3xl': '0px 3px 8px rgba(0, 0, 0, 0.24)',
        '4xl': '0px 5px 15px rgba(0, 0, 0, 0.35)',
      }
    },
  },
  plugins: [],
}
