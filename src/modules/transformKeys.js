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

export const transformKeys = (obj, transformCase) => {
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
