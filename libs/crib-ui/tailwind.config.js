const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      "dark"
    ],
  },
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
  safelist: [
    'btn-primary',
    'btn-secondary',
    'btn-neutral',
    'btn-accent',
    'btn-info',
    'btn-success',
    'btn-warning',
    'btn-error',
    'btn-disabled',
  ]

};
