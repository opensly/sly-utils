/**
 * Converts `string` from [Camel case] to [Snake Case]
 * @param {string} [str=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 *
 * @example
 *
 * camelToSnake('helloWorld')
 * // => 'hello_world'
 *
 * camelToSnake('firstClass')
 * // => 'first_class'
 *
 */

const camelToSnake = (str) => str.replace(/\.?([A-Z])/g, (group) => '_' + group.toLowerCase().replace(/^_/, ''));

/**
 * Chunks an array into smaller arrays of a specified size.
 * 
 * @example
 * chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]
 */
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

/**
 * Utility method to escape HTML tags as HTML entities
 * @param str Given string
 * @returns Processed string
 * 
 * @example
 * 
 */
const escapeHtml = (str) => {
  str = toString(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/'/g, '&#39;')
      .replace(/"/g, '&quot;');
  return str;
};

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

const flattenObject = (obj, parent, res={}) => {
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
};

/**
 * Utility method to convert any string to SEO friendly URL string
 * @param str Normal string
 * @returns Returns SEO friendly URL string
 *
 * @example
 * const testString = "Evanston, IN 47531, USA pizza food & wine & music";
 * friendlyUrlString(testString); // evanston-in-47531-usa-pizza-food-wine-music
 */

const friendlyUrlString = (str) => {
  let chars = 'ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖÙÚÛÜÝßàáâãäåæçèéêëìíîïðñòóôõöùúûüýÿ';
  let cleanChars = 'aaaaaaaceeeeiiiidnooooouuuuysaaaaaaaceeeeiiiidnooooouuuuyy';
  str = str || '';
  return str
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
 * @param collection  Array of objects
 * @param identifier  The identification key to apply the groupBy
 * @returns grouped object
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
    if (obj[identifier] === undefined) {
      return hash;
    }
    return Object.assign(hash, { [obj[identifier]]: (hash[obj[identifier]] || []).concat(obj) });
  }, {});
};

/**
 * Returns the common elements of 2 arrays in a new array
 * 
 * @example
 * intersection([1, 2, 3, 4], [2, 4, 6, 8]);  // [2, 4]
 *
 */
const intersection = (arr1, arr2) => {
  return arr1.filter(value => arr2.includes(value))
};

/**
 * Utility method to move an array element from one position to another
 * @param fromIndex 
 * @param toIndex 
 * @returns Returns the update array
 * 
 * @example
 * 
 * var arr = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
 * console.log(arr.move(4, 1));
 * // => ["a", "e", "b", "c", "d", "f", "g", "h"]
 * 
 * var arr = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
 * console.log(arr.move(0, 7).join(', '));
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
 * @param store Array of objects
 * @param key The key to extract the attribute
 * @returns Returns the array of extracted values
 *
 * @example
 *
 * const list = [
 *   {name: 'jack', age: 14},
 *   {name: 'jill', age: 15},
 *   {name: 'humpty', age: 16}
 * ];
 *
 * pluck(list, 'age'); // [14, 15, 16]
 *
 */

const pluck = (store, key) => {
  return store.map((o) => o[key]);
};

/**
 * Utility method to shuffle the given array and returns
 * the shuffled array.
 * @param arr Array of values
 * @returns Returns the array of shuffled values
 *
 * @example
 * const list = ['apple', 'banana', 'cherry', 'grapes', 'jackfruit', 'kiwi'];
 * shuffle(list); // ["jackfruit", "apple", "kiwi", "grapes", "banana", "cherry"]
 */

const shuffle = (arr) => {
  let temp = [];
  while (arr.length > 0) {
    let random = Math.floor(Math.random() * arr.length);
    temp.push(arr.splice(random, 1));
  }
  return temp.flat();
};

/**
 * Converts `string` from [Snake Case] to [Camel case]
 * @param {string} [str=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 *
 * @example
 *
 * snakeToCamel('hello_world')
 * // => 'helloWorld'
 *
 * camelToSnake('first_class')
 * // => 'firstClass'
 *
 */

const snakeToCamel = (str) => str.replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('_', '').replace('-', ''));

/**
 * Utility method to order the objects of the collection by the given property
 * of its object element
 * @param collection  Array of objects
 * @param identifier  The identification key to apply the sort
 * @param order Tells the order. Values should be -> ASC || DESC
 * @returns   Sorted array of objects
 * 
 * @example 
 * 
 * const data = [
 *   { name: 'John', age: 30 },
 *   { name: 'Alice', age: 25 },
 *   { name: 'Bob', age: 35 }
 * ];
 * 
 * console.log(sortByProperty(data, 'age', 'ascending'));
 * [{age: 25, name: "Alice"}, {age: 30, name: "John"}, {age: 35, name: "Bob"}]
 * 
 * console.log(sortByProperty(data, 'age', 'descending'));
 * [{age: 35, name: "Bob"}, {age: 30, name: "John"}, {age: 25, name: "Alice"}]
 */

const sortArrayOfObjects = (collection, identifier, order='ASC') => {
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
  str = toString(str);
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
    let newArray = [];
    obj.forEach((item) => {
      if (typeof item === 'object') {
        newArray.push(transformKeys(item, transformCase));
      } else {
        newArray.push(item);
      }
    });
    return newArray;
  } else {
    let newObject = {};
    for (let ob in obj) {
      if (Array.isArray(obj[ob])) {
        let newArray = [];
        obj[ob].forEach((item) => {
          if (typeof item === 'object') {
            newArray.push(transformKeys(item, transformCase));
          } else {
            newArray.push(item);
          }
        });
        newObject[transformCase(ob)] = newArray;
      } else if (obj[ob] === null) {
        newObject[transformCase(ob)] = null;
      } else if (typeof obj[ob] === 'object') {
        newObject[transformCase(ob)] = transformKeys(obj[ob], transformCase);
      } else {
        newObject[transformCase(ob)] = obj[ob];
      }
    }
    return newObject;
  }
};

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

const uniqArrayOfObjects = (store) => {
  const uniq = new Set(store.map((e) => JSON.stringify(e)));
  return Array.from(uniq).map((e) => JSON.parse(e));
};

module.exports = {
  addMoveToArrayPrototype: addMoveToArrayPrototype,
  camelToSnake: camelToSnake,
  chunk: chunk,
  escapeHtml: escapeHtml,
  flattenObject: flattenObject,
  friendlyUrlString: friendlyUrlString,
  groupByArrayOfObjects: groupByArrayOfObjects,
  intersection: intersection,
  pluck: pluck,
  shuffle: shuffle,
  snakeToCamel: snakeToCamel,
  sortArrayOfObjects: sortArrayOfObjects,
  stripHtmlTags: stripHtmlTags,
  transformKeys: transformKeys,
  uniqArrayOfObjects: uniqArrayOfObjects,
};
