module.exports = {
  purge: [
      './docs/*.html',
      './assets/**/*.js',
      './assets/**/*.css',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            primary: '#9CCEAD',
            'primary-75': 'rgba(156, 206, 173, .8)',
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
        },
        minWidth: {
            64: '16rem'
        }
    },
  },
  variants: {
    extend: {
        display: ['responsive', 'hover', 'group-hover'],
        height: ['responsive', 'hover', 'group-hover'],
        objectFit: ['responsive', 'hover', 'group-hover'],
        position: ['responsive', 'hover', 'group-hover'],
        scale: ['responsive', 'hover', 'focus', 'group-hover'],
        transform: ['responsive', 'hover', 'group-hover'],
        width: ['responsive', 'hover', 'group-hover'],
    },
  },
  plugins: [],
}
