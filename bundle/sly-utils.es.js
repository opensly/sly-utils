/**
 * Compares two arrays to determine if they are the same.
 * Two arrays are considered the same if they have the same length
 * and their corresponding elements are equal.
 *
 * @param {Array} arr1 - The first array to compare.
 * @param {Array} arr2 - The second array to compare.
 * @returns {boolean} - Returns true if the arrays are the same, false otherwise.
 *
 * @example
 *
 * const arr1 = [1, 2, 3];
 * const arr2 = [3, 2, 1];
 *
 * areSameArrays(arr1, arr2);
 * // => true
 *
 */

const areSameArrays = (arr1, arr2) => {
  // If lengths are different, arrays cannot be the same
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Create a frequency map for each array with type checking
  const frequencyMap1 = arr1.reduce((map, item) => {
    const key = typeof item + ':' + item;
    map[key] = (map[key] || 0) + 1;
    return map;
  }, {});

  const frequencyMap2 = arr2.reduce((map, item) => {
    const key = typeof item + ':' + item;
    map[key] = (map[key] || 0) + 1;
    return map;
  }, {});

  // Compare frequency maps
  for (const key in frequencyMap1) {
    if (frequencyMap1[key] !== frequencyMap2[key]) {
      return false;
    }
  }

  return true;
};

/**
 * Converts `string` from [Camel case] to [Kebab Case]
 * @param {string} The string to convert.
 * @returns {string} Returns the camel cased string.
 *
 * @example
 *
 * camelToKebab('helloWorld')
 * // => 'hello-world'
 */

const camelToKebab = (str) => str.replace(/\.?([A-Z])/g, (group) => '-' + group.toLowerCase().replace(/^_/, ''));

/**
 * Converts `string` from [Camel case] to [Snake Case]
 * @param {string} The string to convert.
 * @returns {string} Returns the camel cased string.
 *
 * @example
 *
 * camelToSnake('helloWorld')
 * // => 'hello_world'
 */

const camelToSnake = (str) => str.replace(/\.?([A-Z])/g, (group) => '_' + group.toLowerCase().replace(/^_/, ''));

/**
 * Converts `string` from [Camel Case] to [Pascal case]
 * @param {string} The string to convert.
 * @returns {string} Returns the Pascal cased string.
 *
 * @example
 *
 * camelToPascal('helloWorld')
 * // => 'HelloWorld'
 */

const camelToPascal = (str) => str.replace(/(^\w|_\w)/g, (group) => group.replace('_', '').toUpperCase());

/**
 * Converts `string` from [Kebab case] to [Camel Case]
 * @param {string} The string to convert.
 * @returns {string} Returns the camel cased string.
 *
 * @example
 *
 * kebabToCamel('hello-world')
 * // => 'helloWorld'
 */

const kebabToCamel = (str) => str.replace(/-./g, (x) => x[1].toUpperCase());

/**
 * Converts `string` from [Kebab Case] to [Pascal case]
 * @param {string} The string to convert.
 * @returns {string} Returns the Pascal cased string.
 *
 * @example
 *
 * kebabToPascal('hello-world')
 * // => 'HelloWorld'
 */

const kebabToPascal = (str) => str.replace(/(-\w)/g, (group) => group[1].toUpperCase()).replace(/^./, (char) => char.toUpperCase());

/**
 * Converts `string` from [Kebab case] to [Sanke Case]
 * @param {string} The string to convert.
 * @returns {string} Returns the Snake cased string.
 *
 * @example
 *
 * kebabToSnake('hello-world')
 * // => 'hello_world'
 */

const kebabToSnake = (str) => str.replace(/-/g, '_');

/**
 * Converts `string` from [Pascal Case] to [Camel case]
 * @param {string} The string to convert.
 * @returns {string} Returns the camel cased string.
 *
 * @example
 *
 * pascalToCamel('HelloWorld')
 * // => 'helloWorld'
 */

const pascalToCamel = (str) => str.replace(/^./, (char) => char.toLowerCase());

/**
 * Converts `string` from [Pascal Case] to [Kebab case]
 * @param {string} The string to convert.
 * @returns {string} Returns the kebab cased string.
 *
 * @example
 *
 * pascalToCamel('HelloWorld')
 * // => 'helloWorld'
 */

const pascalToKebab = (str) =>
  str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();

/**
 * Converts `string` from [Pascal case] to [Sanke Case]
 * @param {string} The string to convert.
 * @returns {string} Returns the Snake cased string.
 *
 * @example
 *
 * pascalToSnake('HelloWorld')
 * // => 'hello_world'
 */

const pascalToSnake = (str) =>
  str
    .replace(/([A-Z])/g, '_$1')
    .toLowerCase()
    .replace(/^_/, '');

/**
 * Converts `string` from [Snake Case] to [Camel case]
 * @param {string} The string to convert.
 * @returns {string} Returns the camel cased string.
 *
 * @example
 *
 * snakeToCamel('hello_world')
 * // => 'helloWorld'
 */

const snakeToCamel = (str) => str.replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('_', '').replace('-', ''));

/**
 * Converts `string` from [Sanke Case] to [Pascal case]
 * @param {string} The string to convert.
 * @returns {string} Returns the Pascal cased string.
 *
 * @example
 *
 * snakeToPascal('hello_world')
 * // => 'HelloWorld'
 */

const snakeToPascal = (str) => str.replace(/(_\w)/g, (group) => group[1].toUpperCase()).replace(/^./, (char) => char.toUpperCase());

/**
 * Converts `string` from [Snake case] to [Kebab Case]
 * @param {string} The string to convert.
 * @returns {string} Returns the Snake cased string.
 *
 * @example
 *
 * snakeToKebab('hello_world')
 * // => 'hello-world'
 */

const snakeToKebab = (str) => str.replace(/_/g, '-');

/**
 * Chunks an array into smaller arrays of a specified size.
 * @param {array}
 * @param {number} Number of chunks to be derived
 *
 * @example
 *
 * chunk([1, 2, 3, 4, 5], 2);
 * // => [[1,2],[3,4],[5]]
 */

const chunk = (arr, size) => {
  // Handle undefined array or empty array or zero chunk size
  if (!arr || arr.length === 0 || size <= 0) {
    return [];
  }

  // Round up non-integer chunk size
  size = Math.ceil(size);

  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
};

/**
 * Utility method to measure of the similarity between two strings. This method is designed to
 * compute the Levenshtein distance between two strings.
 * @param {string} source - source string to be compared with.
 * @param {string} target - target string to be compared with.
 * @returns {number}
 *
 * @example
 *
 * compareStrings('WONDERWOMEN','WONDER WOMEN');
 * // => 0
 *
 * compareStrings('Mighty','Almighty');
 * // => 2
 */

const compareStrings = (source, target) => {
  const cleanString = (str) => str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  source = cleanString(source);
  target = cleanString(target);

  const n = source.length;
  const m = target.length;

  if (n === 0) return m;
  if (m === 0) return n;

  const diff = Array.from({ length: n + 1 }, (_, i) => Array(m + 1).fill(0));

  for (let i = 0; i <= n; i++) diff[i][0] = i;
  for (let j = 0; j <= m; j++) diff[0][j] = j;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      const cost = source[i - 1] === target[j - 1] ? 0 : 1;
      diff[i][j] = Math.min(diff[i - 1][j] + 1, diff[i][j - 1] + 1, diff[i - 1][j - 1] + cost);
    }
  }

  return diff[n][m];
};

/**
 * Returns the previous date as given, with the given delimiter
 * @param {number} Number to define how many days to go back
 * @param {string} Delimiter to be used in return date value
 *
 * @example
 *
 * backDate(30, '/', 'MMDDYYYY');
 * // => returns 30 days previous date in MMDDYYYY format with '/' as delimiter
 *
 * backDate(40, '-');
 * // => returns 45 days previous date in DDMMYYYY format with '-' as delimiter
 *
 * backDate(90);
 * // => returns 90 days previous date in DDMMYYYY format with '/' as delimiter
 *
 */

const backDate = (days, delimiter = '/', format = 'DDMMYYYY') => {
  const date = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  const formats = {
    MMDDYYYY: `${month}${delimiter}${day}${delimiter}${year}`,
    YYYYMMDD: `${year}${delimiter}${month}${delimiter}${day}`,
    DDMMYYYY: `${day}${delimiter}${month}${delimiter}${year}`,
  };

  return formats[format] || formats['DDMMYYYY'];
};

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

const deepFreeze = (obj) => {
  Reflect.ownKeys(obj).forEach((name) => {
    const value = obj[name];
    if (value && typeof value === 'object') {
      deepFreeze(value);
    }
  });
  return Object.freeze(obj);
};

/**
 * Utility method to find out whether the given string exists in a nested array of
 * objects.
 * @param {array} arr - Array of objects (could be nested also)
 * @param {string} key - key value
 * @param {string} str - string to be identified
 *
 * @example
 *
 * const nestedArray = [
 *   { key: 'value1', nested: { key: 'value2', deepNested: [{ key: 'value3' }] } },
 *   { key: 'value4', nested: [{ key: 'value5'}, { deepNested: [{ key: 'value6' }] }] },
 *   { key: 'value7', nested: { key: 'value8', deepNested: [{ key: 'value9' }] } }
 * ];
 *
 * doesExist(nestedArray, 'key', 'value3');     // => true
 * doesExist(nestedArray, 'key', 'value10');    // => false
 * doesExist(nestedArray, 'key', 'value5');     // => true
 * doesExist(nestedArray, 'key', 'value7');     // => true
 * doesExist(nestedArray, 'key', 'value9');     // => true
 * doesExist(nestedArray, 'key', 'value1');     // => true
 *
 */

const doesExist = (arr, key, str) => {
  const checkNested = (obj) => {
    if (typeof obj !== 'object' || obj === null) return false;
    if (Array.isArray(obj)) return obj.some(checkNested);

    if (obj[key] == str) return true;

    return Object.values(obj).some((value) => checkNested(value));
  };

  return arr.some(checkNested);
};

/**
 * This method sanitizes the user input in HTML templates to prevent
 * XSS attacks.This technique ensures that user-generated content is
 * safely inserted into the DOM without executing any malicious scripts.
 * @param {string} String with HTML tags
 * @returns {string} String with HTML entities
 *
 * @example
 *
 * escapeHtml('AT&T');
 * // => AT&amp;T
 *
 * escapeHtml('<div>');
 * // => &lt;div&gt;
 *
 * escapeHtml('</div>');
 * // => &lt;/div&gt;
 *
 * escapeHtml("O'Reilly");
 * // => O&#39;Reilly
 *
 * escapeHtml('He said, "Hello"');
 * // => He said, &quot;Hello&quot;
 *
 */

const escapeHtml = (str) => {
  if (typeof str !== 'string') {
    return ''; // Or handle undefined input as needed
  }

  str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');
  return str;
};

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

const flattenObject = (obj, parent, res = {}) => {
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

/**
 * Utility method to convert any string to SEO friendly URL string
 * @param {string} Normal string
 * @returns {string} Returns SEO friendly URL string
 *
 * @example
 *
 * const testString = "Evanston, IN 47531, USA pizza food & wine & music";
 * friendlyUrlString(testString);
 * // => evanston-in-47531-usa-pizza-food-wine-music
 *
 */

const friendlyUrlString = (str) => {
  let chars = 'ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖÙÚÛÜÝßàáâãäåæçèéêëìíîïðñòóôõöùúûüýÿ';
  let cleanChars = 'aaaaaaaceeeeiiiidnooooouuuuysaaaaaaaceeeeiiiidnooooouuuuyy';
  str = str || '';
  return str
    .trim()
    .split('')
    .map((c) => {
      let idx = chars.indexOf(c);
      return idx > -1 ? cleanChars[idx] : c;
    })
    .join('')
    .toLowerCase()
    .replace(/[&?]/gi, '')
    .replace(/\s\s/g, '-')
    .replace(/\s/g, '-')
    .replace(/-+/g, '-')
    .replace(/[^a-z0-9-]/gi, '')
    .trim();
};

/**
 * Utility method to groupBy array of objects by given element of its object
 * @param {array}  Array of objects
 * @param {string}  The identification key to apply the groupBy
 * @returns {object}
 *
 * @exmaple
 *
 * const products = [
 *   { name: 'apples', category: 'fruits' },
 *   { name: 'oranges', category: 'fruits' },
 *   { name: 'potatoes', category: 'vegetables' }
 * ];
 *
 * groupByArrayOfObjects(products, 'category');
 *
 * //
 * {
 *   'fruits': [
 *     { name: 'apples', category: 'fruits' },
 *     { name: 'oranges', category: 'fruits' },
 *   ],
 *   'vegetables': [
 *     { name: 'potatoes', category: 'vegetables' }
 *   ]
 * }
 *
 */

const groupByArrayOfObjects = (collection, identifier) => {
  return collection.reduce((hash, obj) => {
    if (typeof obj !== 'object' || obj === null || obj[identifier] === undefined) {
      return hash; // Skip non-object elements
    }
    return Object.assign(hash, { [obj[identifier]]: (hash[obj[identifier]] || []).concat(obj) });
  }, {});
};

/**
 * Returns the common elements of 2 arrays in a new array
 * @param {array}
 * @param {array}
 *
 * @example
 *
 * intersection([1, 2, 3, 4], [2, 4, 6, 8]);
 * // => [2, 4]
 *
 */
const intersection = (arr1, arr2) => {
  const set1 = new Set(arr1);
  return arr2.filter((value) => set1.has(value));
};

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

const mapToJson = (map) => {
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

const jsonToMap = (jsonString) => {
  // Parse the JSON string to an object
  const obj = JSON.parse(jsonString);

  // Convert the object to a Map
  return new Map(Object.entries(obj));
};

/**
 * Utility method to move an array element from one position to another
 * @param {number} from index
 * @param {number} to index
 * @returns {array} returns the update array
 *
 * @example
 *
 * var arr = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
 * arr.move(4, 1);
 * // => ["a", "e", "b", "c", "d", "f", "g", "h"]
 *
 * var arr = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
 * arr.move(0, 7).join(', ');
 * // => "b, c, d, e, f, g, h, a"
 *
 */

function move(fromIndex, toIndex) {
  this.splice(toIndex, 0, this.splice(fromIndex, 1)[0]);
  return this;
}

function addMoveToArrayPrototype() {
  Array.prototype.move = move;
}

/**
 * Utility method to extract the value of the given property
 * from each object in the collection.
 * @param {array} Array of objects
 * @param {number} The key to extract the attribute
 * @returns {array} Returns the array of extracted values
 *
 * @example
 *
 * const list = [
 *   {name: 'jack', age: 14},
 *   {name: 'jill', age: 15},
 *   {name: 'humpty', age: 16}
 * ];
 *
 * pluck(list, 'age');
 * // => [14, 15, 16]
 *
 */

const pluck = (store, key) => {
  return store.map((o) => o[key]);
};

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

const shuffle = (arr) => {
  // Create a copy of the original array
  const newArr = [...arr];

  // Fisher-Yates (Knuth) Shuffle algorithm
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }

  return newArr;
};

/**
 * Utility method to order the objects of the collection by the given property
 * of its object element
 * @param {array} Array of objects
 * @param {string} The identification key to apply the sort
 * @param {string} Tells the order. Values should be -> ASC || DESC
 * @returns {array} Sorted array of objects
 *
 * @example
 *
 * const data = [
 *   { name: 'John', age: 30 },
 *   { name: 'Alice', age: 25 },
 *   { name: 'Bob', age: 35 }
 * ];
 *
 * sortByProperty(data, 'age', 'ascending');
 * // => [{age: 25, name: "Alice"}, {age: 30, name: "John"}, {age: 35, name: "Bob"}]
 *
 * sortByProperty(data, 'age', 'descending');
 * // => [{age: 35, name: "Bob"}, {age: 30, name: "John"}, {age: 25, name: "Alice"}]
 */

const sortArrayOfObjects = (collection, identifier, order = 'ASC') => {
  const sortOrder = order === 'DESC' ? -1 : 1;
  return collection.slice().sort((a, b) => (a[identifier] > b[identifier] ? sortOrder : -sortOrder));
};

/**
 * Utility method to remove HTML tags from string.
 * @param str Given string
 * @returns Processed string
 *
 * @example
 *
 */
const stripHtmlTags = (str) => {
  str = str.toString();
  return str.replace(/<[^>]*>/g, '');
};

/**
 * Converts `Object/Array` keys.
 * @param {Object/Array} [] The Object/Array to convert.
 * @param {transformCase} [function] The function return the Object/Array keys into respective case.
 * @returns {Object/Array} Returns the transformed Object.
 *
 * @example
 * const Object = {
    firstleVel: {
     second_level: [{
        third_level: 'check'
       },
       {
         third_level_i: {
           fourth_level: 'check forth level'
          }
        },
      ],
    },
   };

  const resObject = transformKeys(Object, snakeToCamel);

  resObject =  {
    firstleVel: {
      secondLevel: [{
       thirdLevel: "check"
      }, {
        thirdLevelI: {
          fourthLevel: "check forth level"
        }
      }]
    }
  }
 */

const transformKeys = (obj, transformCase) => {
  if (Array.isArray(obj)) {
    return obj.map((item) => (typeof item === 'object' && item !== null ? transformKeys(item, transformCase) : item));
  } else {
    let newObject = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (Array.isArray(obj[key])) {
          newObject[transformCase(key)] = obj[key].map((item) =>
            typeof item === 'object' && item !== null ? transformKeys(item, transformCase) : item
          );
        } else if (obj[key] === null) {
          newObject[transformCase(key)] = null;
        } else if (typeof obj[key] === 'object') {
          newObject[transformCase(key)] = transformKeys(obj[key], transformCase);
        } else {
          newObject[transformCase(key)] = obj[key];
        }
      }
    }
    return newObject;
  }
};

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

const uniqArrayOfObjects = (store) => {
  const uniq = new Set(store.map((e) => JSON.stringify(e)));
  return Array.from(uniq).map((e) => JSON.parse(e));
};

/**
 * Generates a UUID (version 4) string in the format 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.
 * @returns {string} The generated UUID.
 */

const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

/**
 * Generates a short UUID-like string in the format 'xxxxxxxx-xxxx'.
 * @returns {string} The generated short UUID-like string.
 */

const uuidShort = () => {
  return 'xxxxxxxx-xxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

module.exports = {
  addMoveToArrayPrototype: addMoveToArrayPrototype,
  areSameArrays: areSameArrays,
  backDate: backDate,
  camelToKebab: camelToKebab,
  camelToSnake: camelToSnake,
  camelToPascal: camelToPascal,
  chunk: chunk,
  compareStrings: compareStrings,
  deepFreeze: deepFreeze,
  doesExist: doesExist,
  escapeHtml: escapeHtml,
  flattenObject: flattenObject,
  friendlyUrlString: friendlyUrlString,
  groupByArrayOfObjects: groupByArrayOfObjects,
  intersection: intersection,
  jsonToMap: jsonToMap,
  mapToJson: mapToJson,
  kebabToCamel: kebabToCamel,
  kebabToPascal: kebabToPascal,
  kebabToSnake: kebabToSnake,
  pascalToCamel: pascalToCamel,
  pascalToKebab: pascalToKebab,
  pascalToSnake: pascalToSnake,
  pluck: pluck,
  shuffle: shuffle,
  snakeToCamel: snakeToCamel,
  snakeToKebab: snakeToKebab,
  snakeToPascal: snakeToPascal,
  sortArrayOfObjects: sortArrayOfObjects,
  stripHtmlTags: stripHtmlTags,
  transformKeys: transformKeys,
  uniqArrayOfObjects: uniqArrayOfObjects,
  uuid: uuid,
  uuidShort: uuidShort,
};
