import { add, substract, divide, multiply } from '../lib/calculator';

// ADD tests
test('"1, 1" returns "2"', () => {
    expect(add(1, 1)).toBe(2);
});

test('"\'1\', \'1\'" returns "2"', () => {
    expect(add("1", "1")).toBe(2);
});

test('"10000, -1" returns "9999"', () => {
    expect(add(10000, -1)).toBe(9999);
});

// SUBSTRACT tests
test('"1, 1" returns "0"', () => {
    expect(substract(1, 1)).toBe(0);
});

test('"\'1\', \'1\'" returns "2"', () => {
    expect(substract("1", "1")).toBe(0);
});

test('"10000, -1" returns "9999"', () => {
    expect(substract(10000, -1)).toBe(10001);
});

// DIVIDE tests
test('"1, 1" returns "1"', () => {
    expect(divide(1, 1)).toBe(1);
});

test('"1, 0" returns "ERROR. Division by 0."', () => {
    expect(divide(1, 0)).toBe("ERROR. Division by 0.");
});

test('"1, 1000" returns "0.001"', () => {
    expect(divide(1, 1000)).toBe(0.001);
});

// MULTIPLY tests
test('"1, 1" returns "1"', () => {
    expect(multiply(1, 1)).toBe(1);
});

test('"1, 0" returns "0"', () => {
    expect(multiply(1, 0)).toBe(0);
});

test('"3, 1000" returns "3000"', () => {
    expect(multiply(3, 1000)).toBe(3000);
});