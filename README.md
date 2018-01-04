# HurnJS

Generate random rap lyrics in the style of Austrian rapper Yung Hurn.

# Installation

```
npm install hurnjs
```

# How to use

`hurn()` takes up to three parameters, `keyword`, `limit` and `useAll` and returns a promise resolving with a string.

- **keyword** (String, default: *random*): The response will contain the set keyword.
- **limit** (Number, default: *100*): The response will contain the number of words set with `limit`.
- **useAll** (Boolean, default: *false*): If `useAll` is set to `true`, the response will be generated from a text file containing more lyrics, when `false` it will use only the lyrics of the top 10 most listened tracks.

```
const hurn = require('hurnjs');

hurn().then(response => {
  console.log(response); // response contains text according to defaults
});

hurn('baby').then(response => {
  console.log(response); // response will contain "baby"
});

hurn('pillen', 1000, true).then(response => {
  console.log(response); // response contains text containing "pillen", 1000 words and was seeded by a larger textfile
});

```

## Example response

> Drogen jetzt? verkaufen Freunde Deine crazy mich nenn' Baby, Schluck der ein' Hand wie und glitzerst ich du hab' Brudi, noch glaubs paar wirklich Karten schnell, für schnell dich schnell, wenn Aber du nie, willst, das dann und Werd' Stadt Ich die ich weiß mach' sind die Schuhe


# Commands
- `npm run clean` - Remove `lib/` directory.
- `npm test` - Run tests.
- `npm test:watch` - Run tests and watch for file changes.
- `npm run cover` - Yes. You can even cover ES6 code.
- `npm run lint` - Lint using [airbnb-config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- `npm run test:examples` - Runs written examples for better module understanding.
- `npm run build` - Compiles ES6 to ES5.
- `npm run prepare` - Hook for npm. Do all the checks before publishing you module.


