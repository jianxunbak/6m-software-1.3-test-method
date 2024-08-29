const addFunc = (a, b, c) => {
    return a + b + c;
}

const isDivisibleBy5 = (num1) => {
    if (num1 % 5 == 0){
        return true;
    } else {
        return false;
    }
}


// 2. write the code
const checkOddEven = (num) => {
    if (num % 2 == 0) {
        return true
    }
    else {return false}
}

// allows other js files to use the functions within module.exports.
module.exports = {
    addFunc,
    isDivisibleBy5,
    checkOddEven
}