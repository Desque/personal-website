/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  mode: 'jit',
  darkMode: 'class',
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
      'sm': '0.8svw',
      'base': '1svw',
      'xl': '1.5svw',
      '2xl': '2svw',
      '3xl': '2.5svw',
      '4xl': '3svw',
      '5xl': '3.5svw',
      },
    colors: {
      'primary':'#333C42ed',
      'secondary':'#eaebec',
      'tertiary':'#966DE8',
      'dark-primary':'#1E223B',
      'dark-secondary':'#A4A9CE',
      'dark-tertiary':'#5E25CD',
      'bio':'#E18D59',
      'experiences':'#e0547f',
      'studies':'#d33932',
      'hardskills':'#55bbee',
      'projects':'#80c969',
      'white':'#ffffffbb',
      'danger':'#d33932'

    },
    extend: {
      boxShadow: {
        '3xl': '0px 3px 8px rgba(0, 0, 0, 0.24)',
        '4xl': '0px 5px 15px rgba(0, 0, 0, 0.35)',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-9deg)' },
          '50%': { transform: 'rotate(9deg)' },
        }
      },
      animation: {
        'wiggle': 'wiggle 2.5s linear infinite',
      },
    },
    variants: {
      scrollbar: ['rounded'],
      extend: {
        visibility: ["group-hover"],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
