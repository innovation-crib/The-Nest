const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        thecrib_dark: {
          primary: '#2563eb',

          secondary: '#a855f7',

          accent: '#22c55e',

          neutral: '#2a323c',

          'base-100': '#1d232a',

          info: '#3abff8',

          success: '#36d399',

          warning: '#fbbd23',

          error: '#f87272',
        },

        thecrib_light: {
          primary: '#2563eb',

          secondary: '#a855f7',

          accent: '#22c55e',

          neutral: '#ffffff',

          'base-100': '#f9fafb',

          info: '#3abff8',

          success: '#36d399',

          warning: '#fbbd23',

          error: '#f87272',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
