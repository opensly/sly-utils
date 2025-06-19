import { friendlyUrlString } from './url';

describe('validate: friendlyUrlString utility', () => {
  it('should convert a normal string to a SEO friendly URL string', () => {
    const testString = 'Evanston, IN 47531, USA pizza food & wine & music';
    const expected = 'evanston-in-47531-usa-pizza-food-wine-music';
    expect(friendlyUrlString(testString)).toBe(expected);
  });

  it('should handle empty string', () => {
    expect(friendlyUrlString('')).toBe('');
  });

  it('should handle special characters and multiple spaces', () => {
    const testString = 'Hello   World! & Pizza?';
    const expected = 'hello-world-pizza';
    expect(friendlyUrlString(testString)).toBe(expected);
  });
});
