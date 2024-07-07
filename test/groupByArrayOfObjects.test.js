import { expect } from 'chai';
import { groupByArrayOfObjects } from '../src/modules/groupByArrayOfObjects.js';

describe('validate: group by array of objects with the given identifier', () => {
  it('should group objects by a specified identifier', () => {
    const input = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 1, name: 'Charlie' },
      { id: 3, name: 'David' },
    ];
    const identifier = 'id';
    const expected = {
      1: [
        { id: 1, name: 'Alice' },
        { id: 1, name: 'Charlie' },
      ],
      2: [{ id: 2, name: 'Bob' }],
      3: [{ id: 3, name: 'David' }],
    };
    expect(groupByArrayOfObjects(input, identifier)).to.deep.equal(expected);
  });

  it('should handle objects without the identifier gracefully', () => {
    const input = [{ id: 1, name: 'Alice' }, { name: 'Bob' }, { id: 1, name: 'Charlie' }, { id: 3, name: 'David' }];
    const identifier = 'id';
    const expected = {
      1: [
        { id: 1, name: 'Alice' },
        { id: 1, name: 'Charlie' },
      ],
      3: [{ id: 3, name: 'David' }],
    };
    expect(groupByArrayOfObjects(input, identifier)).to.deep.equal(expected);
  });

  it('should return an empty object for empty input', () => {
    const input = [];
    const identifier = 'id';
    const expected = {};
    expect(groupByArrayOfObjects(input, identifier)).to.deep.equal(expected);
  });

  it('should handle non-object elements in the collection', () => {
    const input = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, null, { id: 1, name: 'Charlie' }];
    const identifier = 'id';
    const expected = {
      1: [
        { id: 1, name: 'Alice' },
        { id: 1, name: 'Charlie' },
      ],
      2: [{ id: 2, name: 'Bob' }],
    };
    expect(groupByArrayOfObjects(input, identifier)).to.deep.equal(expected);
  });

  it('should handle undefined identifier', () => {
    const input = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 1, name: 'Charlie' },
      { id: 3, name: 'David' },
    ];
    const identifier = 'nonexistent';
    const expected = {};
    expect(groupByArrayOfObjects(input, identifier)).to.deep.equal(expected);
  });
});
