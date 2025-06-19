import { mapToJson, jsonToMap } from './mapAndJson';

describe('validate: convert map to json', () => {
  it('should convert a Map to a JSON string', () => {
    const myMap = new Map();
    myMap.set('name', 'Alice');
    myMap.set('age', 25);

    const jsonString = mapToJson(myMap);
    expect(jsonString).toBe('{"name":"Alice","age":25}');
  });

  it('should handle an empty Map', () => {
    const myMap = new Map();
    const jsonString = mapToJson(myMap);
    expect(jsonString).toBe('{}');
  });

  it('should throw a TypeError if input is not a Map', () => {
    // @ts-expect-error
    expect(() => mapToJson({})).toThrow('Input should be a Map');
    // @ts-expect-error
    expect(() => mapToJson('string')).toThrow('Input should be a Map');
    // @ts-expect-error
    expect(() => mapToJson(123)).toThrow('Input should be a Map');
    // @ts-expect-error
    expect(() => mapToJson(null)).toThrow('Input should be a Map');
  });
});

describe('validate: convert json to map', () => {
  it('should convert a JSON string to a Map', () => {
    const jsonString = '{"name":"Alice","age":25}';
    const myMap = jsonToMap(jsonString);

    expect(myMap).toBeInstanceOf(Map);
    expect(myMap.size).toBe(2);
    expect(myMap.get('name')).toBe('Alice');
    expect(myMap.get('age')).toBe(25);
  });

  it('should handle an empty JSON object', () => {
    const jsonString = '{}';
    const myMap = jsonToMap(jsonString);

    expect(myMap).toBeInstanceOf(Map);
    expect(myMap.size).toBe(0);
  });

  it('should throw a SyntaxError if input is not valid JSON', () => {
    expect(() => jsonToMap('invalid')).toThrow(SyntaxError);
    expect(() => jsonToMap('{"name": "Alice"')).toThrow(SyntaxError);
  });
});
