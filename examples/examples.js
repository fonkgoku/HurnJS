const chalk = require('chalk');
const hurn = require('../lib/hurn');

hurn().then(response => {
  console.log(chalk.green('Default response'));
  console.log(response);
});

hurn('baby').then(response => {
  console.log(chalk.green('response containing "baby"'));
  console.log(response);
});

hurn('pillen', 50, true).then(response => {
  console.log(chalk.green('response containing "Pillen", 50 words and is generated from a larger text seed'));
  console.log(response);
});

hurn('foobar').then(response => {
  console.log(chalk.green('Returns error with message "Key not found."'));
  console.log(response);
});
