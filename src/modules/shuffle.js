/**
 * Utility method to shuffle the given array and returns
 * the shuffled array.
 * @param arr Array of values
 * @returns Returns the array of shuffled values
 *
 * @example
 * const list = ['apple', 'banana', 'cherry', 'grapes', 'jackfruit', 'kiwi'];
 * shuffle(list); // ["jackfruit", "apple", "kiwi", "grapes", "banana", "cherry"]
 */

export const shuffle = (arr) => {
  let temp = [];
	while(arr.length > 0) {
  	let random = Math.floor(Math.random() * arr.length);
		temp.push(arr.splice(random, 1));
	}
  return temp.flat();
}
