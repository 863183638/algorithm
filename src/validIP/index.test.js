import validIP from './index';

test('validIP',() => {
    expect(validIP('1.2.3.4')).toBe(true);
    expect(validIP('1.2.3')).toBe(false);
    expect(validIP('123.456.78.90')).toBe(false);
    expect(validIP('1.2.3.4 ')).toBe(false);
})