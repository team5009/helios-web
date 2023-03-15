/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'helios-logo': "url('/images/helioslogo.png')",
        'full-helios': "url('/images/fullscreen-helios.png')",
        'year-2014': "url('/images/years/2014.png')",
        'year-2015': "url('/images/years/2015.png')",
        'year-2016': "url('/images/years/2016.png')",
        'year-2017': "url('/images/years/2017.png')",
        'year-2018': "url('/images/years/2018.png')",
        'year-2019': "url('/images/years/2019.png')",
        'year-2020': "url('/images/years/2020.png')",
        'year-2022': "url('/images/years/2022.png')",
        'year-2023': "url('/images/years/2023.png')",
      },
      animation: {
        
      },
      keyframes: {
        'animateWave': {
          '0%': {'background-position-x': '1000px'},
          '100%': {'background-position-x': '0px'}
        },
        'animateWave2': {
          '0%': {'background-position-x': '0px'},
          '100%': {'background-position-x': '1000px'}
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}
