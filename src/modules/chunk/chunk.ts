/**
 * Chunks an array into smaller arrays of a specified size.
 * @param {array}
 * @param {number} Number of chunks to be derived
 *
 * @example
 *
 * chunk([1, 2, 3, 4, 5], 2);
 * // => [[1,2],[3,4],[5]]
 */

export const chunk = <T>(arr: T[], size: number): T[][] => {
  // Handle undefined array or empty array or zero chunk size
  if (!arr || arr.length === 0 || size <= 0) {
    return [];
  }

  // Round up non-integer chunk size
  size = Math.ceil(size);

  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
};
