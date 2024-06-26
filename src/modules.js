import { camelToSnake } from './modules/camelToSnake.js';
import { chunk } from './modules/chunk.js';
import { escapeHtml } from './modules/escapeHtml.js';
import { flattenObject } from './modules/flattenObject.js';
import { friendlyUrlString } from './modules/url.js';
import { groupByArrayOfObjects } from './modules/groupByArrayOfObjects.js';
import { intersection } from './modules/intersection.js';
import { addMoveToArrayPrototype } from './modules/move.js';
import { pluck } from './modules/pluck.js';
import { shuffle } from './modules/shuffle.js';
import { snakeToCamel } from './modules/snakeToCamel.js';
import { sortArrayOfObjects } from './modules/sortArrayOfObjects.js';
import { stripHtmlTags } from './modules/stripHtmlTags.js';
import { transformKeys } from './modules/transformKeys.js';
import { uniqArrayOfObjects } from './modules/uniqArrayOfObjects.js';

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
