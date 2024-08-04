import { expect } from 'chai';
import { mapToJson, jsonToMap } from '../src/modules/mapAndJson.js';

describe('validate: convert map to json', () => {
  it('should convert a Map to a JSON string', () => {
    const myMap = new Map();
    myMap.set('name', 'Alice');
    myMap.set('age', 25);

    const jsonString = mapToJson(myMap);
    expect(jsonString).to.equal('{"name":"Alice","age":25}');
  });

  it('should handle an empty Map', () => {
    const myMap = new Map();
    const jsonString = mapToJson(myMap);
    expect(jsonString).to.equal('{}');
  });

  it('should throw a TypeError if input is not a Map', () => {
    expect(() => mapToJson({})).to.throw(TypeError, 'Input should be a Map');
    expect(() => mapToJson('string')).to.throw(TypeError, 'Input should be a Map');
    expect(() => mapToJson(123)).to.throw(TypeError, 'Input should be a Map');
    expect(() => mapToJson(null)).to.throw(TypeError, 'Input should be a Map');
  });
});

describe('validate: convert json to map', () => {
  it('should convert a JSON string to a Map', () => {
    const jsonString = '{"name":"Alice","age":25}';
    const myMap = jsonToMap(jsonString);

    expect(myMap).to.be.instanceOf(Map);
    expect(myMap.size).to.equal(2);
    expect(myMap.get('name')).to.equal('Alice');
    expect(myMap.get('age')).to.equal(25);
  });

  it('should handle an empty JSON object', () => {
    const jsonString = '{}';
    const myMap = jsonToMap(jsonString);

    expect(myMap).to.be.instanceOf(Map);
    expect(myMap.size).to.equal(0);
  });

  it('should throw a SyntaxError if input is not valid JSON', () => {
    expect(() => jsonToMap('invalid')).to.throw(SyntaxError);
    expect(() => jsonToMap('{"name": "Alice"')).to.throw(SyntaxError);
  });
});
