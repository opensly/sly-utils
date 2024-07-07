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

export const friendlyUrlString = (str) => {
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
