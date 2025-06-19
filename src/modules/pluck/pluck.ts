/**
 * Utility method to extract the value of the given property
 * from each object in the collection.
 * @param {array} Array of objects
 * @param {number} The key to extract the attribute
 * @returns {array} Returns the array of extracted values
 *
 * @example
 *
 * const list = [
 *   {name: 'jack', age: 14},
 *   {name: 'jill', age: 15},
 *   {name: 'humpty', age: 16}
 * ];
 *
 * pluck(list, 'age');
 * // => [14, 15, 16]
 *
 */

export const pluck = (store: any[], key: string): any[] => {
  return store.map((o: any) => (o && typeof o === 'object' ? o[key] : undefined));
};
