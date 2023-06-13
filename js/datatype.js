// Data types 


// A variable in JavaScript can contain any data. A variable can at one moment be a string and at another be a number:


/**
 * 
 * 
 * Programming languages that allow such things are called “dynamically typed”, meaning that
 * there are data types, but variables are not bound to any of them.
 * There are seven basic data types in JavaScript. Here, we’ll cover them in general and in the
 * next chapters we’ll talk about each of them in detail.
 * 
 * 
 */
// no error
let message = "hello";
message = 123456;



// A number 

let n = 123;
n = 12.345;


// A string 

// A string in JavaScript must be surrounded by quotes 

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed ${str}`;


/****
 * 
 * 
 * 
 * In JavaScript, there are 3 types of quotes.
 * 1. Double quotes: "Hello" .
 * 2. Single quotes: 'Hello' .
 * 3. Backticks: `Hello` .
 * 
 * 
 * 
 */



// A boolean (logical type)

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

// let isGreater = 4 > 1;
alert( isGreater ); // true (the comparison result is "yes")

// The “null” value

let ageNull = null;

// The “undefined” value

    let undefinedVar = undefined;
//A boolean (logical type)
let nameFieldCheckedd = true; // yes, name field is checked
let ageFieldCheckedd= false; // no, age field is not checked
let isGreater = 4 > 1;
alert( isGreater ); // true (the comparison result is "yes")
///================= The “null” value
let agees = null;
/// The “undefined” value
let x;
alert(x); // shows "undefined"



//================================ The typeof operator ===========================

/**
 * 
 * 
 * The typeof operator returns the type of the argument. It’s useful when we want to process values of different types differently or just want to do a quick check.
 * It supports two forms of syntax:
1. As an operator: typeof x .
2. As a function: typeof(x) .
 * 
 */


typeof undefined // "undefined"
typeof 0 // "number"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object" (1)
typeof null // "object" (2)
typeof alert // "function" (3)


/***
 * 
 * ===================== There are 7 basic data types in JavaScript. =======================
 * number for numbers of any kind: integer or floating-point.
 * string for strings. A string may have one or more characters, there’s no separate singlecharacter type.
 * boolean for true / false .
 * null for unknown values – a standalone type that has a single value null .
 * undefined for unassigned values – a standalone type that has a single value
 * undefined .
 * object for more complex data structures.
 * symbol for unique identifiers.
 * 
 * 
 */


/**
 * 
 * Numeric conversion rules:
 * 
 * undefined            NaN
 * null                 0
 * true and false       1 and 0
 * string
Whitespaces from the start and end are removed. If the remaining string is empty, the result is 0 .
Otherwise, the number is “read” from the string. An error gives NaN .
 * 
 */


//====================== ToBoolean =================

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false
alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)