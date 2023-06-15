//======= Getting a substring

// There are 3 methods in JavaScript to get a substring: substring , substr and slice .

//======str.slice(start [, end])   Returns the part of the string from start to (but not including) end . For instance:

let str = "stringify";
alert(str.slice(0, 5)); // 'strin', the substring from 0 to 5 (not including 5)
alert(str.slice(0, 1)); // 's', from 0 to 1, but not including 1, so only character at 0

// If there is no second argument, then slice goes till the end of the string:

let str1 = "stringify";
alert(str1.slice(2)); // ringify, from the 2nd position till the end

//== Negative values for start/end are also possible. They mean the position is counted from the string end:

// start at the 4th position from the right, end at the 1st from the right
alert(str.slice(-4, -1)); // gif

//================ str.substring(start [, end])===================

/**
 *
 *
 * Returns the part of the string between start and end .
 * This is almost the same as slice , but it allows start to be greater than end .
 *
 *
 */

// these are same for substring
alert(str.substring(2, 6)); // "ring"
alert(str.substring(6, 2)); // "ring"
// ...but not for slice:
alert(str.slice(2, 6)); // "ring" (the same)
alert(str.slice(6, 2)); // "" (an empty string)

//================= str.substr(start [, length]) ====================

alert(str.substr(2, 4)); // ring, from the 2nd position get 4 characters

//=================== The first argument may be negative, to count from the end: =================

alert(str.substr(-4, 2)); // gi, from the 4th position get 2 characters

// method                    selects…                                                           negatives
// slice(start, end)            from start to end (not including end )                         allows  negatives
// substring(start, end)     between start and end negative                                     values mean 0
// substr(start, length)    from start get length characters                                allows negative start

//============================= Comparing strings ==========================

/**
 *
 * As we know from the chapter Comparisons, strings are compared character-by-character in alphabetical order
 *
 */

// 1. A lowercase letter is always greater than the uppercase
alert("a" > "Z"); // true

// 2. Letters with diacritical marks are “out of order”:

alert("Österreich" > "Zealand"); // true

//=========== str.codePointAt(pos) ============

// different case letters have different codes
alert("z".codePointAt(0)); // 122
alert("Z".codePointAt(0)); // 90

//========== String.fromCodePoint(code) =================
alert(String.fromCodePoint(90)); // Z

//================= We can also add unicode characters by their codes using \u followed by the hex code: =======================

// 90 is 5a in hexadecimal system
alert("\u005a"); // Z
