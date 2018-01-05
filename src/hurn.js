const fs = require('fs');
const markov = require('markov');

const m = markov(1);

const hurn = (keyword, limit, useAll = false) => {
  const options = {
    seed: useAll ? 'all' : 'topTen',
    limit: limit || 100,
    key: keyword || null,
  };

  const seedLibrary = {
    topTen: 'lyrics_top10.txt',
    all: 'lyrics_oneline.txt',
  };

  const stream = fs.createReadStream(`${__dirname}/../vendor/${seedLibrary[options.seed]}`);

  return new Promise((resolve, reject) => {
    m.seed(stream, () => {
      // if no key is set, use random key
      const startKey = options.key || m.pick();
      // if key doesn't exist in model, reject with error message
      if (m.search(startKey)) {
        resolve(m.fill(startKey, options.limit).join(' '));
      } else {
        reject(new Error('Key not found.'));
      }
    });
  });
};

export default hurn;
