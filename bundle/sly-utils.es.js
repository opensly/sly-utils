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
 * Returns the previous date as given, with the given delimiter
 * @param {number} Number to define how many days to go back
 * @param {string} Delimiter to be used in return date value
 *
 * @example
 *
 * backDate(30, '/');
 * // => returns 30 days previous date with '/' as delimiter
 */

const backDate = (days, delimiter) => {
  const date = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return `${day}${delimiter}${month}${delimiter}${year}`;
};

/**
 * Utility method to escape HTML tags as HTML entities
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
  if (typeof str === 'undefined') {
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

module.exports = {
  addMoveToArrayPrototype: addMoveToArrayPrototype,
  camelToKebab: camelToKebab,
  camelToSnake: camelToSnake,
  chunk: chunk,
  backDate: backDate,
  escapeHtml: escapeHtml,
  flattenObject: flattenObject,
  friendlyUrlString: friendlyUrlString,
  groupByArrayOfObjects: groupByArrayOfObjects,
  intersection: intersection,
  kebabToCamel: kebabToCamel,
  pluck: pluck,
  shuffle: shuffle,
  snakeToCamel: snakeToCamel,
  sortArrayOfObjects: sortArrayOfObjects,
  stripHtmlTags: stripHtmlTags,
  transformKeys: transformKeys,
  uniqArrayOfObjects: uniqArrayOfObjects,
};
