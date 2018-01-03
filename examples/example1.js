const chalk = require('chalk');
const hurn = require('../lib/hurn');

const log = console.log;

hurn().then(response => {
  log(chalk.green('Default response'));
  log(response);
});

hurn('baby').then(response => {
  log(chalk.green('response containing "baby"'));
  log(response);
});

hurn('pillen', 1000, true).then(response => {
  log(chalk.green('response containing "pillen" and 1000 words'));
  log(response);
});
