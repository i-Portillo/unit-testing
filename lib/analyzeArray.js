
export const analyzeArray = (arr) => {
    return {
        average: getAverage(arr),
        min: getMin(arr),
        max: getMax(arr),
        length: arr.length,
    }
};

const getAverage = (arr) => {
    return arr.reduce((prev, curr) => prev + curr, 0) / arr.length;
};

const getMin = (arr) => {
    return arr.reduce((prev, curr) => prev < curr ? prev : curr, Infinity);
}

const getMax = (arr) => {
    return arr.reduce((prev, curr) => prev > curr ? prev : curr, 0);
}