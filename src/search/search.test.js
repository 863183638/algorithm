import lineSearch from './lineSearch';
import bisectSearch from './bisectSearch';

const arr1 = [1,2,3,4,5,6,7,8];

test('lineSearch',() => {
    expect(lineSearch(3,arr1)).toBe(2);
    expect(lineSearch(18,arr1)).toBe(-1);
})

test('bisectSearch',() => {
    expect(bisectSearch(3,arr1)).toBe(2);
    expect(bisectSearch(18,arr1)).toBe(-1);
})