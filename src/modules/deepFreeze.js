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

export const deepFreeze = (obj) => {
  Reflect.ownKeys(obj).forEach((name) => {
    const value = obj[name];
    if (value && typeof value === 'object') {
      deepFreeze(value);
    }
  });
  return Object.freeze(obj);
};
