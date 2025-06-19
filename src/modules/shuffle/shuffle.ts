/**
 * Utility method to shuffle the given array and returns the shuffled array.
 * @param {array} Array of values
 * @returns {array} Returns the array of shuffled values
 *
 * @example
 *
 * const list = ['apple', 'banana', 'cherry', 'grapes', 'jackfruit', 'kiwi'];
 * shuffle(list);
 * // => ["jackfruit", "apple", "kiwi", "grapes", "banana", "cherry"]
 *
 */

export const shuffle = (arr: any[]): any[] => {
  // Create a copy of the original array
  const newArr = [...arr];

  // Fisher-Yates (Knuth) Shuffle algorithm
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }

  return newArr;
};
