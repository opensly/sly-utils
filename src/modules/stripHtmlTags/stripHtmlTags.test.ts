import { stripHtmlTags } from './stripHtmlTags';

describe('validate: stripHtmlTags utility', () => {
  it('should remove HTML tags from a string', () => {
    const input = '<p>Hello <b>World</b></p>';
    const expected = 'Hello World';
    expect(stripHtmlTags(input)).toBe(expected);
  });

  it('should return the same string if no HTML tags are present', () => {
    const input = 'No tags here!';
    const expected = 'No tags here!';
    expect(stripHtmlTags(input)).toBe(expected);
  });

  it('should handle empty strings', () => {
    const input = '';
    const expected = '';
    expect(stripHtmlTags(input)).toBe(expected);
  });

  it('should handle strings with only tags', () => {
    const input = '<div></div>';
    const expected = '';
    expect(stripHtmlTags(input)).toBe(expected);
  });

  it('should handle nested tags', () => {
    const input = '<div><span>Text</span></div>';
    const expected = 'Text';
    expect(stripHtmlTags(input)).toBe(expected);
  });
});
