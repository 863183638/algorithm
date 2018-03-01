import sum from './index'

test('3sum',() => {
    expect(sum([-1,0,1,2,-1,-4],1)).toEqual([[-1, 0, 2]]);
    expect(sum([-1,0,2,-4],0)).toEqual([]);
    expect(sum([-1,0,1,2,-1,-4,3,5,-2,-2],2)).toEqual([[-4, 1, 5], [-2, -1, 5], [-2, 1, 3], [-1, 0, 3], [-1, 1, 2]]);
})