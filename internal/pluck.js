/**
 * Utility method to extract the attribute from each model in the collection.
 * @param store array of objects
 * @param key to extract
 * @returns Returns the array of extracted values 
 *
 * @example
 *
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
