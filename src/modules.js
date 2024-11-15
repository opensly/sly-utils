import { areSameArrays } from './modules/areSameArrays.js';
import {
  camelToKebab,
  camelToPascal,
  camelToSnake,
  kebabToCamel,
  kebabToSnake,
  kebabToPascal,
  pascalToCamel,
  pascalToKebab,
  pascalToSnake,
  snakeToCamel,
  snakeToKebab,
  snakeToPascal,
} from './modules/caseConversion.js';
import { chunk } from './modules/chunk.js';
import { compareStrings } from './modules/compareStrings.js';
import { backDate } from './modules/dateUtils.js';
import { deepFreeze } from './modules/deepFreeze.js';
import { doesExist } from './modules/doesExist.js';
import { escapeHtml } from './modules/escapeHtml.js';
import { flattenArray, flattenCompletely, flattenWithDepth } from './modules/flattenArray.js';
import { flattenObject } from './modules/flattenObject.js';
import { friendlyUrlString } from './modules/url.js';
import { groupByArrayOfObjects } from './modules/groupByArrayOfObjects.js';
import { intersection } from './modules/intersection.js';
import { mapToJson, jsonToMap } from './modules/mapAndJson.js';
import { addMoveToArrayPrototype } from './modules/move.js';
import { pluck } from './modules/pluck.js';
import { shuffle } from './modules/shuffle.js';
import { sortArrayOfObjects } from './modules/sortArrayOfObjects.js';
import { stripHtmlTags } from './modules/stripHtmlTags.js';
import { toArray } from './modules/toArray.js';
import { transformKeys } from './modules/transformKeys.js';
import { uniqArrayOfObjects } from './modules/uniqArrayOfObjects.js';
import { uuid, uuidShort } from './modules/uuid.js';

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
  flattenArray: flattenArray, 
  flattenCompletely: flattenCompletely,
  flattenObject: flattenObject,
  flattenWithDepth: flattenWithDepth,
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
  toArray: toArray,
  transformKeys: transformKeys,
  uniqArrayOfObjects: uniqArrayOfObjects,
  uuid: uuid,
  uuidShort: uuidShort,
};
