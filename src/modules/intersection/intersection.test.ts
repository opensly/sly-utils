import { intersection } from './intersection';

describe('validate: get the intersection of given two arrays', () => {
  it('should return common elements between two arrays', () => {
    const arr1: any[] = [1, 2, 3, 4, 5];
    const arr2: any[] = [3, 4, 5, 6, 7];
    const expected: any[] = [3, 4, 5];
    expect(intersection(arr1, arr2)).toEqual(expected);
  });

  it('should handle arrays with no common elements', () => {
    const arr1: any[] = [1, 2, 3];
    const arr2: any[] = [4, 5, 6];
    const expected: any[] = [];
    expect(intersection(arr1, arr2)).toEqual(expected);
  });

  it('should handle arrays with all common elements', () => {
    const arr1: any[] = [1, 2, 3];
    const arr2: any[] = [1, 2, 3];
    const expected: any[] = [1, 2, 3];
    expect(intersection(arr1, arr2)).toEqual(expected);
  });

  it('should handle empty arrays', () => {
    const arr1: any[] = [];
    const arr2: any[] = [];
    const expected: any[] = [];
    expect(intersection(arr1, arr2)).toEqual(expected);
  });

  it('should handle arrays with duplicate elements', () => {
    const arr1: any[] = [1, 2, 2, 3, 3];
    const arr2: any[] = [2, 3, 3, 4];
    const expected: any[] = [2, 3, 3];
    expect(intersection(arr1, arr2)).toEqual(expected);
  });

  it('should handle arrays with different types of elements', () => {
    const arr1: any[] = [1, '2', true, null];
    const arr2: any[] = ['2', false, null, 1];
    const expected: any[] = ['2', null, 1];
    expect(intersection(arr1, arr2)).toEqual(expected);
  });
});
