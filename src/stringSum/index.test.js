import sum from './index';

test('stringSum',() => {
    expect(sum('12345','23456')).toBe('35801');
    expect(sum('123','23456')).toBe('23579');
    expect(sum('98765','987')).toBe('99752');
    expect(sum('99999','12')).toBe('100011');
})