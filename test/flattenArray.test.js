// test/flattenArray.test.js

import { expect } from 'chai';
import { flattenCompletely, flattenWithDepth, arrayFlatten } from '../src/modules/flattenArray.js';

describe('Flatten Array Functions', function() {
  
  describe('flattenCompletely', function() {
    it('should flatten a deeply nested array completely', function() {
      const array = [1, [2, [3, [4, [5]]]]];
      const result = flattenCompletely(array);
      expect(result).to.deep.equal([1, 2, 3, 4, 5]);
    });

    it('should handle an already flat array', function() {
      const array = [1, 2, 3, 4, 5];
      const result = flattenCompletely(array);
      expect(result).to.deep.equal([1, 2, 3, 4, 5]);
    });

    it('should return an empty array if input is empty', function() {
      const array = [];
      const result = flattenCompletely(array);
      expect(result).to.deep.equal([]);
    });

    it('should return the same array for a non-nested single element', function() {
      const array = [1];
      const result = flattenCompletely(array);
      expect(result).to.deep.equal([1]);
    });

    it('should flatten arrays with mixed data types', function() {
      const array = [1, 'a', [true, [false, ['b']]]];
      const result = flattenCompletely(array);
      expect(result).to.deep.equal([1, 'a', true, false, 'b']);
    });
  });

  describe('flattenWithDepth', function() {
    it('should flatten up to a specific depth', function() {
      const array = [1, [2, [3, [4, [5]]]]];
      const result = flattenWithDepth(array, 2);
      expect(result).to.deep.equal([1, 2, 3, [4, [5]]]);
    });

    it('should flatten to depth 1', function() {
      const array = [1, [2, [3]]];
      const result = flattenWithDepth(array, 1);
      expect(result).to.deep.equal([1, 2, [3]]);
    });

    it('should return the same array if depth is 0', function() {
      const array = [1, [2, [3]]];
      const result = flattenWithDepth(array, 0);
      expect(result).to.deep.equal([1, [2, [3]]]);
    });

    it('should flatten to full depth if depth is greater than the nesting', function() {
      const array = [1, [2, [3]]];
      const result = flattenWithDepth(array, 5);
      expect(result).to.deep.equal([1, 2, 3]);
    });
  });

  describe('arrayFlatten', function() {
    it('should flatten completely when depth is not specified', function() {
      const array = [1, [2, [3, [4, [5]]]]];
      const result = arrayFlatten(array);
      expect(result).to.deep.equal([1, 2, 3, 4, 5]);
    });

    it('should flatten up to a specific depth when depth is specified', function() {
      const array = [1, [2, [3, [4, [5]]]]];
      const result = arrayFlatten(array, 3);
      expect(result).to.deep.equal([1, 2, 3, [4, [5]]]);
    });

    it('should handle an already flat array when depth is specified', function() {
      const array = [1, 2, 3, 4, 5];
      const result = arrayFlatten(array, 1);
      expect(result).to.deep.equal([1, 2, 3, 4, 5]);
    });

    it('should handle an empty array', function() {
      const array = [];
      const result = arrayFlatten(array);
      expect(result).to.deep.equal([]);
    });

    it('should handle array with mixed data types', function() {
      const array = [1, 'a', [true, [false, ['b']]]];
      const result = arrayFlatten(array, 2);
      expect(result).to.deep.equal([1, 'a', true, false, ['b']]);
    });
  });

});
