import { expect } from 'chai';
import { toArray } from '../src/modules/toArray.js';

describe('toArray', () => {
  it('should return an empty array when the value is null', () => {
    expect(toArray(null)).to.deep.equal([]);
  });

  it('should return an empty array when the value is undefined', () => {
    expect(toArray(undefined)).to.deep.equal([]);
  });

  it('should return the same array if the value is already an array', () => {
    const array = [1, 2, 3];
    expect(toArray(array)).to.deep.equal(array);
  });

  it('should wrap a non-array value in an array', () => {
    expect(toArray(5)).to.deep.equal([5]);
    expect(toArray('test')).to.deep.equal(['test']);
    expect(toArray(true)).to.deep.equal([true]);
    expect(toArray({ key: 'value' })).to.deep.equal([{ key: 'value' }]);
  });

  it('should handle empty string as a non-array value and wrap it in an array', () => {
    expect(toArray('')).to.deep.equal(['']);
  });

  it('should handle zero as a non-array value and wrap it in an array', () => {
    expect(toArray(0)).to.deep.equal([0]);
  });
});
