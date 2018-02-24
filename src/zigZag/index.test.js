import convert from './index';

test('zigZag',()=> {
    expect(convert('PAYPALISHIRING',3)).toBe('PAHNAPLSIIGYIR');
    expect(convert('ABDAGECAB',1)).toBe('ABDAGECAB');
    expect(convert('ABDAGECAB',2)).toBe('ADGCBBAEA');
    expect(convert('ABDAGECAB',4)).toBe('ACBEADGBA');
})