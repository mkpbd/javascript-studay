//========= Strict mode ====
// The directive must be at the top of a script or at the beginning of a function.
"use strict";

// Without "use strict" , everything still works, but some features behave in the old-fashion, “compatible” way. We’d generally prefer the modern behavior.

// There are 7 data types:

/**
 *
 *
 * number for both floating-point and integer numbers, string for strings, boolean for logical values: true/false ,
 * null – a type with a single value null , meaning “empty” or “does not exist”,
 * undefined – a type with a single value undefined , meaning “not assigned”,
 * object and symbol – for complex data structures and unique identifiers, we haven’t
 * learnt them yet.
 *
 */

// The typeof operator returns the type for a value, with two exceptions:

typeof null == "object"; // error in the language
typeof function () {} == "function"; // functions are treated specially

let userName = prompt("Your name?", "Alice");
let isTeaWanted = confirm("Do you want some tea?");
alert("Visitor: " + userName); // Alice
alert("Tea wanted: " + isTeaWanted); // true

//============= Arithmetica =============

/**
 *
 *
 * Regular: * + - / , also % for the remainder and ** for power of a number.
 * The binary plus + concatenates strings. And if any of the operands is a string, the other one is converted to string too:
 *
 *
 */

alert("1" + 2); // '12', string
alert(1 + "2"); // '12', string

//======================== Assignments ====================

// There is a simple assignment: a = b and combined ones like a *= 2 .

//================== Ternary ==============

/**
 *
 * The only operator with three parameters: cond ? resultA : resultB . If cond is truthy, returns resultA , otherwise resultB .
 *
 */

//============== Logical operators ==============
/**
 *
 *
 * Logical AND && and OR || perform short-circuit evaluation and then return the value where it stopped.
 *  Logical NOT ! converts the operand to boolean type and returns the inverse value
 *
 */

/**
 *
 *
 *================================= Comparisons=====================
 *
 * Equality check == for values of different types converts them to a number (except null and undefined that equal each other and nothing else), so these are equal:
 *
 */

alert(0 == false); // true
alert(0 == ""); // true

//=============== Functions ==============

//e covered three ways to create a function in JavaScript:

//The “switch” construct
let age = prompt("Your age?", 18);
switch (age) {
  case 18:
    alert("Won't work"); // the result of prompt is a string, not a number
  case "18":
    alert("This works!");
    break;
  default:
    alert("Any value not equal to one above");
}
//1. Function Declaration: the function in the main code flow
//Functions
function sum(a, b) {
  let result = a + b;
  return result;
}
//2. Function Expression: the function in the context of an expression
let sum = function (a, b) {
  let result = a + b;
  return result;
};

// Function expressions can have a name, like sum = function name(a, b) , but that name is only visible inside that function.

//=================== 3. Arrow functions: ===============

// expression at the right side
let sum = (a, b) => a + b;
// or multi-line syntax with { ... }, need return here:
let sum = (a, b) => {
  // ...
  return a + b;
};
// without arguments
let sayHi = () => alert("Hello");
// with a single argument
let double = (n) => n * 2;


/**
 * 
 * Functions may have local variables: those declared inside its body. Such variables are only visible inside the function.
 * Parameters can have default values: function sum(a = 1, b = 2) {...} .
 * Functions always return something. If there’s no return statement, then the result is undefined .
 * 
 */