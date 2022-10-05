/**
 * Utility method to pluck a key from array of objects
 * @param array source array
 * @param key key to extract/pluck
 */
export const pluck = (store, key) => { return store.map(o => o[key]); }
