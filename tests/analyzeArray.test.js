import { analyzeArray } from "../lib/analyzeArray";

test('[1,2,3] returns avg:2, min:1, max:3, length:3', () => {
    const expected = {
        average: 2,
        min: 1,
        max: 3,
        length: 3,
    }
    expect(analyzeArray([1,2,3])).toStrictEqual(expected);
});

test('[1] returns avg:1, min:1, max:1, length:1', () => {
    const expected = {
        average: 1,
        min: 1,
        max: 1,
        length: 1,
    }
    expect(analyzeArray([1])).toStrictEqual(expected);
});

test('[1,8,3,4,2,6] returns avg:4, min:1, max:8, length:6', () => {
    const expected = {
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    }
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual(expected);
});