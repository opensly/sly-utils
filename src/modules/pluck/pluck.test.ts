import { pluck } from './pluck';

describe('validate: pluck the matching values from an array by given key', () => {
  it('should extract values from objects in an array based on a key', () => {
    const store: any[] = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Doe' },
    ];
    const key = 'name';
    const result = pluck(store, key);
    expect(result).toEqual(['John', 'Jane', 'Doe']);
  });

  it('should return an empty array when store is empty', () => {
    const store: any[] = [];
    const key = 'name';
    const result = pluck(store, key);
    expect(result).toEqual([]);
  });

  it('should handle objects with missing key by returning undefined', () => {
    const store: any[] = [
      { id: 1, name: 'John' },
      { id: 2, age: 25 },
      { id: 3, name: 'Doe' },
    ];
    const key = 'name';
    const result = pluck(store, key);
    expect(result).toEqual(['John', undefined, 'Doe']);
  });

  it('should handle objects with null values for the key', () => {
    const store: any[] = [
      { id: 1, name: 'John' },
      { id: 2, name: null },
      { id: 3, name: 'Doe' },
    ];
    const key = 'name';
    const result = pluck(store, key);
    expect(result).toEqual(['John', null, 'Doe']);
  });

  it('should handle objects with undefined values for the key', () => {
    const store: any[] = [
      { id: 1, name: 'John' },
      { id: 2, name: undefined },
      { id: 3, name: 'Doe' },
    ];
    const key = 'name';
    const result = pluck(store, key);
    expect(result).toEqual(['John', undefined, 'Doe']);
  });

  it('should handle empty key by returning undefined for all objects', () => {
    const store: any[] = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Doe' },
    ];
    const key = '';
    const result = pluck(store, key);
    expect(result).toEqual([undefined, undefined, undefined]);
  });

  it('should handle store with non-object elements by returning undefined', () => {
    const store = ['John', 'Jane', 'Doe'];
    const key = 'name';
    const result = pluck(store, key);
    expect(result).toEqual([undefined, undefined, undefined]);
  });
});
