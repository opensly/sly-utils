/**
 * Utility method to remove HTML tags from string.
 * @param str Given string
 * @returns Processed string
 *
 * @example
 *
 */
export const stripHtmlTags = (str: string): string => {
  str = str.toString();
  return str.replace(/<[^>]*>/g, '');
};
