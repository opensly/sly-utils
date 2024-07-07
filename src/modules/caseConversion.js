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

export const camelToKebab = (str) => str.replace(/\.?([A-Z])/g, (group) => '-' + group.toLowerCase().replace(/^_/, ''));

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

export const camelToSnake = (str) => str.replace(/\.?([A-Z])/g, (group) => '_' + group.toLowerCase().replace(/^_/, ''));

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

export const kebabToCamel = (str) => str.replace(/-./g, (x) => x[1].toUpperCase());

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

export const snakeToCamel = (str) => str.replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('_', '').replace('-', ''));
