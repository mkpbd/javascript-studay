//============== Iterate: forEach =========

// The arr.forEach  method allows to run a function for every element of the array.
let arr = [4, 5, 6, 76, 78, 8, 9, 66, 77, 99];
arr.forEach(function (item, index, array) {
  // ... do something with item
});

// ================= For instance, this shows each element of the array: =============

// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

// And this code is more elaborate about their positions in the target array:

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});

// The result of the function (if it returns any) is thrown away and ignored.

//================= Searching in array ================

/**
 * 
 * *************************** indexOf/lastIndexOf and includes *************************
 * arr.indexOf(item, from) – looks for item starting from index from , and returns the index where it was found, otherwise -1 .
arr.lastIndexOf(item, from) – same, but looks for from right to left.
arr.includes(item, from) – looks for item starting from index from , returns
true if found.
 * 
 * 
 */

let arr1 = [1, 0, false];
alert(arr1.indexOf(0)); // 1
alert(arr1.indexOf(false)); // 2
alert(arr1.indexOf(null)); // -1

alert(arr1.includes(1)); // true

/**
 *
 * Note that the methods use === comparison. So, if we look for false , it finds exactly false and not the zero.
 *
 */

const arr2 = [NaN];
alert(arr2.indexOf(NaN)); // -1 (should be 0, but === equality doesn't work for NaN)
alert(arr2.includes(NaN)); // true (correct)

//============ find and findIndex ===============

//============== Imagine we have an array of objects. How do we find an object with the specific condition? =============

let result = arr.find(function (item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});

/**
 *
 *
 * The function is called repetitively for each element of the array:
 * item is the element.
 * index is its index.
 * array is the array itself
 *
 * If it returns true , the search is stopped, the item is returned. If nothing found, undefined is returned.
 *
 */

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];
let user = users.find((item) => item.id == 1);
alert(user.name); // John

//============== filter ==============

//The find method looks for a single (first) element that makes the function return true . If there may be many, we can use arr.filter(fn)

// The syntax is similar to find , but filter continues to iterate for all array elements even if true is already returned:

let resultsFilter = arr.filter(function (item, index, array) {
  // if true item is pushed to results and iteration continues
  // returns empty array for complete falsy scenario
});

// returns array of the first two users
let someUsers = users.filter((item) => item.id < 3);
alert(someUsers.length); // 2

// Transform an array
// This section is about the methods transforming or reordering the array.

/**
 *
 * ******************************** map ******************
 * The arr.map  method is one of the most useful and often used.
 * The syntax is:
 *
 */

let result2 = arr.map(function (item, index, array) {
  // returns the new value instead of item
});

/**
 *
 * It calls the function for each element of the array and returns the array of results.
 * For instance, here we transform each element into its length:
 *
 */

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
alert(lengths); // 5,7,6

let arr11 = [1, 2, 15];
// the method reorders the content of arr (and returns it)
arr.sort();
alert(arr11); // 1, 15, 2

/**
 * ****************** The items are sorted as strings by default. *******************
 */

function compare(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
let arr12 = [1, 2, 15];
arr12.sort(compareNumeric);
alert(arr12); // 1, 2, 15

[1, -2, 15, 2, 0, 8].sort(function (a, b) {
  alert(a + " <> " + b);
});

/**
 *
 * A comparison function may return any number
 *
 * Actually, a comparison function is only required to return a positive number to say “greater” and a negative number to say “less”.
 *
 *
 */

let arr13 = [1, 2, 15];
arr13.sort(function (a, b) {
  return a - b;
});
alert(arr13); // 1, 2, 15

//=============  Arrow functions for the best ==============

arr.sort((a, b) => a - b);

//============ split and join ============

let names = "Bilbo, Gandalf, Nazgul";
let arr14 = names.split(", ");
for (let name of arr14) {
  alert(`A message to ${name}.`); // A message to Bilbo (and other names)
}

let arrss = "Bilbo, Gandalf, Nazgul, Saruman".split(", ", 2);
alert(arrss); // Bilbo, Gandalf

//====================== array join ===============

let arr15 = ["Bilbo", "Gandalf", "Nazgul"];
let str16 = arr15.join(";");
alert(str16); // Bilbo;Gandalf;Nazgul

//====================================== reduce/reduceRight ===================
/**
 * When we need to iterate over an array – we can use forEach , for or for..of .
 * When we need to iterate and return the data for each element – we can use map .
 *
 *
 * The methods arr.reduce  and arr.reduceRight  also belong to that breed, but are a little bit more intricate.
 * They are used to calculate a single value based on the array.
 * The syntax is:
 */

let value = arr.reduce(function (previousValue, item, index, array) {
  // ...
}, 0 /*** inital value or first value */);

/**
 * The function is applied to the elements. You may notice the familiar arguments, starting from the
2nd:
item – is the current array item.
index – is its position.
array – is the array.
 * 
 */

let arr121 = [1, 2, 3, 4, 5];
let result121 = arr121.reduce((sum, current) => sum + current, 0);
alert(result121); // 15

let arraa = [1, 2, 3, 4, 5];
// removed initial value from reduce (no 0)
let resultaa = arraa.reduce((sum, current) => sum + current);
alert(resultaa); // 15

let arre = [];
// Error: Reduce of empty array with no initial value
// if the initial value existed, reduce would return it for the empty arr.
arre.reduce((sum, current) => sum + current);

//******************** Array.isArray ****************************/

// Arrays do not form a separate language type. They are based on objects.
// So typeof does not help to distinguish a plain object from an array:

alert(typeof {}); // object
alert(typeof []); // same
// It returns true if the value is an array, and false otherwise.

alert(Array.isArray({})); // false
alert(Array.isArray([])); // true

// Most methods support “thisArg”

// Almost all array methods that call functions – like find , filter , map , with a notable exception of sort , accept an optional additional parameter thisArg .

arraa.find(func, thisArg);
arraa.filter(func, thisArg);
arraa.map(func, thisArg);

//===================== The value of thisArg parameter becomes this for func . ===========

// ================ For instance, here we use an object method as a filter and thisArg comes in handy: ===============

let user1 = {
  age: 18,
  younger(otherUser) {
    return otherUser.age < this.age;
  },
};
let users1 = [{ age: 12 }, { age: 16 }, { age: 32 }];
// find all users younger than user
let youngerUsers = users.filter(user.younger, user);
alert(youngerUsers.length); // 2


/**
 * 
 * ******************************** To add/remove elements ***************************
 * 
 * push(...items) – adds items to the end,
 * pop() – extracts an item from the end,
 * shift() – extracts an item from the beginning,
 * unshift(...items) – adds items to the beginning.
 * splice(pos, deleteCount, ...items) – at index pos delete deleteCount
 * elements and insert items .
 * slice(start, end) – creates a new array, copies elements from position start till
 * end (not inclusive) into it.
 * concat(...items) – returns a new array: copies all members of the current one and
 * adds items to it. If any of items is an array, then its elements are taken.
 * 
 * 
 */


//********************************** To search among elements ******************************* */

/**
 * 
 * 
 * indexOf/lastIndexOf(item, pos) – look for item starting from position pos ,
 * return the index or -1 if not found.
 * includes(value) – returns true if the array has value , otherwise false .
 * find/filter(func) – filter elements through the function, return first/all values that make it return true .
 * findIndex is like find , but returns the index instead of a value
 * 
 * 
 */

//********************** To iterate over elements: ********************************/

// forEach(func) – calls func for every element, does not return anything 

//=============== To transform the array: ====================

/****
 * 
 * 
 * map(func) – creates a new array from results of calling func for every element.
 * sort(func) – sorts the array in-place, then returns it.
 * reverse() – reverses the array in-place, then returns it.
 * split/join – convert a string to array and back.
 * reduce(func, initial) – calculate a single value over the array by calling func
 * for each element and passing an intermediate result between the calls.
 * 
 */

/**
 * 
 * 
 * ********************** Additionally: *************************
 * 
 * Array.isArray(arr) checks arr for being an array
 * 
 * Please note that methods sort , reverse and splice modify the array itself
 * 
 */


/***
 * 
 * arr.some(fn)  /arr.every(fn) checks the array.
 * 
 * The function fn is called on each element of the array similar to map . If any/all results are true , returns true , otherwise false
 * 
 * arr.fill(value, start, end)  – fills the array with repeating value from index start to
 * 
 * arr.copyWithin(target, start, end)  – copies its elements from position start till position end into itself, at position target (overwrites existing).
 * 
 * let arr = [5, 3, 8, 1]; 
 * let filtered = filterRange(arr, 1, 4);
 * alert( filtered ); // 3,1 (matching values)
 * alert( arr ); // 5,3,8,1 (not modified)
 * 
 */

let arr212 = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (matching values)
alert( arr212 ); // 5,3,8,1 (not modified)