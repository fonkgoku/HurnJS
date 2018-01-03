const fs = require('fs');
const markov = require('markov');

const m = markov(1);

const seed = fs.createReadStream(`${__dirname}/../vendor/lyrics.txt`);
const limit = 1000;

m.seed(seed, () => {
  const randomKey = m.pick();
  const response = m.fill(randomKey, limit).join(' ');
  console.log(response);
});

