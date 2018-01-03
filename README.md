# HurnJS

Generate random rap lyrics in the style of Austrian rapper Yung Hurn.

# Installation

```
npm install hurnjs
```

# How to use

`hurn()` takes three parameters, `keyword`, `limit` and `useAll`; 

- `keyword`: The response will contain the set keyword.
- `limit`: The response will contain the number of words set with `limit`.
- `useAll`: If `useAll` is set to `true`, the response will be generated from a text file containing more lyrics, when `false` it will use only the lyrics of the top 10 most listened tracks.

```
import hurn from 'hurn';

hurn().then(response => {
  console.log(response); // logs generated text with defaults
});

hurn('baby').then(response => {
  console.log(response); 
});

hurn('pillen', 1000, true).then(response => {
  console.log(response);
});

```

# Commands
- `npm run clean` - Remove `lib/` directory
- `npm test` - Run tests. Tests can be written with ES6 (WOW!)
- `npm test:watch` - You can even re-run tests on file changes!
- `npm run cover` - Yes. You can even cover ES6 code.
- `npm run lint` - We recommend using [airbnb-config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb). It's fantastic.
- `npm run test:examples` - We recommend writing examples on pure JS for better understanding module usage.
- `npm run build` - Do some magic with ES6 to create ES5 code.
- `npm run prepublish` - Hook for npm. Do all the checks before publishing you module.

# Installation
Just clone this repo and remove `.git` folder.

