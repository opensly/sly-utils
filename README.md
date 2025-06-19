# sly-utils

sly-utils is a modular and efficient JavaScript utility library designed to simplify complex tasks.

## Installation

```bash
npm install sly-utils
```

## Usage

### In JavaScript
```js
// ES Module
import { chunk, camelToSnake, uuid } from 'sly-utils';

const arr = [1, 2, 3, 4, 5, 6];
console.log(chunk(arr, 2)); // [[1,2],[3,4],[5,6]]
console.log(camelToSnake('helloWorld')); // 'hello_world'
console.log(uuid()); // 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'

// CommonJS
const { chunk, camelToSnake, uuid } = require('sly-utils');
```

### In TypeScript
```ts
import { chunk, camelToSnake, uuid } from 'sly-utils';
// TypeScript will provide type checking and autocompletion
```

## Exports & Structure
- All utilities are available as named exports from the main package entry.
- TypeScript types are included automatically for all utilities.
- The package supports both CommonJS and ES Module imports.

## List of Utility Methods

- Compare strings (compute the Levenshtein distance between two strings)
- Convert map to json
- Convert json to map
- Deep freeze a nested object
- Escape HTML tags as HTML entities
- Flatten a nested object
- Generate UUID & UUIDShort
- Strip HTML tags
- Transform keys
- Transform URL strings to SEO-friendly URLs

### Utility Methods for Array & Array of Objects

- Check if two given arrays are the same
- Chunk an array
- Find the common elements of two arrays
- Find if a given string exists in an array of objects
- Group by array of objects
- Move an element in an array from one position to another
- Pluck values from an array of objects
- Remove duplicates from an array of objects
- Shuffle an array
- Sort an array of objects

### Utility Methods for String Conversion

- Camel case to snake case
- Camel case to kebab case
- Camel case to Pascal case
- Kebab case to snake case
- Kebab case to camel case
- Kebab case to Pascal case
- Pascal case to camel case
- Pascal case to kebab case
- Pascal case to snake case
- Snake case to camel case
- Snake case to Pascal case
- Snake case to kebab case

## Build & Type Support
- The package includes pre-built JavaScript bundles for both CommonJS and ES Module consumers.
- TypeScript declaration files are included for full type safety and autocompletion.
- No additional configuration is needed for most modern build tools.

## Report & Contribute

Sly-utils is currently in active development and fine-tuning.
If you encounter any issues, please open a [GitHub issue](https://github.com/opensly/sly-utils/issues).
If you would like to contribute, please open a [GitHub Pull Request](https://github.com/opensly/sly-utils/pulls).

## Support

Your support inspires & encourage us more. If you are interested to make a donation to us, please click the below PayPal button.

[![PayPal.me](https://img.shields.io/badge/paypal-donate-119fde.svg)](https://www.paypal.me/LakshmikanthV)

## Author

[OpenSly](https://github.com/opensly)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
