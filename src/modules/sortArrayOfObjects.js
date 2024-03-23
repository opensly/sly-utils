/**
 * Utility method to order the objects of the collection by the given property
 * of its object element
 * @param collection  Array of objects
 * @param identifier  The identification key to apply the sort
 * @param order Tells the order. Values should be -> ASC || DESC
 * @returns   Sorted array of objects
 * 
 * @example 
 * 
 * const data = [
 *   { name: 'John', age: 30 },
 *   { name: 'Alice', age: 25 },
 *   { name: 'Bob', age: 35 }
 * ];
 * 
 * console.log(sortByProperty(data, 'age', 'ascending'));
 * [{age: 25, name: "Alice"}, {age: 30, name: "John"}, {age: 35, name: "Bob"}]
 * 
 * console.log(sortByProperty(data, 'age', 'descending'));
 * [{age: 35, name: "Bob"}, {age: 30, name: "John"}, {age: 25, name: "Alice"}]
 */

export const sortArrayOfObjects = (collection, identifier, order='ASC') => {
  const sortOrder = order === 'DESC' ? -1 : 1;
  return collection.slice().sort((a, b) => (a[identifier] > b[identifier] ? sortOrder : -sortOrder));
};
