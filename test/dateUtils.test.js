import { expect } from 'chai';
import { backDate } from '../src/modules/dateUtils.js';

describe('validate: get the older date of given number of days prior to current date', () => {
  it('should return the date 5 days ago in DD/MM/YYYY format by default', () => {
    const result = backDate(5);
    const expectedDate = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000);
    const expectedDay = String(expectedDate.getDate()).padStart(2, '0');
    const expectedMonth = String(expectedDate.getMonth() + 1).padStart(2, '0');
    const expectedYear = expectedDate.getFullYear();
    const expected = `${expectedDay}/${expectedMonth}/${expectedYear}`;
    expect(result).to.equal(expected);
  });

  it('should return the date 10 days ago in MM-DD-YYYY format', () => {
    const result = backDate(10, '-', 'MMDDYYYY');
    const expectedDate = new Date(Date.now() - 10 * 24 * 60 * 60 * 1000);
    const expectedDay = String(expectedDate.getDate()).padStart(2, '0');
    const expectedMonth = String(expectedDate.getMonth() + 1).padStart(2, '0');
    const expectedYear = expectedDate.getFullYear();
    const expected = `${expectedMonth}-${expectedDay}-${expectedYear}`;
    expect(result).to.equal(expected);
  });

  it('should return the date 20 days ago in YYYY.MM.DD format', () => {
    const result = backDate(20, '.', 'YYYYMMDD');
    const expectedDate = new Date(Date.now() - 20 * 24 * 60 * 60 * 1000);
    const expectedDay = String(expectedDate.getDate()).padStart(2, '0');
    const expectedMonth = String(expectedDate.getMonth() + 1).padStart(2, '0');
    const expectedYear = expectedDate.getFullYear();
    const expected = `${expectedYear}.${expectedMonth}.${expectedDay}`;
    expect(result).to.equal(expected);
  });

  it('should return the date 0 days ago in DD-MM-YYYY format', () => {
    const result = backDate(0, '-', 'DDMMYYYY');
    const expectedDate = new Date();
    const expectedDay = String(expectedDate.getDate()).padStart(2, '0');
    const expectedMonth = String(expectedDate.getMonth() + 1).padStart(2, '0');
    const expectedYear = expectedDate.getFullYear();
    const expected = `${expectedDay}-${expectedMonth}-${expectedYear}`;
    expect(result).to.equal(expected);
  });

  it('should return the date 15 days ago in default format when invalid format is given', () => {
    const result = backDate(15, '/', 'INVALID');
    const expectedDate = new Date(Date.now() - 15 * 24 * 60 * 60 * 1000);
    const expectedDay = String(expectedDate.getDate()).padStart(2, '0');
    const expectedMonth = String(expectedDate.getMonth() + 1).padStart(2, '0');
    const expectedYear = expectedDate.getFullYear();
    const expected = `${expectedDay}/${expectedMonth}/${expectedYear}`;
    expect(result).to.equal(expected);
  });

  it('should handle single digit days and months correctly', () => {
    const result = backDate(180, '-', 'DDMMYYYY'); // Choose a date that ensures single digit day and month
    const expectedDate = new Date(Date.now() - 180 * 24 * 60 * 60 * 1000);
    const expectedDay = String(expectedDate.getDate()).padStart(2, '0');
    const expectedMonth = String(expectedDate.getMonth() + 1).padStart(2, '0');
    const expectedYear = expectedDate.getFullYear();
    const expected = `${expectedDay}-${expectedMonth}-${expectedYear}`;
    expect(result).to.equal(expected);
  });
});
