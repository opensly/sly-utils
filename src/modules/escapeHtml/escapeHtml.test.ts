import { escapeHtml } from './escapeHtml';

describe('validate: escapeHtml utility', () => {
  it('should escape HTML special characters', () => {
    expect(escapeHtml('<div>Hello & "World"</div>')).toBe('&lt;div&gt;Hello &amp; &quot;World&quot;&lt;/div&gt;');
  });

  it('should return the same string if no special characters', () => {
    expect(escapeHtml('plain text')).toBe('plain text');
  });

  it('should handle empty string', () => {
    expect(escapeHtml('')).toBe('');
  });
});
