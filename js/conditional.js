//============= Conditional operators: if, '?' =================

let year = prompt(
  "In which year was ECMAScript-2015 specification published?",
  ""
);

if (year == 2015) alert("You are right!");

if (year == 2015) {
  alert("That's correct!");
  alert("You're so smart!");
}

if (year < 2015) {
  alert("Too early...");
} else if (year > 2015) {
  alert("Too late");
} else {
  alert("Exactly!");
}

let accessAllowed;
let age = prompt("How old are you?", "");
if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
alert(accessAllowed);

// ============= Conditional operator ‘?’ =============

let results = condition ? value1 : value2;

let accessAllowedd = age > 18 ? true : false;

// the comparison operator "age > 18" executes first anyway
// (no need to wrap it into parentheses)
let accessAllowedede = age > 18 ? true : false;

/**
 * In the example above, you can avoid using the question mark operator because the
comparison itself returns true/false :
 */

// the same
let accessAlloweded = age > 18;

let aged = prompt("age?", 18);

let message =
  age < 3
    ? "Hi, baby!"
    : age < 18
    ? "Hello!"
    : age < 100
    ? "Greetings!"
    : "What an unusual age!";
alert(message);

if (age < 3) {
  message = "Hi, baby!";
} else if (age < 18) {
  message = "Hello!";
} else if (age < 100) {
  message = "Greetings!";
} else {
  message = "What an unusual age!";
}

//============== Non-traditional use of ‘?’ ================

let company = prompt("Which company created JavaScript?", "");
company == "Netscape" ? alert("Right!") : alert("Wrong.");

let companys = prompt("Which company created JavaScript?", "");
if (companys == "Netscape") {
  alert("Right!");
} else {
  alert("Wrong.");
}

if ("0") {
  alert("Hello");
}

// Rewrite this if using the ternary operator '?' :

if (a + b < 4) {
  result = "Below";
} else {
  result = "Over";
}

//================ Rewrite 'if..else' into '?' ==============

if (login == "Employee") {
  message = "Hello";
} else if (login == "Director") {
  message = "Greetings";
} else if (login == "") {
  message = "No login";
} else {
  message = "";
}

//================ Logical operators ==================

/**
 * 
 * There are three logical operators in JavaScript: || (OR), && (AND), ! (NOT).
Although they are called “logical”, they can be applied to values of any type, not only boolean.
Their result can also be of any type.
 * 
 */

alert(true || true); // true
alert(false || true); // true
alert(true || false); // true
alert(false || false); // false

if (1 || 0) {
  // works just like if( true || false )
  alert("truthy!");
}

let hour = 9;
if (hour < 10 || hour > 18) {
  alert("The office is closed.");
}

let isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend) {
  alert("The office is closed."); // it is the weekend
}

//============== OR finds the first truthy value ============

result = value1 || value2 || value3;

alert(1 || 0); // 1 (1 is truthy)
alert(true || "no matter what"); // (true is truthy)
alert(null || 1); // 1 (1 is the first truthy value)
alert(null || 0 || 1); // 1 (the first truthy value)
alert(undefined || null || 0); // 0 (all falsy, returns the last value)

let currentUser = null;
let defaultUser = "John";
let name = currentUser || defaultUser || "unnamed";
alert(name); // selects "John" – the first truthy value

//=============== Short-circuit evaluation ============

let xx;
true || (xx = 1);
alert(xx); // undefined, because (x = 1) not evaluated

// ==========If, instead, the first argument is false , || evaluates the second one, thus running the assignment:

false || (x = 1);
alert(x); // 1

// ========= && (AND) ===========

result = a && b;

alert(true && true); // true
alert(false && true); // false
alert(true && false); // false
alert(false && false); // false

let minute = 30;
if (hour == 12 && minute == 30) {
  alert("The time is 12:30");
}

if (1 && 0) {
  // evaluated as true && false
  alert("won't work, because the result is falsy");
}

//========= AND finds the first falsy value

result = value1 && value2 && value3;

// if the first operand is truthy,
// AND returns the second operand:
alert(1 && 0); // 0
alert(1 && 5); // 5
// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert(null && 5); // null
alert(0 && "no matter what"); // 0

alert(1 && 2 && null && 3); // null

alert(1 && 2 && 3); // 3, the last one

let xxx = 1;
xxx > 0 && alert("Greater than zero!");

// The action in the right part of && would execute only if the evaluation reaches it. That is, only if (x > 0) is true. So we basically have an analogue for:

let x11 = 1;
if (x11 > 0) {
  alert("Greater than zero!");
}

///========= ! (NOT) ==========

result = !value;



alert( !true ); // false
alert( !0 ); // true


// A double NOT !! is sometimes used for converting a value to boolean type:

alert( !!"non-empty string" ); // true
alert( !!null ); // false


alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false


//The precedence of NOT ! is the highest of all logical operators, so it always executes first,
//before && or || .


if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );