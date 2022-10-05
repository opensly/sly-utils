

/**
 * Utility method to order the objects of the collection by the given property
 * of its object element
 * @param collection  Array of objects
 * @param identifier  The identification key to apply the sort
 * @returns   Sorted array of objects
 * 
 * @example 
 * 
 * const employees = [
 *   {
 *     firstName: 'John',
 *     lastName: 'Doe',
 *     age: 27,
 *     joinedDate: 'December 15, 2017'
 *   },
 *   {
 *     firstName: 'Ana',
 *     lastName: 'Rosy',
 *     age: 25,
 *     joinedDate: 'January 15, 2019'
 *   },
 *   {
 *     firstName: 'Zion',
 *     lastName: 'Albert',
 *     age: 30,
 *     joinedDate: 'February 15, 2011'
 *   }
 * ];
 * 
 * sortArrayOfObjects(employees, 'age');
 * 
 * //
 * [
 *   { age: 25, firstName: "Ana", joinedDate: "January 15, 2019", lastName: "Rosy"},
 *   { age: 27, firstName: "John", joinedDate: "December 15, 2017", lastName: "Doe"},
 *   { age: 30, firstName: "Zion", joinedDate: "February 15, 2011", lastName: "Albert"}
 * ]
 * 
 */


export const sortArrayOfObjects = (collection, identifier) => {
  return collection.sort((a, b) => {
    return a[identifier] - b[identifier];
  });
};
