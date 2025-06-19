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
export declare const transformKeys: (obj: any, transformCase: (key: string) => string) => any;
