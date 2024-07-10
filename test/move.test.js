import { expect } from 'chai';
import { addMoveToArrayPrototype } from '../src/modules/move.js';

describe('validate: move the position of an element in the given array', () => {
  beforeEach(() => {
    addMoveToArrayPrototype();
  });

  it('should move an element from one index to another', () => {
    let arr = [1, 2, 3, 4, 5];
    arr.move(0, 2);
    expect(arr).to.deep.equal([2, 3, 1, 4, 5]);
  });

  it('should return the array after moving an element', () => {
    let arr = [1, 2, 3, 4, 5];
    let result = arr.move(1, 3);
    expect(result).to.deep.equal([1, 3, 4, 2, 5]);
  });

  it('should handle moving elements within the same index', () => {
    let arr = [1, 2, 3];
    arr.move(1, 1);
    expect(arr).to.deep.equal([1, 2, 3]);
  });

  it('should handle moving elements to the end of the array', () => {
    let arr = [1, 2, 3];
    arr.move(0, 3);
    expect(arr).to.deep.equal([2, 3, 1]);
  });

  it('should handle moving elements to the beginning of the array', () => {
    let arr = [1, 2, 3];
    arr.move(2, 0);
    expect(arr).to.deep.equal([3, 1, 2]);
  });
});

describe('validate: adding move method to array prototype', () => {
  it('should add the move method to Array.prototype', () => {
    let arr = [1, 2, 3];
    addMoveToArrayPrototype();
    expect(arr.move).to.be.a('function');
  });

  it('should correctly move elements using the added move method', () => {
    let arr = [1, 2, 3];
    addMoveToArrayPrototype();
    arr.move(0, 2);
    expect(arr).to.deep.equal([2, 3, 1]);
  });
});
