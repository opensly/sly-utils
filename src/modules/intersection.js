/**
 * Returns the common elements of 2 arrays in a new array
 * 
 * @example
 * intersection([1, 2, 3, 4], [2, 4, 6, 8]);  // [2, 4]
 *
 */
export const intersection = (arr1, arr2) => {
  return arr1.filter(value => arr2.includes(value))
};
