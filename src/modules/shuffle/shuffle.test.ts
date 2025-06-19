import { shuffle } from './shuffle';

describe('validate: shuffle the given array', () => {
  it('should shuffle the array', () => {
    const arr = [1, 2, 3, 4, 5];
    let isDifferent = false;
    let shuffled: number[] = arr;
    for (let i = 0; i < 10; i++) {
      shuffled = shuffle(arr);
      if (shuffled.join(',') !== arr.join(',')) {
        isDifferent = true;
        break;
      }
    }
    // Check if all elements are still present after shuffling
    expect(shuffled.sort()).toEqual(arr.sort());
    // Check if the shuffled array is not always the same as the original array
    expect(isDifferent).toBe(true);
    // Check if the length of the shuffled array is the same as the original array
    expect(shuffled.length).toBe(arr.length);
    // Check if the shuffled array contains all unique elements
    expect(new Set(shuffled).size).toBe(arr.length);
  });

  it('should return an empty array when given an empty array', () => {
    const arr: any[] = [];
    const shuffled = shuffle(arr);
    expect(Array.isArray(shuffled)).toBe(true);
    expect(shuffled.length).toBe(0);
  });

  it('should not modify the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const originalArr = [...arr]; // Create a copy of the original array
    shuffle(arr);
    // Check if the original array remains unchanged
    expect(arr).toEqual(originalArr);
  });

  it('should handle arrays with duplicate elements correctly', () => {
    const arr = [1, 1, 2, 2, 3, 3];
    const shuffled = shuffle(arr);
    // Check if all elements are still present after shuffling
    expect(shuffled.sort()).toEqual(arr.sort());
    // Check if the length of the shuffled array is the same as the original array
    expect(shuffled.length).toBe(arr.length);
  });

  it('should shuffle an array of objects and preserve all objects', () => {
    const arr = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ];
    let isDifferent = false;
    let shuffled: { id: number }[] = arr;
    for (let i = 0; i < 10; i++) {
      shuffled = shuffle(arr);
      if (JSON.stringify(shuffled) !== JSON.stringify(arr)) {
        isDifferent = true;
        break;
      }
    }
    // Check if all objects are still present after shuffling
    expect(shuffled.map(o => o.id).sort()).toEqual(arr.map(o => o.id).sort());
    expect(isDifferent).toBe(true);
  });

  it('should shuffle an array of strings', () => {
    const arr = ['apple', 'banana', 'cherry', 'date'];
    let isDifferent = false;
    let shuffled: string[] = arr;
    for (let i = 0; i < 10; i++) {
      shuffled = shuffle(arr);
      if (shuffled.join(',') !== arr.join(',')) {
        isDifferent = true;
        break;
      }
    }
    expect(shuffled.sort()).toEqual(arr.sort());
    expect(isDifferent).toBe(true);
  });

  it('should shuffle a large array efficiently', () => {
    const arr = Array.from({ length: 1000 }, (_, i) => i);
    let isDifferent = false;
    let shuffled: number[] = arr;
    for (let i = 0; i < 5; i++) {
      shuffled = shuffle(arr);
      if (shuffled.join(',') !== arr.join(',')) {
        isDifferent = true;
        break;
      }
    }
    expect(shuffled.sort((a, b) => a - b)).toEqual(arr);
    expect(isDifferent).toBe(true);
  });

  it('should handle an array with a single element', () => {
    const arr = [42];
    const shuffled = shuffle(arr);
    expect(shuffled).toEqual([42]);
  });
});
