import { areSameArrays } from './areSameArrays';

describe('validate: the given 2 arrays are same', () => {
  it('should return true for identical arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    const result = areSameArrays(arr1, arr2);
    expect(result).toBe(true);
  });

  it('should return false for arrays with different lengths', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2];
    const result = areSameArrays(arr1, arr2);
    expect(result).toBe(false);
  });

  it('should return false for arrays with different elements', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 4];
    const result = areSameArrays(arr1, arr2);
    expect(result).toBe(false);
  });

  it('should return true for empty arrays', () => {
    const arr1: any[] = [];
    const arr2: any[] = [];
    const result = areSameArrays(arr1, arr2);
    expect(result).toBe(true);
  });

  it('should return false for arrays with different data types', () => {
    const arr1 = [1, '2', 3];
    const arr2 = [1, 2, 3];
    const result = areSameArrays(arr1, arr2);
    expect(result).toBe(false);
  });

  it('should return true for arrays with identical elements but different data types', () => {
    const arr1 = [1, 2, '3'];
    const arr2 = [1, 2, 3];
    const result = areSameArrays(arr1, arr2);
    expect(result).toBe(false);
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
    expect(result).toBe(true);
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
    expect(result).toBe(false);
  });
});
