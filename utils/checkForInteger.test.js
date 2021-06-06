const { expect } = require('@jest/globals');
const checkForInteger = require('./checkForInteger');

test('Input: <Integer>', () => expect(checkForInteger(3)).toBe(true));
test('Input: <Float>', () => expect(checkForInteger(3.2)).toBe(false));
test('Input: <String>', () => expect(checkForInteger('string')).toBe(false));
test('Input: <undefined>', () => expect(checkForInteger(undefined)).toBe(false));
