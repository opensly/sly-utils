import { expect } from 'chai';
import { shuffle } from '../src/modules/shuffle.js';

describe('validate: shuffle the given array', () => {
  it('should shuffle the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);

    // Check if all elements are still present after shuffling
    expect(shuffled).to.have.members(arr);

    // Check if the shuffled array is not the same as the original array
    expect(shuffled).to.not.deep.equal(arr);

    // Check if the length of the shuffled array is the same as the original array
    expect(shuffled).to.have.lengthOf(arr.length);

    // Check if the shuffled array contains all unique elements
    expect(new Set(shuffled).size).to.equal(arr.length);
  });

  it('should return an empty array when given an empty array', () => {
    const arr = [];
    const shuffled = shuffle(arr);

    expect(shuffled).to.be.an('array').that.is.empty;
  });

  it('should not modify the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const originalArr = [...arr]; // Create a copy of the original array
    shuffle(arr);

    // Check if the original array remains unchanged
    expect(arr).to.deep.equal(originalArr);
  });

  it('should handle arrays with duplicate elements correctly', () => {
    const arr = [1, 1, 2, 2, 3, 3];
    const shuffled = shuffle(arr);

    // Check if all elements are still present after shuffling
    expect(shuffled).to.have.members(arr);

    // Check if the length of the shuffled array is the same as the original array
    expect(shuffled).to.have.lengthOf(arr.length);
  });
});
