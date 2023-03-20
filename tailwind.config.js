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
      fontSize: {
        '2xs': '.625rem',
      },
      backgroundImage: {
        'helios-logo': "url('/images/helioslogo.png')",
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
