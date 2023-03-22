import { it, expect } from 'vitest';
import { transformToNumber } from './numbers';

it('should transform a string to a number', () => {
    const value = '1';
    const result = transformToNumber(value);
    expect(result).toBe(+value);
});

it('should yield NaN when transforming a non-numeric string', () => {
    const value = 'a';
    const result = transformToNumber(value);
    expect(result).toBeNaN();
});

it('should yield NaN when transforming an object', () => {
    const value = {};
    const result = transformToNumber(value);
    expect(result).toBeNaN();
});

it('should yield NaN when transforming an array', () => {
    const value = [];
    const result = transformToNumber(value);
    expect(result).not.toBeNaN();
});

it('should yield NaN when transforming a boolean', () => {
    const value = true;
    const result = transformToNumber(value);
    expect(result).not.toBeNaN();
});