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



//===================== ToBoolean – Occurs in logical operations. Can be performed with Boolean(value) . Follows the rules: ===============


// == Value                                                                 Becomes…
        0 , null , undefined , NaN , "",                                      false
// any other value                                                             true




/// String concatenation, binary + 


let ss = "my" + "string";
alert(ss); // mystring

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

alert(2 + 2 + '1' ); // "41" and not "221"


/**
 * 
 * String concatenation and conversion is a special feature of the binary plus + . Other arithmetic operators work only with numbers and always convert their operands to numbers.
 */

alert( 2 - '1' ); // 1
alert( '6' / '2' ); // 3

// Numeric conversion, unary +

// No effect on numbers
let xs = 1;
alert( +xs ); // 1
let y = -2;
alert( +y ); // -2
// Converts non-numbers
alert( +true ); // 1
alert( +"" ); // 0

// It actually does the same thing as Number(...) , but is shorter.


let apples = "2";
let oranges = "3";
alert( apples + oranges ); // "23", the binary plus concatenates strings

//  If we want to treat them as numbers, we need to convert and then sum them:

let appless = "2";
let orangess = "3";
// both values converted to numbers before the binary plus
alert( +appless + +orangess ); // 5
// the longer variant
// alert( Number(apples) + Number(oranges) ); // 


/* It is possible to chain assignments:
Chained assignments evaluate from right to left. First, the rightmost expression 2 + 2 is
evaluated and then assigned to the variables on the left: c , b and a . At the end, all the
variables share a single value.
Assignment */



let xss= 2 * 2 + 1;
alert( xss ); // 5

// ================= It is possible to chain assignments: ======================

let a, b, c;
a = b = c = 2 + 2;
alert( a ); // 4
alert( b ); // 4
alert( c ); // 4