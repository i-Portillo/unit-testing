
const cipher = {
    plain: 'abcdefghijklmnopqrstuvwxyz',
    code: 'bcdefghijklmnopqrstuvwxyza'
};

export const caesarCipher = (str) => {
    const input = [...str];
    const re = /[a-zA-Z]/g;
    let output = "";
    input.forEach( c => {
        let codedChar = c;
        if (c.match(re)) {
            if (c === c.toUpperCase()) {
                codedChar = code(c.toLowerCase()).toUpperCase();
            } else {
                codedChar = code(c);
            }
        }
        output += codedChar;
    });

    return output;
};

const code = (c) => {
    return cipher.code[cipher.plain.indexOf(c)];
};