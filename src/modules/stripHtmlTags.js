/**
 * Utility method to remove HTML tags from string.
 * @param str Given string 
 * @returns Processed string
 * 
 * @example
 * 
 */
export const stripHtmlTags = (str) => {
  str = toString(str);
  return str.replace(/<[^>]*>/g, '');
};
