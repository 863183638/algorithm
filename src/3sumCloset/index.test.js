import sum from './index'

test('3sumCloset',() => {
    expect(sum([0,0,0],1)).toBe(0);
    expect(sum([0,1,-2,-3,0,2,5],2)).toBe(2);
    expect(sum([0,1,-2,-3,0,2,5],4)).toBe(4);
    expect(sum([0,2,1,-3],2)).toBe(3);
})