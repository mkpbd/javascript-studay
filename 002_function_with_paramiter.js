function showMessage(message, parameter, ...optionalParams) {
    console.log(message);
    console.log(parameter);
    console.log(optionalParams);
}
showMessage("Hello, World!", 42, "optional1", "optional2", "optional3");

// function with local parameter
function calculateArea(length, width) {
    return length * width;

    // Example usage

}
const area = calculateArea(5, 10);

// function with default parameter
function multiply(a, b = 2) {
    return a * b;
}

const result1 = multiply(5); // Uses default value for b

// function with rest parameter
function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

const total = sumAll(1, 2, 3, 4, 5); // Sums all provided numbers

// function with  validation of parameters
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}
const divisionResult = divide(10, 2); // Valid division



const divisionByZero = divide(10, 0); // Division by zero error

// function with alternative  validation of parameters
function safeDivide(a, b) {
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

// function with parameter destructuring
function displayUser({ name, age }) {
    return `Name: ${name}, Age: ${age}`;
}
const userInfo = displayUser({ name: "John", age: 30 });
console.log(area); // 50
console.log(result1); // 10

console.log(total); // 15



// function with checkAge validation
function checkAge(age) {
    if (age < 0) {
        return "Error: Age cannot be negative.";
    }
    return `Age is ${age}`;
}

const ageCheck1 = checkAge(25); // Valid age
const ageCheck2 = checkAge(-5); // Negative age error
console.log(divisionResult); // 5

console.log(divisionByZero); // Error: Division by zero is not allowed.

console.log(safeResult1); // 5

// function name convention example
function getUserName(userId) {
    return `User_${userId}`;
}
getUserName(101); // "User_101"

function isAdult(age) {
    return age >= 18;
}
isAdult(20); // true

function setUserName(userId, userName) {
    return `User ID: ${userId}, User Name: ${userName}`;
}

setUserName(101, "Alice"); // "User ID: 101, User Name: Alice"

function calculateSum(a, b) {
    return a + b;
}

console.log(calculateSum(5, 10)); // 15

// show prime number
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false




