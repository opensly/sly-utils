/**
 * Utility method to escape HTML tags as HTML entities
 * @param str Given string
 * @returns Processed string
 * 
 * @example
 * 
 */
export const escapeHtml = (str) => {
  str = toString(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/'/g, '&#39;')
      .replace(/"/g, '&quot;');
  return str;
};
