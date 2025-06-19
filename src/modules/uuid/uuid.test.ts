import { uuid, uuidShort } from './uuid';

describe('validate: UUID', () => {
  it('should generate a string of length 36', () => {
    const id = uuid();
    expect(id).toHaveLength(36);
  });

  it('should generate a string in the correct UUID format', () => {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    const id = uuid();
    expect(id).toMatch(uuidRegex);
  });

  it('should generate unique UUIDs', () => {
    const id1 = uuid();
    const id2 = uuid();
    expect(id1).not.toBe(id2);
  });
});

describe('validate: short UUID', () => {
  it('should generate a string of length 13', () => {
    const id = uuidShort();
    expect(id).toHaveLength(13);
  });

  it('should generate a string in the correct short UUID format', () => {
    const uuidShortRegex = /^[0-9a-f]{8}-[0-9a-f]{4}$/i;
    const id = uuidShort();
    expect(id).toMatch(uuidShortRegex);
  });

  it('should generate unique short UUIDs', () => {
    const id1 = uuidShort();
    const id2 = uuidShort();
    expect(id1).not.toBe(id2);
  });
});
