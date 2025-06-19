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

export const backDate = (
  days: number,
  delimiter: string = '/',
  format: 'MMDDYYYY' | 'YYYYMMDD' | 'DDMMYYYY' = 'DDMMYYYY'
): string => {
  const date = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  const formats: Record<string, string> = {
    MMDDYYYY: `${month}${delimiter}${day}${delimiter}${year}`,
    YYYYMMDD: `${year}${delimiter}${month}${delimiter}${day}`,
    DDMMYYYY: `${day}${delimiter}${month}${delimiter}${year}`,
  };

  return formats[format] || formats['DDMMYYYY'];
};
