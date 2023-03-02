/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        DarkBlue: 'hsl(233, 26%, 24%)',
        LimeGreen: 'hsl(136, 65%, 51%)',
        BrightCyan: 'hsl(192, 70%, 51%)',
        GrayishBlue: 'hsl(233, 8%, 62%)',
        LightGrayishBlue: 'hsl(220, 16%, 96%)',
        VeryLightGray: 'hsl(0, 0%, 98%)',
        White: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
}
