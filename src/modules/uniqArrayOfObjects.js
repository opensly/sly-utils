/**
 * Removes duplicates from an array of objects.
 * 
 * @example
 * var users = [
 *   { id: 1, name: "ted" },
 *   { id: 1, name: "bob" },
 *   { id: 3, name: "sara" },
 *   { id: 4, name: "test" },
 *   { id: 4, name: "test" },
 *   { id: 5, name: "abc" }
 * ];
 * 
 * uniqArrayOfObjects(users)
 * // =>
 * [
 *   { id: 1, name: "ted"}, 
 *   { id: 1, name: "bob"}, 
 *   { id: 3, name: "sara"}, 
 *   { id: 4, name: "test"}, 
 *   { id: 5, name: "abc"}
 * ]
 * 
 */

export const uniqArrayOfObjects = (store) => {
	const uniq = new Set(store.map(e => JSON.stringify(e)));
	return Array.from(uniq).map(e => JSON.parse(e));
};
