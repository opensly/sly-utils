import { expect } from 'chai';
import { backDate } from '../src/modules/dateUtils.js';

describe('validate: get the older date of given number of days prior to current date', () => {
  it('should return the correct date string with hyphen delimiter', () => {
    const days = 1;
    const delimiter = '-';
    const expectedPattern = /^\d{1,2}-\d{1,2}-\d{4}$/;
    const result = backDate(days, delimiter);
    expect(result).to.match(expectedPattern);
  });

  it('should return the correct date string with slash delimiter', () => {
    const days = 7;
    const delimiter = '/';
    const expectedPattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    const result = backDate(days, delimiter);
    expect(result).to.match(expectedPattern);
  });

  it('should return the correct date string with dot delimiter', () => {
    const days = 30;
    const delimiter = '.';
    const expectedPattern = /^\d{1,2}\.\d{1,2}\.\d{4}$/;
    const result = backDate(days, delimiter);
    expect(result).to.match(expectedPattern);
  });

  it('should return the correct date string for zero days ago', () => {
    const days = 0;
    const delimiter = '/';
    const expectedPattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    const result = backDate(days, delimiter);
    expect(result).to.match(expectedPattern);
  });

  it('should return the correct date string for negative days (future date)', () => {
    const days = -10;
    const delimiter = '-';
    const expectedPattern = /^\d{1,2}-\d{1,2}-\d{4}$/;
    const result = backDate(days, delimiter);
    expect(result).to.match(expectedPattern);
  });
});
