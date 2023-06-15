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
}, 0/*** inital value or first value */);

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