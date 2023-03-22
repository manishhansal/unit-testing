import { it, expect, describe } from 'vitest';
import { validateStringNotEmpty, validateNumber } from './validation';

describe('validateStringNotEmpty()', () => {
    it('should throw an error if the value is empty', () => {
        const value = '';
        const validateFn = () => validateStringNotEmpty(value);
        expect(validateFn).toThrow();
    });
    
    it('should throw an error message that contains a reason (must not be empty)', () => {
        const value = '';
        const validateFn = () => validateStringNotEmpty(value);
        expect(validateFn).toThrow(/must not be empty/);
    });
    
    it('should throw an error if a long string of blanks is provided', () => {
        const value = '   ';
        const validateFn = () => validateStringNotEmpty(value);
        expect(validateFn).toThrow();
    });
    
    it('should throw an error if any other value than a string is provided', () => {
        const valueNum = 1;
        const valueBool = true;
        const valueObj = {};
    
        const validateFnNum = () => validateStringNotEmpty(valueNum);
        const validateFnBool = () => validateStringNotEmpty(valueBool);
        const validateFnObj = () => validateStringNotEmpty(valueObj);
    
        expect(validateFnNum).toThrow();
        expect(validateFnBool).toThrow();
        expect(validateFnObj).toThrow();
    });
    
    it('should not throw an error if a non-empty string is provided', () => {
        const value = 'test';
        const validateFn = () => validateStringNotEmpty(value);
        expect(validateFn).not.toThrow();
    });
});

describe('validateNumber()', () => { 
    it('should throw an error if NaN is provided', () => {
        const value = NaN;
        const validateFn = () => validateNumber(value);
        expect(validateFn).toThrow();
    });
    
    it('should throw an error with a message that contains a reason (invalid number)', () => {
        const value = NaN;
        const validateFn = () => validateNumber(value);
        expect(validateFn).toThrow(/Invalid number/);
    });
    
    it('should throw an error if a non-numeric value is provided', () => {
        const value = '1';
        const validateFn = () => validateNumber(value);
        expect(validateFn).toThrow();
    });
    
    it('should not throw an error if a numeric value is provided', () => {
        const value = 1;
        const validateFn = () => validateNumber(value);
        expect(validateFn).not.toThrow();
    });
});