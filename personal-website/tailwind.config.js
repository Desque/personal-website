/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  mode: 'jit',
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
      'primary':'#333C42ed',
      'secondary':'#eaebec',
      'tertiary':'#8c52ff',
      'dark-primary':'#353745',
      'dark-secondary':'#A4A9CE',
      'dark-tertiary':'#00C6C1',
      'bio':'#E18D59',
      'hardskills':'#202f5a',
      'experiences':'#c3012f',
      'studies':'#019EE0',
      'projects':'#51B455',

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
      extend: {
        visibility: ["group-hover"],
      },
    },
  },
  plugins: [],
}
