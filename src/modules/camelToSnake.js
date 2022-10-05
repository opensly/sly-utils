/**
 * Converts `string` from [Camel case] to [Snake Case]
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 *
 * @example
 *
 * camelToSnake('helloWorld')
 * // => 'hello_world'
 *
 * camelToSnake('firstClass')
 * // => 'first_class'
 *
 */

export const camelToSnake = (str) =>
  str.replace(
    /\.?([A-Z])/g,
    (group) => "_" + group.toLowerCase().replace(/^_/, "")
  );
