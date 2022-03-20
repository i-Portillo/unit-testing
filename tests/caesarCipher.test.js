import { caesarCipher } from "../lib/caesarCipher";

test('"" returns ""', () => {
    expect(caesarCipher("")).toBe("");
});

test('"a" returns "b"', () => {
    expect(caesarCipher("a")).toBe("b");
});

test('"abc" returns "bcd"', () => {
    expect(caesarCipher("abc")).toBe("bcd");
});

test('".!abc!?" returns ".!bcd!?"', () => {
    expect(caesarCipher(".!abc!?")).toBe(".!bcd!?");
});

test('"abcdefghijklmnopqrstuvwxyz" returns "bcdefghijklmnopqrstuvwxyza"', () => {
    expect(caesarCipher("abcdefghijklmnopqrstuvwxyz")).toBe("bcdefghijklmnopqrstuvwxyza");
});