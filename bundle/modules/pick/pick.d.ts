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
export declare const pick: (obj: Record<string, any>, keys: string[]) => Record<string, any>;
export declare const omit: (obj: Record<string, any>, keys: string[]) => Record<string, any>;
export declare const pickBy: (obj: Record<string, any>, predicate: (value: any, key: string) => boolean) => Record<string, any>;
export declare const omitBy: (obj: Record<string, any>, predicate: (value: any, key: string) => boolean) => Record<string, any>;
