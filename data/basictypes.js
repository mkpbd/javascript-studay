// Methods of primitives Data

//JavaScript allows us to work with primitives (strings, numbers, etc.) as if they were objects.

// A primitive Is a value of a primitive type.

// There are 6 primitive types: string , number , boolean , symbol , null and undefined .

let str = "Hello";

alert(str.toUpperCase()); // HELLO

let n = 1.23456;
alert(n.toFixed(2)); // 1.23

// ====================== Constructors String/Number/Boolean are for internal use only =====================

// Some languages like Java allow us to create “wrapper objects” for primitives explicitly using a syntax like new Number(1) or new Boolean(false)

alert(typeof 0); // "number"
alert(typeof new Number(0)); // "object"!

// Objects are always truthy in if , so here the alert will show up:

let zero = new Number(0);
if (zero) {
  // zero is true, because it's an object
  alert("zero is truthy!?!");
}
//============ On the other hand, using the same functions String/Number/Boolean without new is a totally sane and useful thing.
// They convert a value to the corresponding type: to a string, a number, or a boolean (primitive).

let num = Number("123"); // convert a string to number

// ================ null/undefined have no methods ==============

//=========== Hex, binary and octal numbers

// Hexadecimal  numbers are widely used in JavaScript to represent colors, encode characters, and for many other things.

alert(0xff); // 255
alert(0xff); // 255 (the same, case doesn't matter)

//==== Binary and octal numeral systems are rarely used, but also supported using the 0b and 0o prefixes:

let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255
alert(a == b); // true, the same number 255 at both sides

//=================== toString(base) ============

//=========== The method num.toString(base) returns a string representation of num in the numeral system with the given base .

let num1 = 255;
alert(num1.toString(16)); // ff
alert(num1.toString(2)); // 11111111

// One of the best things about objects is that we can store a function as one of its properties.
let john = {
  name: "John",
  sayHi: function () {
    alert("Hi buddy!");
  },
};
john.sayHi(); // Hi buddy!

//=========== Imprecise calculations =======

/**
 *
 * Internally, a number is represented in 64-bit format IEEE-754  ,
 * so there are exactly 64 bits to store a number: 52 of them are used to store the digits, 11 of them store the position of the decimal point
 * (they are zero for integer numbers), and 1 bit is for the sign.
 *
 *
 ******************* If a number is too big, it would overflow the 64-bit storage, potentially giving an infinity: *******************
 */

alert(1e500); // Infinity

/**
 * What may be a little less obvious, but happens quite often, is the loss of precision. Consider this (falsy!) test:
 *
 */

alert(0.1 + 0.2 == 0.3); // false

alert(0.1 + 0.2); // 0.30000000000000004

alert((0.1).toFixed(20)); // 0.10000000000000000555

let sum = 0.1 + 0.2;
alert(sum.toFixed(2)); // 0.30

let sum1 = 0.1 + 0.2;
alert(+sum1.toFixed(2)); // 0.3

alert((0.1 * 10 + 0.2 * 10) / 10); // 0.3
alert((0.28 * 100 + 0.14 * 100) / 100); // 0.4200000000000001

alert(isNaN(NaN)); // true
alert(isNaN("str")); // true

alert(NaN === NaN); // false

alert(isFinite("15")); // true
alert(isFinite("str")); // false, because a special value: NaN
alert(isFinite(Infinity)); // false, because a special value: Infinity
