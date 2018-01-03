const fs = require('fs');
const markov = require('markov');

const m = markov(1);

const hurn = (keyword, limit, useAll = false) => {
  const options = {
    seed: useAll ? 'all' : 'topTen',
    limit: limit || 100,
    key: keyword || false,
  };

  const seedLibrary = {
    topTen: 'lyrics_top10.txt',
    all: 'lyrics_oneline.txt',
  };

  const stream = fs.createReadStream(`${__dirname}/../vendor/${seedLibrary[options.seed]}`);

  return new Promise((resolve) => {
    m.seed(stream, () => {
      const startKey = options.key || m.pick();
      resolve(m.fill(startKey, options.limit).join(' '));
    });
  });
};

export default hurn;
