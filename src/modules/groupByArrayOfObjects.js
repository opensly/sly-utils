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

export const groupByArrayOfObjects = (collection, identifier) => {
  return collection.reduce((hash, obj) => {
    if (obj[identifier] === undefined) {
      return hash;
    }
    return Object.assign(hash, { [obj[identifier]]:( hash[obj[identifier]] || [] ).concat(obj)});
  }, {})
};
