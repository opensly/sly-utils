/**
 * Utility method to find out whether the given string exists in a nested array of
 * objects.
 * @param {array} arr - Array of objects (could be nested also)
 * @param {string} key - key value
 * @param {string} str - string to be identified
 *
 * @example
 *
 * const nestedArray = [
 *   { key: 'value1', nested: { key: 'value2', deepNested: [{ key: 'value3' }] } },
 *   { key: 'value4', nested: [{ key: 'value5'}, { deepNested: [{ key: 'value6' }] }] },
 *   { key: 'value7', nested: { key: 'value8', deepNested: [{ key: 'value9' }] } }
 * ];
 *
 * doesExist(nestedArray, 'key', 'value3');     // => true
 * doesExist(nestedArray, 'key', 'value10');    // => false
 * doesExist(nestedArray, 'key', 'value5');     // => true
 * doesExist(nestedArray, 'key', 'value7');     // => true
 * doesExist(nestedArray, 'key', 'value9');     // => true
 * doesExist(nestedArray, 'key', 'value1');     // => true
 *
 */

export const doesExist = (arr: any[], key: string, str: any): boolean => {
  const checkNested = (obj: any): boolean => {
    if (typeof obj !== 'object' || obj === null) return false;
    if (Array.isArray(obj)) return obj.some(checkNested);

    if (obj[key] == str) return true;

    return Object.values(obj).some((value) => checkNested(value));
  };

  return arr.some(checkNested);
};
