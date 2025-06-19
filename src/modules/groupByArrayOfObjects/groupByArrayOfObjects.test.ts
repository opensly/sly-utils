import { groupByArrayOfObjects } from './groupByArrayOfObjects';

describe('validate: groupByArrayOfObjects utility', () => {
  it('should group objects by a given identifier', () => {
    const input: any[] = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 1, name: 'Doe' },
    ];
    const identifier = 'id';
    const expected = {
      1: [
        { id: 1, name: 'John' },
        { id: 1, name: 'Doe' },
      ],
      2: [{ id: 2, name: 'Jane' }],
    };
    expect(groupByArrayOfObjects(input, identifier)).toEqual(expected);
  });

  it('should return an empty object for an empty array', () => {
    const input: any[] = [];
    const identifier = 'id';
    const expected = {};
    expect(groupByArrayOfObjects(input, identifier)).toEqual(expected);
  });
});
