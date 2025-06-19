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

export const transformKeys = (
  obj: any,
  transformCase: (key: string) => string
): any => {
  if (Array.isArray(obj)) {
    return obj.map((item) => (typeof item === 'object' && item !== null ? transformKeys(item, transformCase) : item));
  } else {
    let newObject: { [key: string]: any } = {};
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
