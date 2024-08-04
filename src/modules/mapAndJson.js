/**
 * Converts a Map to a JSON string.
 *
 * @param {Map} map - The Map to convert to JSON.
 * @returns {string} - The JSON string representation of the Map.
 * @throws {TypeError} - Throws an error if the input is not a Map.
 *
 * @example
 *
 * const myMap = new Map();
 * myMap.set('name', 'Alice');
 * myMap.set('age', 25);
 *
 * mapToJson(myMap);
 * // => {"name":"Alice","age":25}
 *
 */

export const mapToJson = (map) => {
  if (!(map instanceof Map)) {
    throw new TypeError('Input should be a Map');
  }

  // Convert the Map to an object and then to a JSON string
  return JSON.stringify(Object.fromEntries(map));
};

/**
 * Converts a JSON string to a Map.
 *
 * @param {string} jsonString - The JSON string to convert to a Map.
 * @returns {Map} - The resulting Map object.
 * @throws {SyntaxError} - Throws an error if the JSON string is not valid.
 *
 * @example
 *
 * const jsonString = '{"name":"Alice","age":25}';
 *
 * jsonToMap(jsonString);
 * // => Map(2) { 'name' => 'Alice', 'age' => 25 }
 *
 */

export const jsonToMap = (jsonString) => {
  // Parse the JSON string to an object
  const obj = JSON.parse(jsonString);

  // Convert the object to a Map
  return new Map(Object.entries(obj));
};
