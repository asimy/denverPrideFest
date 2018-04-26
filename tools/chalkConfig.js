// Centralized configuration for chalk, which is used to add color to console.log statements.
import chalk from 'chalk'; // eslint-disable-line import/no-extraneous-dependencies

export const chalkError = chalk.red;
export const chalkSuccess = chalk.green;
export const chalkWarning = chalk.yellow;
export const chalkProcessing = chalk.blue;
