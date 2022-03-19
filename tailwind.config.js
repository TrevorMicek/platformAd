module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      
    extend: {
        colors: {
          'default': 'rgb(99 102 241)',
          'bg': 'rgb(10 20 30)',
          'orange': 'rgb(234 88 12)',
          'blue': 'rgb(15 118 110)'
        },
        backgroundImage: {
            'eclipse': 'url(../images/eclipseResize.jpg)'
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
       require('@tailwindcss/aspect-ratio'),
       require('@tailwindcss/typography'),
       require('@tailwindcss/forms'),
],
}
