/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./src/**/*.{html,js,jsx}" 
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Nohemi', 'sans-serif'],
        custom2: ['Spline', 'sans-serif'] // Fallback font
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

