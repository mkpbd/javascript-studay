// Objects allow you to store keyed collections of values. That’s fine.

/**
 *
 *
 * But quite often we find that we need an ordered collection, where we have a 1st, a 2nd, a 3rd element and so on.
 * For example, we need that to store a list of something: users, goods, HTML elements etc.
 *
 *
 * ************************** There exists a special data structure named Array , to store ordered collections. **********************
 *
 */

/**
 *
 *
 ********************** Declaration **************
 *
 */
// There are two syntaxes for creating an empty array:

let arr = new Array();
let arr1 = [];

//=========== Almost all the time, the second syntax is used. We can supply initial elements in the brackets =========

let fruits = ["Apple", "Orange", "Plum"];

/**
 *
 * Array elements are numbered, starting with zero. We can get an element by its number in square brackets:
 *
 */

alert(fruits[0]); // Apple
alert(fruits[1]); // Orange
alert(fruits[2]); // Plum

fruits[2] = "Pear"; // now ["Apple", "Orange", "Pear"]

//=============== add a new one to the array: =================

fruits[3] = "Lemon"; // now ["Apple", "Orange", "Pear", "Lemon"]

//============== The total count of the elements in the array is its length : ============

alert(fruits.length); // 3

//============ We can also use alert to show the whole array ==========

alert(fruits); // Apple,Orange,Plum

//============== An array can store elements of any type ============

// mix of values
let arr3 = [
  "Apple",
  { name: "John" },
  true,
  function () {
    alert("hello");
  },
];
// get the object at index 1 and then show its name
alert(arr3[1].name); // John
// get the function at index 3 and run it
arr3[3](); // hello

/****
 **************************  Trailing comma ************************************
 *
 */

let fruits4 = ["Apple", "Orange", "Plum"];

//============ Methods pop/push, shift/unshift ===============

/**
 * A queue  is one of the most common uses of an array.
 * In computer science, this means an ordered collection of elements which supports two operations: push appends an element to the end.
 * shift get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.
 */

/**
 * 
 * In practice we need it very often. For example, a queue of messages that need to be shown onscreen.
 * There’s another use case for arrays – the data structure named stack  .
 * It supports two operations:
    1 push adds an element to the end.
    2. pop takes an element from the end.
 * 
 */

//============ Methods that work with the end of the array: ================

let fruits6 = ["Apple", "Orange", "Pear"];
alert(fruits6.pop()); // remove "Pear" and alert it
alert(fruits6); // Apple, Orange

//============== Append the element to the end of the array: ============

fruits6.push("Pear");
alert(fruits6); // Apple, Orange, Pear

//============== Methods that work with the beginning of the array: ============

let fruitss = ["Apple", "Orange", "Pear"];
alert(fruitss.shift()); // remove Apple and alert it

//=========== Add the element to the beginning of the array: ==========

fruitss.unshift("Apple");
alert(fruitss); // Apple, Orange, Pear

//============== Methods push and unshift can add multiple elements at once: =================

fruitss.push("Orange", "Peach");
fruitss.unshift("Pineapple", "Lemon");
// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]

// ==================== Internals ===================

/**
 *
 * An array is a special kind of object.
 *  The square brackets used to access a property arr[0] actually come from the object syntax.
 * That’s essentially the same as obj[key] , where arr is the object, while numbers are used as keys.
 *
 *
 * They extend objects providing special methods to work with ordered collections of data and also the length property. But at the core it’s still an object
 *
 */

let arr11 = fruits; // copy by reference (two variables reference the same array)
alert(arr11 === fruits); // true
arr11.push("Pear"); // modify the array by reference
alert(fruits); // Banana, Pear - 2 items now

/**
 *
 *
 * ==================== Loops ===============
 *
 * One of the oldest ways to cycle array items is the for loop over indexes:
 *
 */

let arr21 = ["Apple", "Orange", "Pear"];
for (let i = 0; i < arr.length; i++) {
  alert(arr21[i]);
}

//=========== But for arrays there is another form of loop, for..of : =========

// iterates over array elements
for (let fruit of fruits21) {
  alert(fruit);
}

//============== Technically, because arrays are objects, it is also possible to use for..in : ===========

for (let key in arr21) {
  alert(arr21[key]); // Apple, Orange, Pear
}


//========================= new Array() =========================