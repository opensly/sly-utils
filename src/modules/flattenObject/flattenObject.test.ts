import { flattenObject } from './flattenObject';

describe('validate: flattenObject utility', () => {
  
  it('should flatten a simple object', () => {
    const input = { a: 1, b: 2 };
    const expected = { a: 1, b: 2 };
    expect(flattenObject(input, '', {})).toEqual(expected);
  });

  it('should flatten a nested object', () => {
    const input = { a: 1, b: { c: 2 } };
    const expected = { a: 1, bC: 2 };
    expect(flattenObject(input, '', {})).toEqual(expected);
  });

  it('should flatten an object with arrays', () => {
    const input = { a: [1, 2], b: { c: 3 } };
    const expected = { a0: 1, a1: 2, bC: 3 };
    expect(flattenObject(input, '', {})).toEqual(expected);
  });

  it('should flatten deeply nested objects', () => {
    const input = { a: { b: { c: { d: 1 } } } };
    const expected = { aBCD: 1 };
    expect(flattenObject(input, '', {})).toEqual(expected);
  });

  it('should handle empty objects', () => {
    const input = {};
    const expected = {};
    expect(flattenObject(input, '', {})).toEqual(expected);
  });

  it('should handle null values', () => {
    const input = { a: null };
    const expected = { a: null };
    expect(flattenObject(input, '', {})).toEqual(expected);
  });

  it('should handle undefined values', () => {
    const input = { a: undefined };
    const expected = { a: undefined };
    expect(flattenObject(input, '', {})).toEqual(expected);
  });

  it('should flatten a real-world user profile object', () => {
    const input = {
      user: {
        name: 'Alice',
        address: {
          street: '123 Main St',
          city: 'Metropolis',
          geo: {
            lat: 40.7128,
            lng: -74.0060
          }
        },
        roles: ['admin', 'user'],
        isActive: true
      }
    };
    const expected = {
      userName: 'Alice',
      userAddressStreet: '123 Main St',
      userAddressCity: 'Metropolis',
      userAddressGeoLat: 40.7128,
      userAddressGeoLng: -74.0060,
      userRoles0: 'admin',
      userRoles1: 'user',
      userIsActive: true
    };
    expect(flattenObject(input)).toEqual(expected);
  });

  it('should flatten a configuration object with mixed types', () => {
    const input = {
      config: {
        version: 2,
        features: {
          darkMode: true,
          beta: false
        },
        limits: {
          maxUsers: 100,
          timeout: null
        }
      }
    };
    const expected = {
      configVersion: 2,
      configFeaturesDarkMode: true,
      configFeaturesBeta: false,
      configLimitsMaxUsers: 100,
      configLimitsTimeout: null
    };
    expect(flattenObject(input)).toEqual(expected);
  });

  it('should flatten an object with special characters in keys', () => {
    const input = {
      'user-info': {
        'first name': 'Bob',
        'last name': 'Smith',
        details: {
          'e-mail': 'bob@example.com'
        }
      }
    };
    const expected = {
      'user-infoFirst name': 'Bob',
      'user-infoLast name': 'Smith',
      'user-infoDetailsE-mail': 'bob@example.com'
    };
    expect(flattenObject(input)).toEqual(expected);
  });

  it('should flatten an object with arrays of objects', () => {
    const input = {
      orders: [
        { id: 1, total: 10 },
        { id: 2, total: 20 }
      ]
    };
    const expected = {
      orders0Id: 1,
      orders0Total: 10,
      orders1Id: 2,
      orders1Total: 20
    };
    expect(flattenObject(input)).toEqual(expected);
  });

  it('should flatten an object with deeply nested arrays and objects', () => {
    const input = {
      a: [
        { b: [ { c: 1 }, { c: 2 } ] },
        { b: [ { c: 3 } ] }
      ]
    };
    const expected = {
      a0B0C: 1,
      a0B1C: 2,
      a1B0C: 3
    };
    expect(flattenObject(input)).toEqual(expected);
  });
});
