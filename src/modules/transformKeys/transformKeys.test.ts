import { transformKeys } from './transformKeys';

describe('validate: transformKeys utility', () => {
  it('should transform object keys to uppercase', () => {
    const toUpperCase = (str: string) => str.toUpperCase();
    const obj = { a: 1, b: 2 };
    const expected = { A: 1, B: 2 };
    expect(transformKeys(obj, toUpperCase)).toEqual(expected);
  });

  it('should transform object keys to lowercase', () => {
    const toLowerCase = (str: string) => str.toLowerCase();
    const obj = { A: 1, B: 2 };
    const expected = { a: 1, b: 2 };
    expect(transformKeys(obj, toLowerCase)).toEqual(expected);
  });

  it('should handle nested objects', () => {
    const obj = { user: { firstName: 'John', lastName: 'Doe' } };
    const transformed = transformKeys(obj, (str: string) => str.toUpperCase());
    expect(transformed).toEqual({ USER: { FIRSTNAME: 'John', LASTNAME: 'Doe' } });
  });

  it('should handle arrays of objects', () => {
    const obj = { users: [{ firstName: 'John' }, { firstName: 'Jane' }] };
    const transformed = transformKeys(obj, (str: string) => str.toUpperCase());
    expect(transformed).toEqual({ USERS: [{ FIRSTNAME: 'John' }, { FIRSTNAME: 'Jane' }] });
  });

  it('should handle null values', () => {
    const obj = { user: null };
    const transformed = transformKeys(obj, (str: string) => str.toUpperCase());
    expect(transformed).toEqual({ USER: null });
  });

  it('should handle mixed arrays', () => {
    const obj = { users: [{ firstName: 'John' }, 'Jane', 123, null] };
    const transformed = transformKeys(obj, (str: string) => str.toUpperCase());
    expect(transformed).toEqual({ USERS: [{ FIRSTNAME: 'John' }, 'Jane', 123, null] });
  });

  it('should handle empty objects', () => {
    const obj = {};
    const transformed = transformKeys(obj, (str: string) => str.toUpperCase());
    expect(transformed).toEqual({});
  });

  it('should handle empty arrays', () => {
    const obj = { users: [] };
    const transformed = transformKeys(obj, (str: string) => str.toUpperCase());
    expect(transformed).toEqual({ USERS: [] });
  });

  it('should handle arrays at the root level', () => {
    const obj = [{ firstName: 'John' }, { firstName: 'Jane' }];
    const transformed = transformKeys(obj, (str: string) => str.toUpperCase());
    expect(transformed).toEqual([{ FIRSTNAME: 'John' }, { FIRSTNAME: 'Jane' }]);
  });
});
