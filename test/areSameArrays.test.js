import { expect } from 'chai';
import { areSameArrays } from '../src/modules/areSameArrays.js';

describe('validate: the given 2 arrays are same', () => {
  it('should return true for identical arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    const result = areSameArrays(arr1, arr2);
    expect(result).to.be.true;
  });

  it('should return false for arrays with different lengths', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2];
    const result = areSameArrays(arr1, arr2);
    expect(result).to.be.false;
  });

  it('should return false for arrays with different elements', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 4];
    const result = areSameArrays(arr1, arr2);
    expect(result).to.be.false;
  });

  it('should return true for empty arrays', () => {
    const arr1 = [];
    const arr2 = [];
    const result = areSameArrays(arr1, arr2);
    expect(result).to.be.true;
  });

  it('should return false for arrays with different data types', () => {
    const arr1 = [1, '2', 3];
    const arr2 = [1, 2, 3];
    const result = areSameArrays(arr1, arr2);
    expect(result).to.be.false;
  });

  it('should return true for arrays with identical elements but different data types', () => {
    const arr1 = [1, 2, '3'];
    const arr2 = [1, 2, 3];
    const result = areSameArrays(arr1, arr2);
    expect(result).to.be.false;
  });

  it('should return true for arrays with identical nested arrays', () => {
    const arr1 = [
      [1, 2],
      [3, 4],
    ];
    const arr2 = [
      [1, 2],
      [3, 4],
    ];
    const result = areSameArrays(arr1, arr2);
    expect(result).to.be.true;
  });

  it('should return false for arrays with different nested arrays', () => {
    const arr1 = [
      [1, 2],
      [3, 4],
    ];
    const arr2 = [
      [1, 2],
      [4, 5],
    ];
    const result = areSameArrays(arr1, arr2);
    expect(result).to.be.false;
  });
});
