import { expect } from 'chai';
import { stripHtmlTags } from '../src/modules/stripHtmlTags.js';

describe('validate: strip the html tags from a string', () => {
  it('should strip HTML tags from a simple string', () => {
    const str = '<p>Hello, <strong>world</strong>!</p>';
    const stripped = stripHtmlTags(str);
    expect(stripped).to.equal('Hello, world!');
  });

  it('should handle strings with no HTML tags', () => {
    const str = 'This is a plain text string.';
    const stripped = stripHtmlTags(str);
    expect(stripped).to.equal('This is a plain text string.');
  });

  it('should handle strings with multiple HTML tags', () => {
    const str = '<div><p>Some <em>formatted</em> text</p></div>';
    const stripped = stripHtmlTags(str);
    expect(stripped).to.equal('Some formatted text');
  });

  it('should handle empty strings', () => {
    const str = '';
    const stripped = stripHtmlTags(str);
    expect(stripped).to.equal('');
  });

  it('should handle strings with only HTML tags', () => {
    const str = '<p><strong><em></em></strong></p>';
    const stripped = stripHtmlTags(str);
    expect(stripped).to.equal('');
  });

  it('should handle strings with attributes in HTML tags', () => {
    const str = '<a href="https://example.com">Link</a>';
    const stripped = stripHtmlTags(str);
    expect(stripped).to.equal('Link');
  });
});
