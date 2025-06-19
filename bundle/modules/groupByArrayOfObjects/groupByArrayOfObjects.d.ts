/**
 * Utility method to groupBy array of objects by given element of its object
 * @param {array}  Array of objects
 * @param {string}  The identification key to apply the groupBy
 * @returns {object}
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
export declare const groupByArrayOfObjects: (collection: Record<string, any>[], identifier: string) => Record<string, Record<string, any>[]>;
