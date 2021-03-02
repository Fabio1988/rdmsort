let mix = require('laravel-mix');

mix.js('assets/js/app.js', 'docs/js/app.js')
    .postCss('assets/css/app.css', 'docs/css/app.css');