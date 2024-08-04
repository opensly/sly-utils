/**
 * Compares two arrays to determine if they are the same.
 * Two arrays are considered the same if they have the same length
 * and their corresponding elements are equal.
 *
 * @param {Array} arr1 - The first array to compare.
 * @param {Array} arr2 - The second array to compare.
 * @returns {boolean} - Returns true if the arrays are the same, false otherwise.
 */

export const areSameArrays = (arr1, arr2) => {
  // If lengths are different, arrays cannot be the same
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Create a frequency map for each array with type checking
  const frequencyMap1 = arr1.reduce((map, item) => {
    const key = typeof item + ':' + item;
    map[key] = (map[key] || 0) + 1;
    return map;
  }, {});

  const frequencyMap2 = arr2.reduce((map, item) => {
    const key = typeof item + ':' + item;
    map[key] = (map[key] || 0) + 1;
    return map;
  }, {});

  // Compare frequency maps
  for (const key in frequencyMap1) {
    if (frequencyMap1[key] !== frequencyMap2[key]) {
      return false;
    }
  }

  return true;
};
