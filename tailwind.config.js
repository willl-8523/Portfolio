/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '10px': '0.625rem',
        '24px': '1.5em',
        '32px': '2em',
      },
      colors: {
        menuBg: 'rgba(31, 31, 31, 1)',
        'menuBg-o': 'rgba(31, 31, 31, .9)',
        'red-color': '#e17b77',
        'davy-grey': '#555',
        'banner-color': 'rgba(2, 0, 13, 0.2)',
        'main-color': '#f6f5f7',
        'very-dark-gray': '#333',
        link: '#D9BD9C',
        html5: '#FF8000',
        css3: '#214CE5',
        tailwing: '#38BDF8',
        bootstrap: '#8812FB',
        sass: '#CF649A',
        js: '#FFEA00',
        php: '#787CB4',
        symfony: '#000000',
        trello: '#0057D3',
        git: '#F44D27',
        react: '#31ABEE',
      },
      letterSpacing: {
        '2-px': '.125em',
      },
      backgroundImage: {
        'banner-img': "url('/src/assets/banner_bg.jpg')",
      },
      maxWidth: {
        25: '25%',
        45: '45%',
        50: '50%',
        60: '60%',
        70: '70%',
        75: '75%',
      },
      spacing: {
        48: '48%',
        97: '25rem',
      },
      borderWidth: {
        '1px': '1px',
      },
      boxShadow: {
        'shadow-card': '0 0 5px rgba(0,0,0,.3)',
        'shadow-burger': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        beating: 'beating 1s ease-in-out infinite',
      },
      keyframes: {
        beating: {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(1.08)' },
        },
      },
      flex: {
        'flex-xs-12': '0 0 auto',
      },
    },
    screens: {
      phone: '320px',
    },
  },
  plugins: [],
};
