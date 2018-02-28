import longest from './index';

test('longestCommonPrefix',() => {
    expect(longest([])).toBe("");
    expect(longest(["a","a"])).toBe("a");
    expect(longest(["abc","abcdefg"])).toBe("abc");
    expect(longest(["abc","abcdefg","acdefg"])).toBe("a");
    expect(longest(["abc","abcdefg","b","acdefg"])).toBe("");
})