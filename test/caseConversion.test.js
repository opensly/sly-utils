import { expect } from 'chai';
import { camelToKebab, camelToSnake, kebabToCamel, snakeToCamel } from '../src/modules/caseConversion.js';

/**
 * Test cases for camel case to kebab case conversion
 */
describe('validate: convert camel case to kebab case', () => {
  it('should convert camelCase to kebab-case', () => {
    const input = 'thisIsCamelCase';
    const expected = 'this-is-camel-case';
    expect(camelToKebab(input)).to.equal(expected);
  });

  it('should handle kebab-case input', () => {
    const input = 'kebab-case';
    const expected = 'kebab-case';
    expect(camelToKebab(input)).to.equal(expected);
  });

  it('should handle leading uppercase', () => {
    const input = 'CamelCaseWithLeadingUpper';
    const expected = '-camel-case-with-leading-upper';
    expect(camelToKebab(input)).to.equal(expected);
  });

  it('should handle empty string', () => {
    const input = '';
    const expected = '';
    expect(camelToKebab(input)).to.equal(expected);
  });

  it('should handle numbers in the string', () => {
    const input = 'camelCase123Example';
    const expected = 'camel-case123-example';
    expect(camelToKebab(input)).to.equal(expected);
  });

  it('should handle special characters in the string', () => {
    const input = 'camelCase_withSpecial$Characters';
    const expected = 'camel-case_with-special$-characters';
    expect(camelToKebab(input)).to.equal(expected);
  });
});

/**
 * Test cases for camel case to snake case conversion
 */
describe('validate: convert camel case to snake case', () => {
  it('should convert camelCase to snake_case', () => {
    const input = 'thisIsCamelCase';
    const expected = 'this_is_camel_case';
    expect(camelToSnake(input)).to.equal(expected);
  });

  it('should handle snake_case input', () => {
    const input = 'snake_case';
    const expected = 'snake_case';
    expect(camelToSnake(input)).to.equal(expected);
  });

  it('should handle leading uppercase', () => {
    const input = 'CamelCaseWithLeadingUpper';
    const expected = '_camel_case_with_leading_upper';
    expect(camelToSnake(input)).to.equal(expected);
  });

  it('should handle empty string', () => {
    const input = '';
    const expected = '';
    expect(camelToSnake(input)).to.equal(expected);
  });

  it('should handle numbers in the string', () => {
    const input = 'camelCase123Example';
    const expected = 'camel_case123_example';
    expect(camelToSnake(input)).to.equal(expected);
  });

  it('should handle special characters in the string', () => {
    const input = 'camelCase_withSpecial$Characters';
    const expected = 'camel_case_with_special$_characters';
    expect(camelToSnake(input)).to.equal(expected);
  });
});

/**
 * Test cases for kebab case to camel case conversion
 */
describe('validate: convert kebab case to camel case', () => {
  it('should convert kebab-case to camelCase', () => {
    const input = 'this-is-kebab-case';
    const expected = 'thisIsKebabCase';
    expect(kebabToCamel(input)).to.equal(expected);
  });

  it('should handle camelCase input', () => {
    const input = 'camelCase';
    const expected = 'camelCase';
    expect(kebabToCamel(input)).to.equal(expected);
  });

  it('should handle leading hyphen', () => {
    const input = '-leadingHyphen';
    const expected = 'LeadingHyphen';
    expect(kebabToCamel(input)).to.equal(expected);
  });

  it('should handle empty string', () => {
    const input = '';
    const expected = '';
    expect(kebabToCamel(input)).to.equal(expected);
  });

  it('should handle numbers in the string', () => {
    const input = 'kebab-case-123-example';
    const expected = 'kebabCase123Example';
    expect(kebabToCamel(input)).to.equal(expected);
  });
});

/**
 * Test cases for snake case to camel case conversion
 */
describe('validate: convert snake case to camel case', () => {
  it('should convert snake_case to camelCase', () => {
    const input = 'this_is_snake_case';
    const expected = 'thisIsSnakeCase';
    expect(snakeToCamel(input)).to.equal(expected);
  });

  it('should handle single character string', () => {
    const input = 'a';
    const expected = 'a';
    expect(snakeToCamel(input)).to.equal(expected);
  });

  it('should handle camelCase input', () => {
    const input = 'camelCase';
    const expected = 'camelCase';
    expect(snakeToCamel(input)).to.equal(expected);
  });

  it('should handle PascalCase input', () => {
    const input = 'PascalCaseExample';
    const expected = 'PascalCaseExample';
    expect(snakeToCamel(input)).to.equal(expected);
  });

  it('should handle leading underscore', () => {
    const input = '_leading_underscore';
    const expected = 'LeadingUnderscore';
    expect(snakeToCamel(input)).to.equal(expected);
  });

  it('should handle empty string', () => {
    const input = '';
    const expected = '';
    expect(snakeToCamel(input)).to.equal(expected);
  });

  it('should handle special characters in the string', () => {
    const input = 'snake_case_with$special_characters';
    const expected = 'snakeCaseWith$specialCharacters';
    expect(snakeToCamel(input)).to.equal(expected);
  });
});
