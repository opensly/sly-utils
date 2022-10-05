'use strict';

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

const camelToSnake = (str) =>
  str.replace(
    /\.?([A-Z])/g,
    (group) => "_" + group.toLowerCase().replace(/^_/, "")
  );

/**
 * Utility method to groupBy array of objects by given element of its object
 * @param collection  Array of objects
 * @param identifier  The identification key to apply the groupBy
 * @returns grouped object
 *
 * @exmaple
 *
 * const products = [
 *   { name: 'apples', category: 'fruits' },
 *   { name: 'oranges', category: 'fruits' },
 *   { name: 'potatoes', category: 'vegetables' }
 * ];
 *
 * groupByArrayOfObjects(products, 'category');
 *
 * //
 * {
 *   'fruits': [
 *     { name: 'apples', category: 'fruits' },
 *     { name: 'oranges', category: 'fruits' },
 *   ],
 *   'vegetables': [
 *     { name: 'potatoes', category: 'vegetables' }
 *   ]
 * }
 *
 */

const groupByArrayOfObjects = (collection, identifier) => {
  return collection.reduce((hash, obj) => {
    if (obj[identifier] === undefined) {
      return hash;
    }
    return Object.assign(hash, { [obj[identifier]]:( hash[obj[identifier]] || [] ).concat(obj)});
  }, {})
};

/**
 * Utility method to extract the value of the given property
 * from each object in the collection.
 * @param store Array of objects
 * @param key The key to extract the attribute
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

const pluck = (store, key) => { return store.map(o => o[key]); };

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

const sortArrayOfObjects = (collection, identifier) => {
  return collection.sort((a, b) => {
    return a[identifier] - b[identifier];
  });
};

module.exports = {
  camelToSnake: camelToSnake,
  groupByArrayOfObjects: groupByArrayOfObjects,
  pluck: pluck,
  sortArrayOfObjects: sortArrayOfObjects
};
