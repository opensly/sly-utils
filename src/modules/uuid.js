/**
 * Generates a UUID (version 4) string in the format 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.
 * @returns {string} The generated UUID.
 */

export const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

/**
 * Generates a short UUID-like string in the format 'xxxxxxxx-xxxx'.
 * @returns {string} The generated short UUID-like string.
 */

export const uuidShort = () => {
  return 'xxxxxxxx-xxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
