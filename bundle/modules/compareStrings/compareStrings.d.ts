/**
 * Utility method to measure of the similarity between two strings. This method is designed to
 * compute the Levenshtein distance between two strings.
 * @param {string} source - source string to be compared with.
 * @param {string} target - target string to be compared with.
 * @returns {number}
 *
 * @example
 *
 * compareStrings('WONDERWOMEN','WONDER WOMEN');
 * // => 0
 *
 * compareStrings('Mighty','Almighty');
 * // => 2
 */
export declare const compareStrings: (source: string, target: string) => number;
