
const reverseString = (str) => {

    if (str) {
        let newStr = '';
        [...str].forEach(c => {
            newStr = c + newStr;
        });
        return newStr;
    }

    return str;
};

export default reverseString;