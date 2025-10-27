// arrow function syntax
const add = (a, b) => a + b;
const sum = add(5, 10); // 15

// arrow function with block body
const multiply = (a, b) => {
    return a * b;
};
const product = multiply(5, 10); // 50

// arrow function with single parameter
const square = x => x * x;
const squaredValue = square(5); // 25

// arrow function with no parameters
const getRandomNumber = () => Math.random();
const randomNum = getRandomNumber(); // Random number between 0 and 1
console.log(sum); // 15


// arrow function with default parameters
const multiplyWithDefault = (a, b = 2) => {
    return a * b;
};
const result1 = multiplyWithDefault(5); // Uses default value for b

// arrow function with rest parameters
const sumAll = (...numbers) => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
const total = sumAll(1, 2, 3, 4, 5); // Sums all provided numbers

// arrow function with parameter validation
const divide = (a, b) => {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}
const divisionResult = divide(10, 2); // Valid division
const divisionByZero = divide(10, 0); // Division by zero error

// arrow function with alternative parameter validation
const safeDivide = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Error: Both parameters must be numbers.";
    }
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;

}
const safeResult1 = safeDivide(10, 2); // Valid division
const safeResult2 = safeDivide(10, 'a'); // Invalid parameter type
const safeResult3 = safeDivide(10, 0); // Division by zero error
