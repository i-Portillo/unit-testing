import reverseString from '../lib/reverseString';

test('"" keeps being ""', () => {
    expect(reverseString('')).toBe('');
});

test('"abc" becomes "cba"', () => {
    expect(reverseString('abc')).toBe('cba');
});

test('".,[;]" becomes "];[,."', () => {
    expect(reverseString(".,[;]")).toBe("];[,.");
})

test('"    " returns "    "', () => {
    expect(reverseString("    ")).toBe("    ");
});