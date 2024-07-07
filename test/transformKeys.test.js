import { expect } from 'chai';
import { transformKeys } from '../src/modules/transformKeys.js';

describe('validate: transform the keys', () => {
  const toUpperCase = (str) => str.toUpperCase();
  const toLowerCase = (str) => str.toLowerCase();

  it('should transform keys to uppercase', () => {
    const obj = { firstName: 'John', lastName: 'Doe' };
    const transformed = transformKeys(obj, toUpperCase);
    expect(transformed).to.deep.equal({ FIRSTNAME: 'John', LASTNAME: 'Doe' });
  });

  it('should transform keys to lowercase', () => {
    const obj = { FirstName: 'John', LastName: 'Doe' };
    const transformed = transformKeys(obj, toLowerCase);
    expect(transformed).to.deep.equal({ firstname: 'John', lastname: 'Doe' });
  });

  it('should handle nested objects', () => {
    const obj = { user: { firstName: 'John', lastName: 'Doe' } };
    const transformed = transformKeys(obj, toUpperCase);
    expect(transformed).to.deep.equal({ USER: { FIRSTNAME: 'John', LASTNAME: 'Doe' } });
  });

  it('should handle arrays of objects', () => {
    const obj = { users: [{ firstName: 'John' }, { firstName: 'Jane' }] };
    const transformed = transformKeys(obj, toUpperCase);
    expect(transformed).to.deep.equal({ USERS: [{ FIRSTNAME: 'John' }, { FIRSTNAME: 'Jane' }] });
  });

  it('should handle null values', () => {
    const obj = { user: null };
    const transformed = transformKeys(obj, toUpperCase);
    expect(transformed).to.deep.equal({ USER: null });
  });

  it('should handle mixed arrays', () => {
    const obj = { users: [{ firstName: 'John' }, 'Jane', 123, null] };
    const transformed = transformKeys(obj, toUpperCase);
    expect(transformed).to.deep.equal({ USERS: [{ FIRSTNAME: 'John' }, 'Jane', 123, null] });
  });

  it('should handle empty objects', () => {
    const obj = {};
    const transformed = transformKeys(obj, toUpperCase);
    expect(transformed).to.deep.equal({});
  });

  it('should handle empty arrays', () => {
    const obj = { users: [] };
    const transformed = transformKeys(obj, toUpperCase);
    expect(transformed).to.deep.equal({ USERS: [] });
  });

  it('should handle arrays at the root level', () => {
    const obj = [{ firstName: 'John' }, { firstName: 'Jane' }];
    const transformed = transformKeys(obj, toUpperCase);
    expect(transformed).to.deep.equal([{ FIRSTNAME: 'John' }, { FIRSTNAME: 'Jane' }]);
  });
});
