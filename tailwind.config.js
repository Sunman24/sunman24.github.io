/** @type {import('tailwindcss').Config} */
export default {
  content: [
    '*.html'
  ],
  theme: {

    extend: {
      fontFamily: {
        'primary': ['Poppins']
      }
    },

    colors: {
      'red': 'hsl(0, 78%, 62%)',
      'cyan': 'hsl(180, 62%, 55%)',
      'orange': 'hsl(34, 97%, 64%)',
      'blue': 'hsl(212, 86%, 64%)',
      'white': 'hsl(0, 0%, 100%)',
      'very-dark-blue': 'hsl(234, 12%, 34%)',
      'grayish-blue': 'hsl(229, 6%, 66%)',
      'very-light-gray': 'hsl(0, 0%, 98%)'
    },



  },
  plugins: [],
}

