/**
 * Converts `string` from [Camel case] to [Kebab Case]
 * @param {string} The string to convert.
 * @returns {string} Returns the camel cased string.
 *
 * @example
 *
 * camelToKebab('helloWorld')
 * // => 'hello-world'
 */

export const camelToKebab = (str: string): string => str.replace(/\.?([A-Z])/g, (group: string) => '-' + group.toLowerCase().replace(/^_/, ''));

/**
 * Converts `string` from [Camel case] to [Snake Case]
 * @param {string} The string to convert.
 * @returns {string} Returns the camel cased string.
 *
 * @example
 *
 * camelToSnake('helloWorld')
 * // => 'hello_world'
 */

export const camelToSnake = (str: string): string => str.replace(/\.?([A-Z])/g, (group: string) => '_' + group.toLowerCase().replace(/^_/, ''));

/**
 * Converts `string` from [Camel Case] to [Pascal case]
 * @param {string} The string to convert.
 * @returns {string} Returns the Pascal cased string.
 *
 * @example
 *
 * camelToPascal('helloWorld')
 * // => 'HelloWorld'
 */

export const camelToPascal = (str: string): string => str.replace(/(^\w|_\w)/g, (group: string) => group.replace('_', '').toUpperCase());

/**
 * Converts `string` from [Kebab case] to [Camel Case]
 * @param {string} The string to convert.
 * @returns {string} Returns the camel cased string.
 *
 * @example
 *
 * kebabToCamel('hello-world')
 * // => 'helloWorld'
 */

export const kebabToCamel = (str: string): string => str.replace(/-./g, (x: string) => x[1].toUpperCase());

/**
 * Converts `string` from [Kebab Case] to [Pascal case]
 * @param {string} The string to convert.
 * @returns {string} Returns the Pascal cased string.
 *
 * @example
 *
 * kebabToPascal('hello-world')
 * // => 'HelloWorld'
 */

export const kebabToPascal = (str: string): string => str.replace(/(-\w)/g, (group: string) => group[1].toUpperCase()).replace(/^./, (char: string) => char.toUpperCase());

/**
 * Converts `string` from [Kebab case] to [Sanke Case]
 * @param {string} The string to convert.
 * @returns {string} Returns the Snake cased string.
 *
 * @example
 *
 * kebabToSnake('hello-world')
 * // => 'hello_world'
 */

export const kebabToSnake = (str: string): string => str.replace(/-/g, '_');

/**
 * Converts `string` from [Pascal Case] to [Camel case]
 * @param {string} The string to convert.
 * @returns {string} Returns the camel cased string.
 *
 * @example
 *
 * pascalToCamel('HelloWorld')
 * // => 'helloWorld'
 */

export const pascalToCamel = (str: string): string => str.replace(/^./, (char: string) => char.toLowerCase());

/**
 * Converts `string` from [Pascal Case] to [Kebab case]
 * @param {string} The string to convert.
 * @returns {string} Returns the kebab cased string.
 *
 * @example
 *
 * pascalToCamel('HelloWorld')
 * // => 'helloWorld'
 */

export const pascalToKebab = (str: string): string =>
  str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();

/**
 * Converts `string` from [Pascal case] to [Sanke Case]
 * @param {string} The string to convert.
 * @returns {string} Returns the Snake cased string.
 *
 * @example
 *
 * pascalToSnake('HelloWorld')
 * // => 'hello_world'
 */

export const pascalToSnake = (str: string): string =>
  str
    .replace(/([A-Z])/g, '_$1')
    .toLowerCase()
    .replace(/^_/, '');

/**
 * Converts `string` from [Snake Case] to [Camel case]
 * @param {string} The string to convert.
 * @returns {string} Returns the camel cased string.
 *
 * @example
 *
 * snakeToCamel('hello_world')
 * // => 'helloWorld'
 */

export const snakeToCamel = (str: string): string => str.replace(/([-_][a-z])/g, (group: string) => group.toUpperCase().replace('_', '').replace('-', ''));

/**
 * Converts `string` from [Sanke Case] to [Pascal case]
 * @param {string} The string to convert.
 * @returns {string} Returns the Pascal cased string.
 *
 * @example
 *
 * snakeToPascal('hello_world')
 * // => 'HelloWorld'
 */

export const snakeToPascal = (str: string): string => str.replace(/(_\w)/g, (group: string) => group[1].toUpperCase()).replace(/^./, (char: string) => char.toUpperCase());

/**
 * Converts `string` from [Snake case] to [Kebab Case]
 * @param {string} The string to convert.
 * @returns {string} Returns the Snake cased string.
 *
 * @example
 *
 * snakeToKebab('hello_world')
 * // => 'hello-world'
 */

export const snakeToKebab = (str: string): string => str.replace(/_/g, '-');
