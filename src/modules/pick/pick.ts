/**
 * Utilities to pick/omit properties from objects with support for nested path strings like 'a.b[0].c'.
 * - pick(obj, keys): returns a new object with only the specified keys or paths
 * - omit(obj, keys): returns a new object without the specified keys or paths
 * - pickBy(obj, predicate): returns a new object with keys where predicate(value,key) is true (shallow)
 * - omitBy(obj, predicate): returns a new object with keys where predicate(value,key) is false (shallow)
 *
 * Security notes:
 * - Only own enumerable string keys are considered (uses Object.keys / hasOwnProperty)
 * - Dangerous keys that can lead to prototype-pollution are explicitly skipped: "__proto__", "constructor", "prototype"
 * - For nested path operations (pick/omit), any path that contains a dangerous segment is ignored
 * - Inputs that are not objects return an empty object
 */

const SKIP_KEYS = new Set(['__proto__', 'constructor', 'prototype']);

const PATH_REGEX = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])(.*?)\2)\]/g;

const isNumeric = (s: string) => /^-?\d+$/.test(s);

const parsePath = (path: string | Array<string | number>): string[] => {
  if (Array.isArray(path)) return path.map((p) => String(p));
  const result: string[] = [];
  if (typeof path !== 'string' || path.length === 0) return result;
  let match: RegExpExecArray | null;
  // eslint-disable-next-line no-cond-assign
  while ((match = PATH_REGEX.exec(path))) {
    if (match[1] !== undefined) result.push(String(match[1]));
    else if (match[3] !== undefined) result.push(match[3]);
    else result.push(match[0]);
  }
  return result;
};

const getPath = (obj: any, parts: string[]): { exists: boolean; value?: any } => {
  let cur = obj;
  for (const seg of parts) {
    if (cur == null) return { exists: false };
    // Only consider own properties
    if (!Object.prototype.hasOwnProperty.call(cur, seg)) return { exists: false };
    cur = cur[seg];
  }
  return { exists: true, value: cur };
};

const setDeep = (target: any, parts: string[], value: any) => {
  if (!parts.length) return;
  let cur = target;
  for (let i = 0; i < parts.length; i++) {
    const seg = parts[i];
    if (SKIP_KEYS.has(seg)) return; // Do not create paths that mutate prototypes
    const last = i === parts.length - 1;
    const nextIsIndex = i + 1 < parts.length && isNumeric(parts[i + 1]);

    if (last) {
      // assign
      if (isNumeric(seg) && Array.isArray(cur)) {
        cur[Number(seg)] = value;
      } else {
        cur[seg] = value;
      }
      return;
    }

    // ensure container exists
    let next = cur[seg];
    if (next === undefined) {
      next = nextIsIndex ? [] : {};
      // use hasOwnProperty style assignment to avoid triggering setters on prototype
      Object.defineProperty(cur, seg, {
        value: next,
        writable: true,
        enumerable: true,
        configurable: true,
      });
    }
    cur = next;
  }
};

export const pick = (obj: Record<string, any>, keys: string[]): Record<string, any> => {
  const res: Record<string, any> = {};
  if (!obj || typeof obj !== 'object') return res;
  if (!Array.isArray(keys)) return res;

  // avoid duplicate paths
  const seen = new Set<string>();

  for (const k of keys) {
    if (typeof k !== 'string') continue;
    const parts = parsePath(k);
    if (!parts.length) {
      // simple empty key -> skip
      continue;
    }
    // skip if any segment is dangerous
    if (parts.some((p) => SKIP_KEYS.has(p))) continue;
    const keyId = parts.join('\u0000');
    if (seen.has(keyId)) continue;
    seen.add(keyId);

    // for single-segment keys, preserve original shallow semantics
    if (parts.length === 1) {
      const seg = parts[0];
      if (SKIP_KEYS.has(seg)) continue;
      if (Object.prototype.hasOwnProperty.call(obj, seg)) {
        res[seg] = obj[seg];
      }
      continue;
    }

    const { exists, value } = getPath(obj, parts);
    if (!exists) continue;

    // build nested structure in result
    setDeep(res, parts, value);
  }

  return res;
};

// Helper: normalize path strings to arrays of segments and filter out dangerous ones
const normalizePaths = (keys: string[] | undefined): string[][] => {
  if (!Array.isArray(keys)) return [];
  const paths: string[][] = [];
  for (const k of keys) {
    if (typeof k !== 'string') continue;
    const parts = parsePath(k);
    if (!parts.length) continue;
    if (parts.some((p) => SKIP_KEYS.has(p))) continue; // ignore dangerous paths
    paths.push(parts);
  }
  return paths;
};

const samePath = (a: string[], b: string[]) => {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
  return true;
};

const startsWithPath = (full: string[], prefix: string[]) => {
  if (prefix.length > full.length) return false;
  for (let i = 0; i < prefix.length; i++) if (full[i] !== prefix[i]) return false;
  return true;
};

export const omit = (obj: Record<string, any>, keys: string[]): Record<string, any> => {
  if (!obj || typeof obj !== 'object') return {};
  const paths = normalizePaths(keys);

  // If none of the keys are nested paths (all length 1), preserve old behavior
  const allShallow = paths.every((p) => p.length === 1);
  if (allShallow) {
    const skip = new Set(paths.map((p) => p[0]));
    const res: Record<string, any> = {};
    for (const k of Object.keys(obj)) {
      if (SKIP_KEYS.has(k) || skip.has(k)) continue;
      res[k] = obj[k];
    }
    return res;
  }

  // deep clone while omitting exact-matching paths
  const shouldOmitExact = (currentPath: string[]) => paths.some((p) => samePath(p, currentPath));

  const cloneAndOmit = (node: any, currentPath: string[]): any => {
    if (node == null || typeof node !== 'object') return node;
    if (Array.isArray(node)) {
      const out: any[] = [];
      for (let i = 0; i < node.length; i++) {
        const childPath = currentPath.concat(String(i));
        // If the entire array element path is to be omitted, skip it
        if (shouldOmitExact(childPath)) {
          // Skip creating this element (leave hole)
          continue;
        }
        out[i] = cloneAndOmit(node[i], childPath);
      }
      return out;
    }

    const res: Record<string, any> = {};
    for (const k of Object.keys(node)) {
      if (SKIP_KEYS.has(k)) continue;
      const childPath = currentPath.concat(k);
      if (shouldOmitExact(childPath)) continue;

      // If there's no nested path under this key, copy shallowly
      const hasNested = paths.some((p) => startsWithPath(p, childPath));
      if (!hasNested) {
        res[k] = node[k];
      } else {
        res[k] = cloneAndOmit(node[k], childPath);
      }
    }
    return res;
  };

  return cloneAndOmit(obj, []);
};

export const pickBy = (obj: Record<string, any>, predicate: (value: any, key: string) => boolean): Record<string, any> => {
  const res: Record<string, any> = {};
  if (!obj || typeof obj !== 'object') return res;
  if (typeof predicate !== 'function') return res;
  for (const k of Object.keys(obj)) {
    if (SKIP_KEYS.has(k)) continue;
    const v = obj[k];
    try {
      if (predicate(v, k)) res[k] = v;
    } catch (e) {
      // swallow predicate errors and treat as false
    }
  }
  return res;
};

export const omitBy = (obj: Record<string, any>, predicate: (value: any, key: string) => boolean): Record<string, any> => {
  const res: Record<string, any> = {};
  if (!obj || typeof obj !== 'object') return res;
  if (typeof predicate !== 'function') return res;
  for (const k of Object.keys(obj)) {
    if (SKIP_KEYS.has(k)) continue;
    const v = obj[k];
    try {
      if (!predicate(v, k)) res[k] = v;
    } catch (e) {
      // swallow predicate errors and keep the key
      res[k] = v;
    }
  }
  return res;
};
