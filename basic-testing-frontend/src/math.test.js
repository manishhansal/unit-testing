import { it, expect } from 'vitest';
import { add } from './math';

it('should summarize all number values in an array', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = add(numbers);
    expect(result).toBe(15);
})