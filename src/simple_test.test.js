// // creating test using jest
// get the functions from sample.js using require keyword
const {addFunc, isDivisibleBy5, checkOddEven} = require("./sample");

// //ACTIVITY 1
//create a test suite using describe keyword
describe("Test suite for sample.js functions", () => {
    //create test using 'it' keyword
    it("should add 3 numbers", () => {
        const result = addFunc(1, 3, 4);
        //compare the result and the expected value:
        expect(result).toBe(8);
    })

})


// ACTIVITY 2
//create a test suite using describe keyword
describe("Test suite for sample.js functions", () => {
    //create test using 'it' keyword
    it("return true when divisible by 5 else return false", () => {
        const result = isDivisibleBy5(11);
        //compare the result and the expected value:
        expect(result).toBe(false);
    })

})


// test driven development
// 1. write the test
it ('should test for odd or even', () =>{
    const result = checkOddEven(1999);
    expect(result).toBe(false)
})

// run test by navigating to src folder in terminal and type 'npm run test'
// the code will look for the sample.js file and run the test

