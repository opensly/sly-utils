import { compareStrings } from './compareStrings';

describe('validate: compare the given 2 strings', () => {
  it('should return 0 for identical strings', () => {
    expect(compareStrings('test', 'test')).toBe(0);
  });

  it('should return the length of the string if the other string is empty', () => {
    expect(compareStrings('test', '')).toBe(4);
    expect(compareStrings('', 'test')).toBe(4);
  });

  it('should be case insensitive', () => {
    expect(compareStrings('TEST', 'test')).toBe(0);
    expect(compareStrings('Test', 'tEst')).toBe(0);
  });

  it('should ignore non-alphanumeric characters', () => {
    expect(compareStrings('t.e.s.t', 'test')).toBe(0);
    expect(compareStrings('WONDERWOMEN', 'WONDER WOMEN')).toBe(0);
    expect(compareStrings('HELLO WORLD', 'HELLO WORLD!')).toBe(0);
  });

  it('should return the correct Levenshtein distance', () => {
    expect(compareStrings('kitten', 'sitting')).toBe(3);
    expect(compareStrings('flaw', 'lawn')).toBe(2);
  });

  it('should handle strings with different lengths', () => {
    expect(compareStrings('short', 'a much longer string')).toBeGreaterThan(5);
  });
});
