import {
  camelToKebab,
  camelToSnake,
  camelToPascal,
  kebabToCamel,
  kebabToPascal,
  kebabToSnake,
  pascalToCamel,
  pascalToKebab,
  pascalToSnake,
  snakeToCamel,
  snakeToPascal,
  snakeToKebab
} from './caseConversion';

/**
 * Test cases for camel case to kebab case conversion
 */
describe('validate: convert camel case to kebab case', () => {
  it('should convert camelCase to kebab-case', () => {
    const input = 'thisIsCamelCase';
    const expected = 'this-is-camel-case';
    expect(camelToKebab(input)).toBe(expected);
  });

  it('should handle kebab-case input', () => {
    const input = 'kebab-case';
    const expected = 'kebab-case';
    expect(camelToKebab(input)).toBe(expected);
  });

  it('should handle leading uppercase', () => {
    const input = 'CamelCaseWithLeadingUpper';
    const expected = '-camel-case-with-leading-upper';
    expect(camelToKebab(input)).toBe(expected);
  });

  it('should handle empty string', () => {
    const input = '';
    const expected = '';
    expect(camelToKebab(input)).toBe(expected);
  });

  it('should handle numbers in the string', () => {
    const input = 'camelCase123Example';
    const expected = 'camel-case123-example';
    expect(camelToKebab(input)).toBe(expected);
  });

  it('should handle special characters in the string', () => {
    const input = 'camelCase_withSpecial$Characters';
    const expected = 'camel-case_with-special$-characters';
    expect(camelToKebab(input)).toBe(expected);
  });
});

/**
 * Test cases for camel case to snake case conversion
 */
describe('validate: convert camel case to snake case', () => {
  it('should convert camelCase to snake_case', () => {
    const input = 'thisIsCamelCase';
    const expected = 'this_is_camel_case';
    expect(camelToSnake(input)).toBe(expected);
  });

  it('should handle snake_case input', () => {
    const input = 'snake_case';
    const expected = 'snake_case';
    expect(camelToSnake(input)).toBe(expected);
  });

  it('should handle leading uppercase', () => {
    const input = 'CamelCaseWithLeadingUpper';
    const expected = '_camel_case_with_leading_upper';
    expect(camelToSnake(input)).toBe(expected);
  });

  it('should handle empty string', () => {
    const input = '';
    const expected = '';
    expect(camelToSnake(input)).toBe(expected);
  });

  it('should handle numbers in the string', () => {
    const input = 'camelCase123Example';
    const expected = 'camel_case123_example';
    expect(camelToSnake(input)).toBe(expected);
  });

  it('should handle special characters in the string', () => {
    const input = 'camelCase_withSpecial$Characters';
    const expected = 'camel_case_with_special$_characters';
    expect(camelToSnake(input)).toBe(expected);
  });
});

/**
 * Test cases for camel case to pascal case conversion
 */
describe('validate: convert camel case to pascal case', () => {
  it('should convert camelCase to PascalCase', () => {
    const input = 'camelCaseString';
    const output = camelToPascal(input);
    expect(output).toBe('CamelCaseString');
  });

  it('should handle single word camelCase', () => {
    const input = 'camel';
    const output = camelToPascal(input);
    expect(output).toBe('Camel');
  });

  it('should handle already PascalCase input', () => {
    const input = 'PascalCase';
    const output = camelToPascal(input);
    expect(output).toBe('PascalCase');
  });

  it('should handle empty string input', () => {
    const input = '';
    const output = camelToPascal(input);
    expect(output).toBe('');
  });

  it('should handle a single lowercase letter', () => {
    const input = 'c';
    const output = camelToPascal(input);
    expect(output).toBe('C');
  });

  it('should handle a single uppercase letter', () => {
    const input = 'C';
    const output = camelToPascal(input);
    expect(output).toBe('C');
  });

  it('should handle mixed case input', () => {
    const input = 'camelCaseStringExample';
    const output = camelToPascal(input);
    expect(output).toBe('CamelCaseStringExample');
  });
});

/**
 * Test cases for kebab case to camel case conversion
 */
describe('validate: convert kebab case to camel case', () => {
  it('should convert kebab-case to camelCase', () => {
    const input = 'this-is-kebab-case';
    const expected = 'thisIsKebabCase';
    expect(kebabToCamel(input)).toBe(expected);
  });

  it('should handle camelCase input', () => {
    const input = 'camelCase';
    const expected = 'camelCase';
    expect(kebabToCamel(input)).toBe(expected);
  });

  it('should handle leading hyphen', () => {
    const input = '-leadingHyphen';
    const expected = 'LeadingHyphen';
    expect(kebabToCamel(input)).toBe(expected);
  });

  it('should handle empty string', () => {
    const input = '';
    const expected = '';
    expect(kebabToCamel(input)).toBe(expected);
  });

  it('should handle numbers in the string', () => {
    const input = 'kebab-case-123-example';
    const expected = 'kebabCase123Example';
    expect(kebabToCamel(input)).toBe(expected);
  });
});

/**
 * Test cases for snake case to pascal case conversion
 */
describe('validate: convert kebab case to pascal case', () => {
  it('should convert kebab-case to PascalCase', () => {
    const input = 'kebab-case-string';
    const output = kebabToPascal(input);
    expect(output).toBe('KebabCaseString');
  });

  it('should handle single word kebab-case', () => {
    const input = 'kebab';
    const output = kebabToPascal(input);
    expect(output).toBe('Kebab');
  });

  it('should handle already PascalCase input', () => {
    const input = 'PascalCaseString';
    const output = kebabToPascal(input);
    expect(output).toBe('PascalCaseString');
  });

  it('should handle empty string input', () => {
    const input = '';
    const output = kebabToPascal(input);
    expect(output).toBe('');
  });

  it('should handle input with leading hyphen', () => {
    const input = '-leading-hyphen';
    const output = kebabToPascal(input);
    expect(output).toBe('LeadingHyphen');
  });

  it('should handle single lowercase letter', () => {
    const input = 'a';
    const output = kebabToPascal(input);
    expect(output).toBe('A');
  });

  it('should handle single uppercase letter', () => {
    const input = 'A';
    const output = kebabToPascal(input);
    expect(output).toBe('A');
  });
});

/**
 * Test cases for kebab case to snake case conversion
 */
describe('validate: convert kebab case to snake case', () => {
  it('should convert kebab-case to snake_case', () => {
    const input = 'kebab-case-string';
    const output = kebabToSnake(input);
    expect(output).toBe('kebab_case_string');
  });

  it('should handle single word kebab-case', () => {
    const input = 'kebab';
    const output = kebabToSnake(input);
    expect(output).toBe('kebab');
  });

  it('should handle already snake_case input', () => {
    const input = 'snake_case';
    const output = kebabToSnake(input);
    expect(output).toBe('snake_case');
  });

  it('should handle empty string input', () => {
    const input = '';
    const output = kebabToSnake(input);
    expect(output).toBe('');
  });

  it('should handle single hyphen', () => {
    const input = 'kebab-';
    const output = kebabToSnake(input);
    expect(output).toBe('kebab_');
  });

  it('should handle multiple hyphens', () => {
    const input = 'this-is-a-test';
    const output = kebabToSnake(input);
    expect(output).toBe('this_is_a_test');
  });

  it('should handle input with leading hyphen', () => {
    const input = '-leading-hyphen';
    const output = kebabToSnake(input);
    expect(output).toBe('_leading_hyphen');
  });

  it('should handle input with trailing hyphen', () => {
    const input = 'trailing-hyphen-';
    const output = kebabToSnake(input);
    expect(output).toBe('trailing_hyphen_');
  });

  it('should handle single lowercase letter', () => {
    const input = 'a';
    const output = kebabToSnake(input);
    expect(output).toBe('a');
  });

  it('should handle single uppercase letter', () => {
    const input = 'A';
    const output = kebabToSnake(input);
    expect(output).toBe('A');
  });
});

/**
 * Test cases for pascal case to camel case conversion
 */
describe('valite: convert pascal case to camel case', () => {
  it('should convert PascalCase to camelCase', () => {
    const input = 'PascalCaseString';
    const output = pascalToCamel(input);
    expect(output).toBe('pascalCaseString');
  });

  it('should handle single word PascalCase', () => {
    const input = 'Pascal';
    const output = pascalToCamel(input);
    expect(output).toBe('pascal');
  });

  it('should handle already camelCase input', () => {
    const input = 'camelCase';
    const output = pascalToCamel(input);
    expect(output).toBe('camelCase');
  });

  it('should handle empty string input', () => {
    const input = '';
    const output = pascalToCamel(input);
    expect(output).toBe('');
  });

  it('should handle a single uppercase letter', () => {
    const input = 'A';
    const output = pascalToCamel(input);
    expect(output).toBe('a');
  });

  it('should handle a single lowercase letter', () => {
    const input = 'a';
    const output = pascalToCamel(input);
    expect(output).toBe('a');
  });

  it('should handle mixed case input', () => {
    const input = 'PascalCaseStringExample';
    const output = pascalToCamel(input);
    expect(output).toBe('pascalCaseStringExample');
  });
});

/**
 * Test cases for pascal case to kebab case conversion
 */
describe('validate: convert pascal case to kebab case', () => {
  it('should convert PascalCase to kebab-case', () => {
    const input = 'PascalCaseString';
    const output = pascalToKebab(input);
    expect(output).toBe('pascal-case-string');
  });

  it('should handle single word PascalCase', () => {
    const input = 'Pascal';
    const output = pascalToKebab(input);
    expect(output).toBe('pascal');
  });

  it('should handle already kebab-case input', () => {
    const input = 'kebab-case';
    const output = pascalToKebab(input);
    expect(output).toBe('kebab-case');
  });

  it('should handle empty string input', () => {
    const input = '';
    const output = pascalToKebab(input);
    expect(output).toBe('');
  });

  it('should handle consecutive uppercase letters', () => {
    const input = 'HTMLParser';
    const output = pascalToKebab(input);
    expect(output).toBe('html-parser');
  });

  it('should handle input with leading uppercase letter', () => {
    const input = 'LeadingUppercase';
    const output = pascalToKebab(input);
    expect(output).toBe('leading-uppercase');
  });

  it('should handle input with trailing uppercase letter', () => {
    const input = 'TrailingUppercase';
    const output = pascalToKebab(input);
    expect(output).toBe('trailing-uppercase');
  });

  it('should handle single uppercase letter', () => {
    const input = 'A';
    const output = pascalToKebab(input);
    expect(output).toBe('a');
  });

  it('should handle single lowercase letter', () => {
    const input = 'a';
    const output = pascalToKebab(input);
    expect(output).toBe('a');
  });
});

/**
 * Test cases for pascal case to snake case conversion
 */
describe('validate: convert pascal case to snake case', () => {
  it('should convert PascalCase to snake_case', () => {
    const input = 'PascalCaseString';
    const output = pascalToSnake(input);
    expect(output).toBe('pascal_case_string');
  });

  it('should handle single word PascalCase', () => {
    const input = 'Pascal';
    const output = pascalToSnake(input);
    expect(output).toBe('pascal');
  });

  it('should handle already snake_case input', () => {
    const input = 'snake_case';
    const output = pascalToSnake(input);
    expect(output).toBe('snake_case');
  });

  it('should handle empty string input', () => {
    const input = '';
    const output = pascalToSnake(input);
    expect(output).toBe('');
  });

  it('should handle single uppercase letter', () => {
    const input = 'A';
    const output = pascalToSnake(input);
    expect(output).toBe('a');
  });

  it('should handle single lowercase letter', () => {
    const input = 'a';
    const output = pascalToSnake(input);
    expect(output).toBe('a');
  });

  it('should handle mixed case input', () => {
    const input = 'PascalCaseStringExample';
    const output = pascalToSnake(input);
    expect(output).toBe('pascal_case_string_example');
  });

  it('should handle input with leading uppercase', () => {
    const input = 'LeadingUppercase';
    const output = pascalToSnake(input);
    expect(output).toBe('leading_uppercase');
  });

  it('should handle input with trailing uppercase', () => {
    const input = 'TrailingUppercase';
    const output = pascalToSnake(input);
    expect(output).toBe('trailing_uppercase');
  });
});

/**
 * Test cases for snake case to camel case conversion
 */
describe('validate: convert snake case to camel case', () => {
  it('should convert snake_case to camelCase', () => {
    const input = 'this_is_snake_case';
    const expected = 'thisIsSnakeCase';
    expect(snakeToCamel(input)).toBe(expected);
  });

  it('should handle single character string', () => {
    const input = 'a';
    const expected = 'a';
    expect(snakeToCamel(input)).toBe(expected);
  });

  it('should handle camelCase input', () => {
    const input = 'camelCase';
    const expected = 'camelCase';
    expect(snakeToCamel(input)).toBe(expected);
  });

  it('should handle PascalCase input', () => {
    const input = 'PascalCaseExample';
    const expected = 'PascalCaseExample';
    expect(snakeToCamel(input)).toBe(expected);
  });

  it('should handle leading underscore', () => {
    const input = '_leading_underscore';
    const expected = 'LeadingUnderscore';
    expect(snakeToCamel(input)).toBe(expected);
  });

  it('should handle empty string', () => {
    const input = '';
    const expected = '';
    expect(snakeToCamel(input)).toBe(expected);
  });

  it('should handle special characters in the string', () => {
    const input = 'snake_case_with$special_characters';
    const expected = 'snakeCaseWith$specialCharacters';
    expect(snakeToCamel(input)).toBe(expected);
  });
});

/**
 * Test cases for snake case to kebab case conversion
 */
describe('validate: convert snake case to kebab case', () => {
  it('should convert snake_case to kebab-case', () => {
    const input = 'snake_case_string';
    const output = snakeToKebab(input);
    expect(output).toBe('snake-case-string');
  });

  it('should handle single word snake_case', () => {
    const input = 'snake';
    const output = snakeToKebab(input);
    expect(output).toBe('snake');
  });

  it('should handle already kebab-case input', () => {
    const input = 'kebab-case';
    const output = snakeToKebab(input);
    expect(output).toBe('kebab-case');
  });

  it('should handle empty string input', () => {
    const input = '';
    const output = snakeToKebab(input);
    expect(output).toBe('');
  });

  it('should handle single underscore', () => {
    const input = 'snake_';
    const output = snakeToKebab(input);
    expect(output).toBe('snake-');
  });

  it('should handle multiple underscores', () => {
    const input = 'this_is_a_test';
    const output = snakeToKebab(input);
    expect(output).toBe('this-is-a-test');
  });

  it('should handle input with leading underscore', () => {
    const input = '_leading_underscore';
    const output = snakeToKebab(input);
    expect(output).toBe('-leading-underscore');
  });

  it('should handle input with trailing underscore', () => {
    const input = 'trailing_underscore_';
    const output = snakeToKebab(input);
    expect(output).toBe('trailing-underscore-');
  });

  it('should handle single lowercase letter', () => {
    const input = 'a';
    const output = snakeToKebab(input);
    expect(output).toBe('a');
  });

  it('should handle single uppercase letter', () => {
    const input = 'A';
    const output = snakeToKebab(input);
    expect(output).toBe('A');
  });
});

/**
 * Test cases for snake case to pascal case conversion
 */
describe('validate: convert snake case to pascal case', () => {
  it('should convert snake_case to PascalCase', () => {
    const input = 'snake_case_string';
    const output = snakeToPascal(input);
    expect(output).toBe('SnakeCaseString');
  });

  it('should handle single word snake_case', () => {
    const input = 'snake';
    const output = snakeToPascal(input);
    expect(output).toBe('Snake');
  });

  it('should handle already PascalCase input', () => {
    const input = 'PascalCase';
    const output = snakeToPascal(input);
    expect(output).toBe('PascalCase');
  });

  it('should handle empty string input', () => {
    const input = '';
    const output = snakeToPascal(input);
    expect(output).toBe('');
  });

  it('should handle input with leading underscore', () => {
    const input = '_leading_underscore';
    const output = snakeToPascal(input);
    expect(output).toBe('LeadingUnderscore');
  });

  it('should handle single lowercase letter', () => {
    const input = 'a';
    const output = snakeToPascal(input);
    expect(output).toBe('A');
  });

  it('should handle single uppercase letter', () => {
    const input = 'A';
    const output = snakeToPascal(input);
    expect(output).toBe('A');
  });
});
