import { uniqArrayOfObjects } from './uniqArrayOfObjects';

describe('Validate: remove duplicate objects from the array', () => {
  it('should remove duplicate objects from an array', () => {
    const store = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 1, name: 'John' },
    ];
    const result = uniqArrayOfObjects(store);
    expect(result).toEqual([
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ]);
  });

  it('should handle an array with no duplicates', () => {
    const store = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ];
    const result = uniqArrayOfObjects(store);
    expect(result).toEqual(store);
  });

  it('should handle an empty array', () => {
    const store: any[] = [];
    const result = uniqArrayOfObjects(store);
    expect(result).toEqual([]);
  });

  it('should handle arrays with null values', () => {
    const store = [{ id: 1, name: 'John' }, null, { id: 2, name: 'Jane' }, null];
    const result = uniqArrayOfObjects(store);
    expect(result).toEqual([{ id: 1, name: 'John' }, null, { id: 2, name: 'Jane' }]);
  });

  it('should handle arrays with primitive values', () => {
    const store = [{ id: 1, name: 'John' }, 'string', { id: 2, name: 'Jane' }, 'string'];
    const result = uniqArrayOfObjects(store);
    expect(result).toEqual([{ id: 1, name: 'John' }, 'string', { id: 2, name: 'Jane' }]);
  });

  it('should handle arrays with nested objects', () => {
    const store = [
      { id: 1, details: { age: 30 } },
      { id: 2, details: { age: 25 } },
      { id: 1, details: { age: 30 } },
    ];
    const result = uniqArrayOfObjects(store);
    expect(result).toEqual([
      { id: 1, details: { age: 30 } },
      { id: 2, details: { age: 25 } },
    ]);
  });
});
