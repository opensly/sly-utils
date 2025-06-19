/**
 * Chunks an array into smaller arrays of a specified size.
 * @param {array}
 * @param {number} Number of chunks to be derived
 *
 * @example
 *
 * chunk([1, 2, 3, 4, 5], 2);
 * // => [[1,2],[3,4],[5]]
 */
export declare const chunk: <T>(arr: T[], size: number) => T[][];
