// This file configures a web server for testing the production build
// on your local machine.

import browserSync from 'browser-sync'; // eslint-disable-line import/no-extraneous-dependencies
import historyApiFallback from 'connect-history-api-fallback'; // eslint-disable-line import/no-extraneous-dependencies
import { chalkProcessing } from './chalkConfig';

/* eslint-disable no-console */

console.log(chalkProcessing('Opening production build...'));

// Run Browsersync
browserSync({
  port: 4000,
  ui: {
    port: 4001,
  },
  server: {
    baseDir: 'dist',
  },

  files: [
    'src/*.html',
  ],

  middleware: [historyApiFallback()],
});
