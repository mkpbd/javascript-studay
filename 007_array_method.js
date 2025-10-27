// array Methods and advanced operations
let fruits = ['apple', 'blueberry', 'cherry'];
console.log(fruits); // ['apple', 'blueberry', 'cherry']
let numbers = [1, 2, 3, 4, 5];
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
// array shift and unshift
let firstFruit = fruits.shift();
console.log(firstFruit); // 'apple'
// array unshift
fruits.unshift('avocado');
console.log(fruits);
// ['avocado', 'blueberry', 'cherry']
// array methods: map, filter, reduce
let doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15
// multidimensional arrays
// array  foreach method
numbers.forEach(num => {
    console.log(num);
});
// 1, 2, 3, 4, 5

// array find method
let foundNumber = numbers.find(num => num > 3);
console.log(foundNumber); // 4

// array some method
let hasEvenNumber = numbers.some(num => num % 2 === 0);
console.log(hasEvenNumber); // true
// array every method
let allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true
// array includes method
let includesThree = numbers.includes(3);
console.log(includesThree);

// array indexOf method
let indexOfFour = numbers.indexOf(4);
console.log(indexOfFour); // 3
// array lastIndexOf method
numbers.push(3);
let lastIndexOfThree = numbers.lastIndexOf(3);
console.log(lastIndexOfThree); // 6

// array slice method
let subArray = numbers.slice(1, 4);
console.log(subArray); // [2, 3, 4]
// array splice method
let splicedArray = numbers.splice(2, 2, 10, 11);
console.log(splicedArray);
console.log(numbers); // [1, 2, 10, 11, 5, 3]
// array flat method
let nestedArray = [1, [2, [3, 4]], 5];
let flatArray = nestedArray.flat(2);
console.log(flatArray); // [1, 2, 3, 4, 5]
// array isArray method
let isArray = Array.isArray(fruits);
console.log(isArray); // true
// array fill method
let filledArray = new Array(5).fill(0);
console.log(filledArray); // [0, 0, 0, 0, 0]
// array reverse method
let reversedFruits = fruits.reverse();
console.log(reversedFruits); // ['cherry', 'blueberry', 'avocado']
// array sort method
let sortedNumbers = [3, 1, 4, 2, 5].sort((a, b) => a - b);
console.log(sortedNumbers); // [1, 2, 3, 4, 5]  
// array destructuring
let [first, second, third] = fruits;
console.log(first);
// array copyWithin method
let copyArray = [1, 2, 3, 4, 5];
copyArray.copyWithin(0, 3, 5);
console.log(copyArray); // [4, 5, 3, 4, 5]
let [num1, , num3] = numbers;
// array join method
let joinedFruits = fruits.join(', ');
console.log(joinedFruits); // 'avocado, blueberry, cherry'
// array at method
let firstNumber = numbers.at(0);
console.log(firstNumber);
// array from method
let charArray = Array.from('hello');
console.log(charArray); // ['h', 'e', 'l', 'l', 'o']
// array  isArray method
let checkArray = Array.isArray(charArray);
console.log(checkArray); // true
// array toReversed method
let toReverseArray = [1, 2, 3, 4, 5];
let reversedArray = toReverseArray.toReversed();
console.log(reversedArray);
// [5, 4, 3, 2, 1]
// array  entries method
let entries = fruits.entries();
for (let [index, fruit] of entries) {
    console.log(`${index}: ${fruit}`);
}
// array values method
let values = fruits.values();
for (let value of values) {
    console.log(value);
}
// array keys method

// array concat method
let moreFruits = ['date', 'elderberry'];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ['avocado', 'blueberry', 'cherry', 'date', 'elderberry']
// array every method
let allLongerThanThree = allFruits.every(fruit => fruit.length > 3);
console.log(allLongerThanThree); // true


/**
 * 
 concat(): Joins two or more arrays and returns a new array.
every(): Determines whether all elements in an array pass a test.
filter(): Creates a new array with all elements that pass a test.
find(): Returns the first element in an array that passes a test.
forEach(): Calls a function for each element in an array.
map(): Creates a new array with the results of calling a function for each element.
pop(): Removes the last element from an array and returns that element.
push(): Adds one or more elements to the end of an array and returns the new length.
reduce(): Reduces an array to a single value by applying a function to each element.
shift(): Removes the first element from an array and returns that element.
unshift(): Adds one or more elements to the beginning of an array and returns the new length.
slice(): Extracts a section of an array and returns a new array.
sort(): Sorts the elements of an array.
splice(): Adds or removes elements from an array.
toString(): Converts an array to a string and returns the result.
indexOf(): Returns the index of the first occurrence of a value in an array.
lastIndexOf(): Returns the index of the last occurrence of a value in an array.
join(): Joins all elements of an array into a string and returns the result.
reverse(): Reverses the order of the elements in an array.
includes(): Checks if an array includes a specified element, returning true or false.
some(): Checks if at least one element in the array passes a test, returning true or false.
findIndex(): Returns the index of the first element in an array that passes a test.
fill(): Fills the elements in an array with a static value and returns the modified array.
copyWithin(): Copies a sequence of elements within an array to another location within the same array.
flat(): Flattens a nested array by removing sub-array nesting levels.
at(): Accesses array elements using both positive and negative indexes.
toReversed(): Reverses the order of elements of an array and returns a new array with the elements in the reversed order.
isArray(): Determines whether the passed value is an array.
from(): Creates a new array instance from an array-like or iterable object.
entries(): Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
values(): Returns a new Array Iterator object that contains the values for each index in the array.
keys(): Returns a new Array Iterator object that contains the keys for each index in the array.
 * 
 */