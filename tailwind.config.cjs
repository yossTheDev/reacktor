/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}', 'node_modules/daisyui/dist/**/*.js', 'node_modules/react-daisyui/dist/**/*.js'],

  // enable dark mode via class strategy
  // darkMode: 'class',

  plugins: [require('daisyui'), require('@tailwindcss/typography')],

  safelist: [
    {
      pattern: /./, // the "." means "everything"
      variants: ['hover:'] // you can add your variants here
    }],

  // daisyUI config (optional)
  daisyui: {
    // themes: true,
    themes: [
      {
        light: {
          primary: '#0ea5e9',

          secondary: '#263F40',

          accent: '#d97706',

          neutral: '#e5e7eb',

          'base-100': '#e5e7eb',
          'base-200': '#05070B',
          info: '#22d3ee',

          success: '#9CB686',

          warning: '#FFD261',

          error: '#FC9783'

        },

        dark: {
          primary: '#f59e0b',

          secondary: '#5eead4',

          accent: '#d97706',

          neutral: '#0A0D14',

          'base-100': '#06080C',

          'base-200': '#05070B',

          info: '#22d3ee',

          success: '#9CB686',

          warning: '#FFD261',

          error: '#FC9783'
        }
      }

    ],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark'
  }
}
