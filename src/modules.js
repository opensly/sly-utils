import { camelToKebab, camelToSnake, kebabToCamel, snakeToCamel } from './modules/caseConversion.js';
import { chunk } from './modules/chunk.js';
import { compareStrings } from './compareStrings.js';
import { backDate } from './modules/dateUtils.js';
import { doesExist } from './modules/doesExist.js';
import { escapeHtml } from './modules/escapeHtml.js';
import { flattenObject } from './modules/flattenObject.js';
import { friendlyUrlString } from './modules/url.js';
import { groupByArrayOfObjects } from './modules/groupByArrayOfObjects.js';
import { intersection } from './modules/intersection.js';
import { addMoveToArrayPrototype } from './modules/move.js';
import { pluck } from './modules/pluck.js';
import { shuffle } from './modules/shuffle.js';
import { sortArrayOfObjects } from './modules/sortArrayOfObjects.js';
import { stripHtmlTags } from './modules/stripHtmlTags.js';
import { transformKeys } from './modules/transformKeys.js';
import { uniqArrayOfObjects } from './modules/uniqArrayOfObjects.js';

module.exports = {
  addMoveToArrayPrototype: addMoveToArrayPrototype,
  backDate: backDate,
  camelToKebab: camelToKebab,
  camelToSnake: camelToSnake,
  chunk: chunk,
  compareStrings: compareStrings,
  doesExist: doesExist,
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
