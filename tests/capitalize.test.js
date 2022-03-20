import capitalize from '../lib/capitalize'

test('"hello" becomes "Hello"', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('"" becomes ""', () => {
    expect(capitalize('')).toBe('');
});

test('"hello wolrd!" becomes "Hello world!"', () => {
    expect(capitalize('hello world!')).toBe('Hello world!');
});

test('"Hello" keeps being "Hello"', () => {
    expect(capitalize('Hello')).toBe('Hello');
});

test('".abc" keeps being ".abc"', () => {
    expect(capitalize('.abc')).toBe('.abc');
})

test('"   hello    world" keeps being "   hello    world"', () => {
    expect(capitalize('   hello    world')).toBe('   hello    world');
})