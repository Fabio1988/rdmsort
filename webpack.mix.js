let mix = require('laravel-mix');

mix.js('assets/js/app.js', 'public/js/app.js')
    .postCss('assets/css/app.css', 'public/css/app.css');