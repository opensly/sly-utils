import { expect } from 'chai';
import { doesExist } from '../src/modules/doesExist.js';

describe('validate: the given string does exists in the array of objects', () => {
  const nestedArray = [
    { key: 'value1', nested: { key: 'value2', deepNested: [{ key: 'value3' }] } },
    { key: 'value4', nested: { key: 'value5', deepNested: [{ key: 'value6' }] } },
    { key: 'value7', nested: { key: 'value8', deepNested: [{ key: 'value9' }] } },
  ];

  it('should return true if the string exists in the nested array', () => {
    expect(doesExist(nestedArray, 'key', 'value3')).to.be.true;
    expect(doesExist(nestedArray, 'key', 'value5')).to.be.true;
    expect(doesExist(nestedArray, 'key', 'value9')).to.be.true;
  });

  it('should return false if the string does not exist in the nested array', () => {
    expect(doesExist(nestedArray, 'key', 'value10')).to.be.false;
    expect(doesExist(nestedArray, 'key', 'nonexistent')).to.be.false;
  });

  it('should handle edge cases like empty array or null objects', () => {
    expect(doesExist([], 'key', 'value1')).to.be.false;
    expect(doesExist([{ key: 'value1' }, null, {}], 'key', 'value1')).to.be.true;
  });
});
