
export const add = (a, b) => {
    return Number(a) + Number(b);
};

export const substract = (a, b) => {
    return Number(a) - Number(b);
};

export const divide = (a, b) => {
    if ( b == 0 ) {
        return "ERROR. Division by 0.";
    }
    return Number(a) / Number(b);
};

export const multiply = (a, b) => {
    return Number(a) * Number(b);
}