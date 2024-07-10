import { expect } from 'chai';
import { compareStrings } from '../src/modules/compareStrings.js';

describe('compareString', () => {
  it('should return 0 for identical strings', () => {
    expect(compareStrings('test', 'test')).to.equal(0);
  });

  it('should return the length of the string if the other string is empty', () => {
    expect(compareStrings('test', '')).to.equal(4);
    expect(compareStrings('', 'test')).to.equal(4);
  });

  it('should be case insensitive', () => {
    expect(compareStrings('TEST', 'test')).to.equal(0);
    expect(compareStrings('Test', 'tEst')).to.equal(0);
  });

  it('should ignore non-alphanumeric characters', () => {
    expect(compareStrings('t.e.s.t', 'test')).to.equal(0);
    expect(compareStrings('WONDERWOMEN', 'WONDER WOMEN')).to.equal(0);
    expect(compareStrings('HELLO WORLD', 'HELLO WORLD!')).to.equal(0);
  });

  it('should return the correct Levenshtein distance', () => {
    expect(compareStrings('kitten', 'sitting')).to.equal(3);
    expect(compareStrings('flaw', 'lawn')).to.equal(2);
  });

  it('should handle strings with different lengths', () => {
    expect(compareStrings('short', 'a much longer string')).to.be.above(5);
  });
});
