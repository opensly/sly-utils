/**
 * Utility method to flatten the nested object to a single level object
 * @param obj Nested object
 * @returns Returns a single level object
 * 
 * @example
 * When the input object is the below
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
 * The expected output object is the below
 * {
 *   "userName": "XYZ",
 *   "userCreatedDate": "123424",
 *   "userDepartmentId": "0123",
 *   "userDepartmentType": "ABC"
 * }
 */

export const flattenObject = (obj, parent, res={}) => {
  for (let key in obj) {
    let capitalized = key[0].toUpperCase() + key.substring(1);
    let propName = parent ? parent + capitalized : key;
    if (typeof obj[key] == 'object') {
      flattenObject(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }
  }
  return res;
}
