/**
 * Converts a value to an array.
 * If the value is null or undefined, it returns an empty array.
 * If the value is already an array, it returns the value as-is.
 * Otherwise, it wraps the value in a new array.
 *
 * @param {*} val - The value to convert to an array.
 * @returns {Array} - An array containing the input value, or an empty array if the value is null/undefined.
 *
 * @example
 *
 * toArray(5);
 * // => [5]
 *
 * toArray([5]);
 * // => [5]
 *
 * toArray(null);
 * // => []
 *
 * Note: Using val == null safely combines the null and undefined checks into one, making the code 
 * more concise without changing its functionality.
 */

export function toArray(val) {
	return val == null ? [] : (Array.isArray(val) ? val : [val]);
};
