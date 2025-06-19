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
export declare const friendlyUrlString: (str: string) => string;
