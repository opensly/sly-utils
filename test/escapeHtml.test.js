import { expect } from 'chai';
import { escapeHtml } from '../src/modules/escapeHtml.js';

describe('validate: escape the html entities in a given string', () => {
  it('should escape ampersands', () => {
    const input = 'AT&T';
    const expected = 'AT&amp;T';
    expect(escapeHtml(input)).to.equal(expected);
  });

  it('should escape less than signs', () => {
    const input = '<div>';
    const expected = '&lt;div&gt;';
    expect(escapeHtml(input)).to.equal(expected);
  });

  it('should escape greater than signs', () => {
    const input = '</div>';
    const expected = '&lt;/div&gt;';
    expect(escapeHtml(input)).to.equal(expected);
  });

  it('should escape single quotes', () => {
    const input = "O'Reilly";
    const expected = 'O&#39;Reilly';
    expect(escapeHtml(input)).to.equal(expected);
  });

  it('should escape double quotes', () => {
    const input = 'He said, "Hello"';
    const expected = 'He said, &quot;Hello&quot;';
    expect(escapeHtml(input)).to.equal(expected);
  });

  it('should escape multiple special characters', () => {
    const input = '<div class="example">O\'Reilly & Associates</div>';
    const expected = '&lt;div class=&quot;example&quot;&gt;O&#39;Reilly &amp; Associates&lt;/div&gt;';
    expect(escapeHtml(input)).to.equal(expected);
  });

  it('should handle non-string input by converting to string', () => {
    const input = 12345;
    const expected = '';
    expect(escapeHtml(input)).to.equal(expected);
  });
});
