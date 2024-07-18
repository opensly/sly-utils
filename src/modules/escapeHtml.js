/**
 * This method sanitizes the user input in HTML templates to prevent
 * XSS attacks.This technique ensures that user-generated content is
 * safely inserted into the DOM without executing any malicious scripts.
 * @param {string} String with HTML tags
 * @returns {string} String with HTML entities
 *
 * @example
 *
 * escapeHtml('AT&T');
 * // => AT&amp;T
 *
 * escapeHtml('<div>');
 * // => &lt;div&gt;
 *
 * escapeHtml('</div>');
 * // => &lt;/div&gt;
 *
 * escapeHtml("O'Reilly");
 * // => O&#39;Reilly
 *
 * escapeHtml('He said, "Hello"');
 * // => He said, &quot;Hello&quot;
 *
 */

export const escapeHtml = (str) => {
  if (typeof str !== 'string') {
    return ''; // Or handle undefined input as needed
  }

  str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');
  return str;
};
