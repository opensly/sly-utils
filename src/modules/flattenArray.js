/**
 * Iterative flatten function with infinite depth.
 *
 * @param  {Array} array - The array to flatten.
 * @return {Array} - The fully flattened array.
 */
export function flattenCompletely(array) {
  const result = [];
  const stack = [...array]; // Start with a copy of the original array

  while (stack.length) {
    const item = stack.pop();
    if (Array.isArray(item)) {
      // If the item is an array, push its elements onto the stack
      stack.push(...item);
    } else {
      // Otherwise, add the item to the result
      result.push(item);
    }
  }

  return result.reverse(); // Reverse the result because we used `.pop()`
}

/**
 * Recursive flatten function with depth.
 *
 * @param  {Array} array - The array to flatten.
 * @param  {Number} depth - The depth level to flatten to.
 * @return {Array} - The flattened array up to the given depth.
 */
export function flattenWithDepth(array, depth) {
  const result = [];
  for (const value of array) {
    if (depth > 0 && Array.isArray(value)) {
      result.push(...flattenWithDepth(value, depth - 1));
    } else {
      result.push(value);
    }
  }
  return result;
}

/**
 * Flatten an array, with the ability to define a depth.
 *
 * @param  {Array} array - The array to flatten.
 * @param  {Number} [depth] - The optional depth level to flatten to.
 * @return {Array} - The flattened array.
 */
export function flattenArray(array, depth = Infinity) {
  return depth === Infinity ? flattenCompletely(array) : flattenWithDepth(array, depth);
}
