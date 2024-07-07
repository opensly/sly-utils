import { expect } from 'chai';
import { flattenObject } from '../src/modules/flattenObject.js';

describe('validate: flatten the given object', () => {
  it('should flatten a simple object', () => {
    const input = { name: 'John', age: 30 };
    const expected = { name: 'John', age: 30 };
    expect(flattenObject(input)).to.deep.equal(expected);
  });

  it('should flatten a nested object', () => {
    const input = { person: { name: 'John', age: 30 } };
    const expected = { personName: 'John', personAge: 30 };
    expect(flattenObject(input)).to.deep.equal(expected);
  });

  it('should handle deeply nested objects', () => {
    const input = { person: { details: { name: 'John', age: 30 } } };
    const expected = { personDetailsName: 'John', personDetailsAge: 30 };
    expect(flattenObject(input)).to.deep.equal(expected);
  });

  it('should flatten an object with arrays', () => {
    const input = { person: { hobbies: ['reading', 'swimming'] } };
    const expected = { personHobbies0: 'reading', personHobbies1: 'swimming' };
    expect(flattenObject(input)).to.deep.equal(expected);
  });

  it('should handle edge cases like empty objects', () => {
    const input = {};
    const expected = {};
    expect(flattenObject(input)).to.deep.equal(expected);
  });

  it('should handle edge cases like null values', () => {
    const input = { person: null };
    const expected = { person: null };
    expect(flattenObject(input)).to.deep.equal(expected);
  });

  it('should handle edge cases like undefined values', () => {
    const input = { person: undefined };
    const expected = { person: undefined };
    expect(flattenObject(input)).to.deep.equal(expected);
  });

  it('should handle edge cases like mixed data types', () => {
    const input = { person: { name: 'John', age: 30, hobbies: ['reading', 'swimming'] } };
    const expected = { personName: 'John', personAge: 30, personHobbies0: 'reading', personHobbies1: 'swimming' };
    expect(flattenObject(input)).to.deep.equal(expected);
  });
});
