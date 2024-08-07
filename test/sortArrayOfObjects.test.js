import { expect } from 'chai';
import { sortArrayOfObjects } from '../src/modules/sortArrayOfObjects.js';

describe('validate: sort the array of objects by a given identifier', () => {
  const collection = [
    { id: 1, name: 'John' },
    { id: 3, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];

  it('should sort objects by identifier in ascending order by default', () => {
    const sorted = sortArrayOfObjects(collection, 'id');
    expect(sorted).to.deep.equal([
      { id: 1, name: 'John' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Alice' },
    ]);
  });

  it('should sort objects by identifier in descending order', () => {
    const sorted = sortArrayOfObjects(collection, 'id', 'DESC');
    expect(sorted).to.deep.equal([
      { id: 3, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 1, name: 'John' },
    ]);
  });

  it('should return a new sorted array without modifying the original collection', () => {
    const original = collection.slice(); // Create a copy of the original collection
    sortArrayOfObjects(collection, 'id');
    expect(collection).to.deep.equal(original); // Check if original collection is unchanged
  });
});
