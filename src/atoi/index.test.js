import atoi from './index';

test('atoi',() => {
    expect(atoi('   12313aaba')).toBe(12313);
    expect(atoi('  +123.1a3323a')).toBe(123);
    expect(atoi('123.7aba')).toBe(123);
});