import { expect } from 'chai';
import { deepFreeze } from '../src/modules/deepFreeze.js';

describe('validate: deep freezeing the given nested object', function () {
  it('should deeply freeze an object', function () {
    const obj = {
      a: 1,
      b: {
        c: 2,
        d: [3, 4, 5],
      },
    };

    const frozenObj = deepFreeze(obj);

    expect(Object.isFrozen(frozenObj)).to.be.true;
    expect(Object.isFrozen(frozenObj.b)).to.be.true;
    expect(Object.isFrozen(frozenObj.b.d)).to.be.true;
  });

  it('should not allow modifications to the frozen object', function () {
    const obj = {
      a: 1,
      b: {
        c: 2,
      },
    };

    const frozenObj = deepFreeze(obj);

    expect(() => {
      frozenObj.a = 2;
    }).to.throw(TypeError);
    expect(() => {
      frozenObj.b.c = 3;
    }).to.throw(TypeError);
  });

  it('should handle freezing of arrays', function () {
    const arr = [1, [2, 3]];

    const frozenArr = deepFreeze(arr);

    expect(Object.isFrozen(frozenArr)).to.be.true;
    expect(Object.isFrozen(frozenArr[1])).to.be.true;
  });
});
