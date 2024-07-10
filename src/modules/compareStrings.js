/**
 * Utility method to measure of the similarity between two strings. This method is designed to
 * compute the Levenshtein distance between two strings.
 * @param {string} source - source string to be compared with.
 * @param {string} target - target string to be compared with.
 * @returns {number}
 *
 * compareStrings('WONDERWOMEN','WONDER WOMEN');
 * // => 0
 *
 * compareStrings('Mighty','Almighty');
 * // => 2
 */

export const compareStrings = (source, target) => {
  const cleanString = (str) => str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  source = cleanString(source);
  target = cleanString(target);

  const n = source.length;
  const m = target.length;

  if (n === 0) return m;
  if (m === 0) return n;

  const diff = Array.from({ length: n + 1 }, (_, i) => Array(m + 1).fill(0));

  for (let i = 0; i <= n; i++) diff[i][0] = i;
  for (let j = 0; j <= m; j++) diff[0][j] = j;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      const cost = source[i - 1] === target[j - 1] ? 0 : 1;
      diff[i][j] = Math.min(diff[i - 1][j] + 1, diff[i][j - 1] + 1, diff[i - 1][j - 1] + cost);
    }
  }

  return diff[n][m];
};
