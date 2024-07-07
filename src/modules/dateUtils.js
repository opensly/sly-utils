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

export const backDate = (days, delimiter) => {
  const date = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return `${day}${delimiter}${month}${delimiter}${year}`;
};
