// array declaration and initialization
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits); // ['apple', 'banana', 'cherry']
// accessing array elements
console.log(fruits[0]); // 'apple'
console.log(fruits[2]); // 'cherry'
// modifying array elements
fruits[1] = 'blueberry';
console.log(fruits);
// ['apple', 'blueberry', 'cherry']

// create new array using Array constructor
let numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers); // [1, 2, 3, 4, 5]
// array methods
fruits.push('date');
console.log(fruits); // ['apple', 'blueberry', 'cherry', 'date']

let lastFruit = fruits.pop();
console.log(lastFruit); // 'date'
console.log(fruits); // ['apple', 'blueberry', 'cherry']

// iterating over an array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// apple

// blueberry
// cherry

for (let fruit of fruits) {
    console.log(fruit);
}
// apple
// blueberry
// cherry

// array methods: map, filter, reduce
let doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15
// multidimensional arrays

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[0][1]);
// 2
console.log(matrix[2][2]);
// 9
matrix[1][1] = 10;
console.log(matrix);
// [[1, 2, 3],
//  [4, 10, 6],
//  [7, 8, 9]]
// array destructuring
let [first, second, third] = fruits;
console.log(first);
console.log(second);
console.log(third);
// apple
// blueberry
// cherry
let [num1, , num3] = numbers;
console.log(num1);
console.log(num3);
// 1
// 3
// spread operator with arrays
let moreFruits = ['elderberry', 'fig', 'grape'];
let allFruits = [...fruits, ...moreFruits];
console.log(allFruits);
// ['apple', 'blueberry', 'cherry', 'elderberry', 'fig', 'grape']
let maxNumber = Math.max(...numbers);
console.log(maxNumber); // 5
// converting array-like objects to arrays
function arrayFromArgs() {

    return Array.from(arguments);
}
let argsArray = arrayFromArgs(1, 2, 3, 4);
console.log(argsArray); // [1, 2, 3, 4]
// end of array example


