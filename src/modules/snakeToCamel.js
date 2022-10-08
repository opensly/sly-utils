/**
 * Converts `string` from [Snake Case] to [Camel case]
 * @param {string} [str=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 *
 * @example
 *
 * snakeToCamel('hello_world')
 * // => 'helloWorld'
 *
 * camelToSnake('first_class')
 * // => 'firstClass'
 *
 */

export const snakeToCamel = (str) => str.replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('_', '').replace('-', ''));
