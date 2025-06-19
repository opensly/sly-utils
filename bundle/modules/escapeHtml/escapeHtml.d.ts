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
export declare const escapeHtml: (str: string) => string;
