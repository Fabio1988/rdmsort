module.exports = {
  purge: [
      './public/*.html',
      './assets/**/*.js',
      './assets/**/*.css',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            primary: '#9CCEAD',
        },
        fontFamily: {
            roboto: [
                'Roboto',
                'ui-sans-serif',
                'system-ui',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                '"Noto Sans"',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"',
            ]
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
