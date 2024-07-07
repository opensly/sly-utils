import { expect } from 'chai';
import { chunk } from '../src/modules/chunk.js';

describe('validate: splitting an array into given number of chunks', () => {
  it('should split the array into chunks of specified size', () => {
    const input = [1, 2, 3, 4, 5, 6, 7];
    const size = 3;
    const expected = [[1, 2, 3], [4, 5, 6], [7]];
    expect(chunk(input, size)).to.deep.equal(expected);
  });

  it('should handle edge case when array length is less than chunk size', () => {
    const input = [1, 2];
    const size = 5;
    const expected = [[1, 2]];
    expect(chunk(input, size)).to.deep.equal(expected);
  });

  it('should handle edge case when array length is equal to chunk size', () => {
    const input = [1, 2, 3];
    const size = 3;
    const expected = [[1, 2, 3]];
    expect(chunk(input, size)).to.deep.equal(expected);
  });

  it('should handle edge case when array length is zero', () => {
    const input = [];
    const size = 4;
    const expected = [];
    expect(chunk(input, size)).to.deep.equal(expected);
  });

  it('should handle edge case when chunk size is zero', () => {
    const input = [1, 2, 3, 4];
    const size = 0;
    const expected = [];
    expect(chunk(input, size)).to.deep.equal(expected);
  });

  it('should return empty array when array is undefined', () => {
    const input = undefined;
    const size = 2;
    const expected = [];
    expect(chunk(input, size)).to.deep.equal(expected);
  });

  it('should return empty array when size is undefined', () => {
    const input = [1, 2, 3];
    const size = undefined;
    const expected = [];
    expect(chunk(input, size)).to.deep.equal(expected);
  });
});
