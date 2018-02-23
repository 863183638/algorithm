import longestPalindrome from './index';

test('longestPalindrome',() => {
    expect(longestPalindrome('babad')).toBe('bab');
    expect(longestPalindrome('xabax')).toBe('xabax');
})