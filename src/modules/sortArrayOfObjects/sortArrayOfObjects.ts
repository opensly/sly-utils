/**
 * Utility method to order the objects of the collection by the given property
 * of its object element
 * @param {array} Array of objects
 * @param {string} The identification key to apply the sort
 * @param {string} Tells the order. Values should be -> ASC || DESC
 * @returns {array} Sorted array of objects
 *
 * @example
 *
 * const data = [
 *   { name: 'John', age: 30 },
 *   { name: 'Alice', age: 25 },
 *   { name: 'Bob', age: 35 }
 * ];
 *
 * sortByProperty(data, 'age', 'ascending');
 * // => [{age: 25, name: "Alice"}, {age: 30, name: "John"}, {age: 35, name: "Bob"}]
 *
 * sortByProperty(data, 'age', 'descending');
 * // => [{age: 35, name: "Bob"}, {age: 30, name: "John"}, {age: 25, name: "Alice"}]
 */

export const sortArrayOfObjects = (
  collection: Record<string, any>[],
  identifier: string,
  order: 'ASC' | 'DESC' = 'ASC'
): Record<string, any>[] => {
  const sortOrder = order === 'DESC' ? -1 : 1;
  return collection.slice().sort((a: Record<string, any>, b: Record<string, any>) => (a[identifier] > b[identifier] ? sortOrder : -sortOrder));
};
