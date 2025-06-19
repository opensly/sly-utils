/**
 * Returns the previous date as given, with the given delimiter
 * @param {number} Number to define how many days to go back
 * @param {string} Delimiter to be used in return date value
 *
 * @example
 *
 * backDate(30, '/', 'MMDDYYYY');
 * // => returns 30 days previous date in MMDDYYYY format with '/' as delimiter
 *
 * backDate(40, '-');
 * // => returns 45 days previous date in DDMMYYYY format with '-' as delimiter
 *
 * backDate(90);
 * // => returns 90 days previous date in DDMMYYYY format with '/' as delimiter
 *
 */
export declare const backDate: (days: number, delimiter?: string, format?: "MMDDYYYY" | "YYYYMMDD" | "DDMMYYYY") => string;
