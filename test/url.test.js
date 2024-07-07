import { expect } from 'chai';
import { friendlyUrlString } from '../src/modules/url.js';

describe('validate: convert the given string to a friendly url slug', () => {
  it('should convert accented characters to their non-accented equivalents', () => {
    const str = 'ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖÙÚÛÜÝßàáâãäåæçèéêëìíîïðñòóôõöùúûüýÿ';
    const result = friendlyUrlString(str);
    expect(result).to.equal('aaaaaaaceeeeiiiidnooooouuuuysaaaaaaaceeeeiiiidnooooouuuuyy');
  });

  it('should convert uppercase characters to lowercase', () => {
    const str = 'HELLO WORLD';
    const result = friendlyUrlString(str);
    expect(result).to.equal('hello-world');
  });

  it('should replace spaces with hyphens', () => {
    const str = 'hello world';
    const result = friendlyUrlString(str);
    expect(result).to.equal('hello-world');
  });

  it('should remove special characters like & and ?', () => {
    const str = 'hello & world?';
    const result = friendlyUrlString(str);
    expect(result).to.equal('hello-world');
  });

  it('should replace multiple hyphens with a single hyphen', () => {
    const str = 'hello--world';
    const result = friendlyUrlString(str);
    expect(result).to.equal('hello-world');
  });

  it('should handle empty strings', () => {
    const str = '';
    const result = friendlyUrlString(str);
    expect(result).to.equal('');
  });

  it('should handle strings with multiple spaces', () => {
    const str = 'hello   world';
    const result = friendlyUrlString(str);
    expect(result).to.equal('hello-world');
  });

  it('should trim leading and trailing spaces', () => {
    const str = '  hello world  ';
    const result = friendlyUrlString(str);
    expect(result).to.equal('hello-world');
  });

  it('should handle strings with no transformations needed', () => {
    const str = 'hello-world';
    const result = friendlyUrlString(str);
    expect(result).to.equal('hello-world');
  });
});
