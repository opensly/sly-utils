/**
 * Utility method to extract the given key from an array of objects
 * @param store source array of objects
 * @param key to extract
 *
 * @example
 * const list = [
 *   {name: 'jack', age: 14}, 
 *   {name: 'jill', age: 15},
 *   {name: 'humpty', age: 16}
 * ];
 *
 * pluck(list, 'age'); // [14, 15, 16]
 *
 */
export const pluck = (store, key) => { return store.map(o => o[key]); }
