/**
 * Returns the common elements of 2 arrays in a new array
 * @param {array}
 * @param {array}
 *
 * @example
 *
 * intersection([1, 2, 3, 4], [2, 4, 6, 8]);
 * // => [2, 4]
 *
 */
export const intersection = (arr1, arr2) => {
  const set1 = new Set(arr1);
  return arr2.filter((value) => set1.has(value));
};
