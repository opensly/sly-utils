/**
 * Utility method to make a nested object immutable
 * @param {object} Nested object to be frozen
 *
 * @example
 * const myObj = {
 *  internal: {
 *    a: null,
 *    b: {
 *        nested: true
 *    }
 *  },
 * };
 *
 * deepFreeze(myObj);
 *
 * myObj.internal.a = "anotherValue";
 * console.log(myObj.internal.a); // => null
 *
 * myObj.internal.b.nested = false;
 * console.log(myObj.internal.b.nested); // => true
 *
 */
export declare const deepFreeze: <T extends object>(obj: T) => T;
