import sum from './index';

test('sum of pairs',() => {
    expect(sum([1, 4, 8, 7, 3, 15],8)).toEqual([1, 7]);
    expect(sum([4, -2, 3, 3, 4],8)).toEqual([4, 4]);
    expect(sum([20, -13, 40],-7)).toBe(undefined);
})