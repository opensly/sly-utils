import { pick, omit, pickBy, omitBy } from './pick';

describe('pick / omit / pickBy / omitBy utilities', () => {
  it('pick should select only the specified keys', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  it('pick should ignore missing keys and return only existing ones', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, ['a', 'z'])).toEqual({ a: 1 });
  });

  it('pick should skip dangerous prototype keys', () => {
    const obj: any = { a: 1, __proto__: { injected: true }, constructor: 2 };
    const res = pick(obj, ['a', '__proto__', 'constructor']);
    expect(res).toEqual({ a: 1 });
    // Ensure we didn't pollute Object.prototype
    expect(({} as any).injected).toBeUndefined();
  });

  it('omit should remove the specified keys', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['b'])).toEqual({ a: 1, c: 3 });
  });

  it('pickBy should pick keys based on predicate', () => {
    const obj = { a: 1, b: null, c: 0, d: 'x' };
    const res = pickBy(obj, (v) => v != null);
    expect(res).toEqual({ a: 1, c: 0, d: 'x' });
  });

  it('omitBy should omit keys based on predicate', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const res = omitBy(obj, (v, k) => k === 'b');
    expect(res).toEqual({ a: 1, c: 3 });
  });

  it('non-object inputs should return empty object', () => {
    // @ts-ignore - purposely passing invalid value
    expect(pick(null, ['a'])).toEqual({});
    // @ts-ignore
    expect(omit(undefined, ['a'])).toEqual({});
    // @ts-ignore
    expect(pickBy(123, () => true)).toEqual({});
    // @ts-ignore
    expect(omitBy('str', () => false)).toEqual({});
  });

  it('pick should support nested path strings and build nested result', () => {
    const obj = { a: { b: [{ c: 1 }, { c: 2 }] }, x: 5 };
    const result = pick(obj as any, ['a.b[0].c', 'x']);
    expect(result).toEqual({ a: { b: [{ c: 1 }] }, x: 5 });
  });

  it('pick should ignore non-existing nested paths', () => {
    const obj = { a: { b: [{ c: 1 }, { c: 2 }] } };
    expect(pick(obj as any, ['a.b[2].c'])).toEqual({});
  });

  it('omit should support nested path strings and remove nested properties', () => {
    const obj = { a: { b: [{ c: 1 }, { c: 2, d: 3 }] }, x: 5 };
    const result = omit(obj as any, ['a.b[1].c']);
    expect(result).toEqual({ a: { b: [{ c: 1 }, { d: 3 }] }, x: 5 });
    // original should not be mutated
    expect(obj.a.b[1].c).toBe(2);
  });

  it('omit should remove full nested property when specified', () => {
    const obj = { a: { b: { c: 1, d: 2 } } };
    const result = omit(obj as any, ['a.b']);
    expect(result).toEqual({ a: {} });
  });
});
