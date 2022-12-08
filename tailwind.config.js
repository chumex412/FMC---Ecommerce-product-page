/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      screens: {
        sm: '600px',
        // => @media (min-width: 640px) { ... }
        md: '720px',
        // => @media (min-width: 768px) { ... }
        lg: '960px',
        // => @media (min-width: 1024px) { ... }
        xl: '1140px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1360px'
        // => @media (min-width: 1440px) { ... }
      },
      colors: {
        primary: 'rgb(var(--primary-color) / 1)',
        "light-primary": 'rgb(var(--pale-primary) / 1)',
        neutral: 'rgb(var(--neutral-color) / 1)',
        gray: {
          200: 'rgb(var(--neutral-gray) / 1)',
          300: 'rgb(var(--neutral-dark-gray) / 1)',
        }
      },
      fontSize: {
        base: 'var(--main-text)',
        'base-md': 'var(--intro-text)',
        lg: 'var(--h4)',
        xl: 'var(--h3)',
        '2xl': 'var(--h2)',
        '3xl': 'var(--h1)'
      },
      fontFamily: {
        "kumbh-sans": ["Kumbh Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}
