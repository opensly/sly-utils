/**
 * Utility method to flatten the nested object to a single level object
 * @param {object} Nested object
 * @returns {object} Returns a single level object
 *
 * @example
 *
 * Given input:
 * let input = {
 *   "user": {
 *     "name": "XYZ",
 *     "createdDate": "123424",
 *     "department": {
 *       "id": "0123",
 *       "type": "ABC"
 *     }
 *   }
 * }
 *
 * flattenObject(input);
 *
 * Expected output:
 * {
 *   "userName": "XYZ",
 *   "userCreatedDate": "123424",
 *   "userDepartmentId": "0123",
 *   "userDepartmentType": "ABC"
 * }
 */

export const flattenObject = (
  obj: Record<string, any>,
  parent?: string,
  res: Record<string, any> = {}
): Record<string, any> => {
  for (let key in obj) {
    let capitalized = key[0].toUpperCase() + key.substring(1);
    let propName = parent ? parent + capitalized : key;
    if (obj[key] === null) {
      res[parent ? parent + key[0].toUpperCase() + key.substring(1) : key] = null;
    } else if (typeof obj[key] == 'object') {
      flattenObject(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }
  }
  return res;
};
