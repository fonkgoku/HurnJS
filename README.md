# HurnJS

Generate random rap lyrics in the style of Austrian rapper Yung Hurn.

# Installation

```
npm install hurnjs
```

# How to use

`hurn()` takes up to three parameters, `keyword`, `limit` and `useAll`; 

- **keyword** (String, default: *random*): The response will contain the set keyword.
- **limit** (Number, default: *100*): The response will contain the number of words set with `limit`.
- **useAll** (Boolean, default: *false*): If `useAll` is set to `true`, the response will be generated from a text file containing more lyrics, when `false` it will use only the lyrics of the top 10 most listened tracks.

```
import hurn from 'hurn';

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

> ich Wenn fahr willst? durch du die hast Nacht, mich und fragt: ich Er sag': Nein! Baby, no, Du Nein! mit Nein! mein sag': Blackberry ich Und und ich Nacht chill' der Stoli in in bin dein'n ich Popo Nein! „Baby, sag': ja, ich ja bin ich gehen sag': nicht Baby, kann ja, Keiner Bitte, klopfen Baby, Herz Ja, mein ich mit sag': du Baby, Körper ja, mein du Körper glitzerst mein Wie Und Eis dich Oh, für „Baby, nur: wenn is Du Pferd willst, das mach' und schnell, Nein! schnell sag': deine ich Freunde was verkaufen bisschen jetzt ah,


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

