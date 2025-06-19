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
export declare const mapToJson: (map: Map<any, any>) => string;
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
export declare const jsonToMap: (jsonString: string) => Map<string, any>;
