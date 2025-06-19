import { doesExist } from './doesExist';

describe('validate: the given string does exists in the array of objects', () => {
  const nestedArray = [
    { key: 'value1', nested: { key: 'value2', deepNested: [{ key: 'value3' }] } },
    { key: 'value4', nested: { key: 'value5', deepNested: [{ key: 'value6' }] } },
    { key: 'value7', nested: { key: 'value8', deepNested: [{ key: 'value9' }] } },
  ];

  it('should return true if the string exists in the nested array', () => {
    expect(doesExist(nestedArray, 'key', 'value3')).toBe(true);
    expect(doesExist(nestedArray, 'key', 'value5')).toBe(true);
    expect(doesExist(nestedArray, 'key', 'value9')).toBe(true);
  });

  it('should return false if the string does not exist in the nested array', () => {
    expect(doesExist(nestedArray, 'key', 'value10')).toBe(false);
    expect(doesExist(nestedArray, 'key', 'nonexistent')).toBe(false);
  });

  it('should handle edge cases like empty array or null objects', () => {
    expect(doesExist([], 'key', 'value1')).toBe(false);
    expect(doesExist([{ key: 'value1' }, null, {}], 'key', 'value1')).toBe(true);
  });
});
