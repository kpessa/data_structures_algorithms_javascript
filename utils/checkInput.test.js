const { expect } = require('@jest/globals');
const checkInput = require('./checkInput');

test('Input: <Integer>', () => expect(checkInput(3)).toBe(undefined));
test('Input: <Float>', () => expect(() => checkInput(3.2)).toThrow());
test('Input: <String>', () => expect(() => checkInput('string')).toThrow());
test('Input: <undefined>', () => expect(() => checkInput(undefined)).toThrow());
test('Input: <null>', () => expect(checkInput(null)).toBe(true));
