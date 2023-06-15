/**
 *
 * The arr.splice(str)  method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements.
 * The syntax is:
 *
 */

// arr.splice(index[, deleteCount, elem1, ..., elemN])

/**
 * It starts from the position index : removes deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed elements.
 * This method is easy to grasp by examples.
 * Let’s start with the deletion:
 *
 */

// remove
let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // from index 1 remove 1 element
alert(arr); // ["I", "JavaScript"]

/// array Remove

let arr2 = [" I ", " s t u d y ", " J a v a S c r i p t ", "right", "now"];
// remove 3 first elements and replace them with another
arr2.splice(0, 3, "Let's", "dance");
alert(arr2); // now ["Let's", "dance", "right", "now"]

// The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0 :

let arr3 = ["I", "study", "JavaScript"];
// from index 2
// delete 0
// then insert "complex" and "language"
arr3.splice(2, 0, "complex", "language");
alert(arr3); // "I", "study", "complex", "language", "JavaScript"

//========== Negative indexes allowed ======

let arr4 = [1, 2, 5];
// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr4.splice(-1, 0, 3, 4);
alert(arr4); // 1,2,3,4,5

/***
 *
 * *************************** slice ****************************
 * The method arr.slice  is much simpler than similar-looking arr.splice
 *
 */

//========================= arr.slice(start, end) ===============

/**
 *
 * It returns a new array containing all items from index "start" to "end" (not including "end" ). Both start and end can be negative, in that case position from array end is assumed
 *
 * It works like str.slice , but makes subarrays instead of substrings.
 */

let str33 = "test";
let arr33 = ["t", "e", "s", "t"];
alert(str33.slice(1, 3)); // es
alert(arr33.slice(1, 3)); // e,s
alert(str33.slice(-2)); // st
alert(arr33.slice(-2)); // s

// merge arr with [3,4]
alert(arr.concat([3, 4])); // 1,2,3,4
// merge arr with [3,4] and [5,6]
alert(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6
// merge arr with [3,4], then add values 5 and 6
alert(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

/**
 *
 * Normally, it only copies elements from arrays (“spreads” them). Other objects, even if they look like arrays, added as a whole:
 *
 */

let arr333 = [1, 2];
let arrayLike = {
  0: "something",
  length: 1,
};
alert(arr333.concat(arrayLike)); // 1,2,[object Object]
//[1, 2, arrayLike]

let arr44 = [1, 2];
let arrayLike44 = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};
