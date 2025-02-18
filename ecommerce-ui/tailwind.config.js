/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'default-green': '#81C408',
        'default-gold':'#FFB524', 
        'footer-bg':'#45595b',
        'theme-gray':'#f4f6f8',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'], 
      },
      fontSize: {
        '2.5xl': '2.5rem', // Add a custom font size class 'text-2.5xl'
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(rgba(255, 181, 36, 0.7), rgba(255, 181, 36, 0.7))',
        'breadcumb-background' :'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(images/breadcumb.jpg)'
      },
      boxShadow: {
        'custom-shadow': '0px 0px 55px rgba(0, 0, 0, 0.4)', 
        'form-shadow' :'0 0 0 .25rem rgba(129,196,8,.25)',
      },
      scale: {
        '120': '1.2', // Adding scale 1.2
      },
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1280px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1024px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '820px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}

