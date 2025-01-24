/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",
     "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
  theme: {
    extend: {
      placeholder: ['hover', 'focus'],
      colors: {
        primary: {"50":"#fef2f2","100":"#fee2e2","200":"#fecaca","300":"#fca5a5","400":"#f87171","500":"#ef4444","600":"#dc2626","700":"#b91c1c","800":"#991b1b","900":"#7f1d1d","950":"#450a0a"}
      }
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      playfairdisplay: ['Playfair Display', 'serif'],
      bitter: ['Bitter', 'serif'],
      cormorantgaramond: ['Cormorant Garamond', 'serif'],
      opensans: ['Open Sans', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      karstar: ['karstar', 'sans-serif'],
    }
  }
}
