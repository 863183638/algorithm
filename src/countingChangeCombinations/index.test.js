import index from './index';

test('test', () => {
    expect(index(4, [1,2])).toBe(3);
    expect(index(10, [5,2,3])).toBe(4);
    expect(index(11, [5,7])).toBe(0);
})