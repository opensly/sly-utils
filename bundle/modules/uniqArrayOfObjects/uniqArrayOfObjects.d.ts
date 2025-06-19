/**
 * Removes duplicates from an array of objects.
 * @param {array} Array of objects
 * @returns {array}
 *
 * @example
 *
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
export declare const uniqArrayOfObjects: (store: any[]) => any[];
