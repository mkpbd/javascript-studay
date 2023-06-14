//================== Naming a function ===============

/**
 * 
 * Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an
indication of what the function does.
 * 
 */

/**
 *
 * Function starting with…
 * "get…" – return a value,
 * "calc…" – calculate something,
 * "create…" – create something,
 * "check…" – check something and return a boolean, etc
 *
 */

/**
 *
 *
 * showMessage(..) // shows a message
 * getAge(..) // returns the age (gets it somehow)
 * calcSum(..) // calculates a sum and returns the result
 * createForm(..) // creates a form (and usually returns it)
 * checkPermission(..) // checks a permission, returns true/false
 *
 *
 */

/**
 *
 *
 * With prefixes in place, a glance at a function name gives an understanding what kind of work it does and what kind of value it returns.
 *
 */

/**
 * =================== One function – one action====================
 *
 * A function should do exactly what is suggested by its name, no more.
 *
 * Two independent actions usually deserve two functions, even if they are usually called together (in that case we can make a 3rd function that calls those two).
 *
 * ====== A few examples of breaking this rule: ==============
 *
 * getAge – would be bad if it shows an alert with the age (should only get).
 *
 * createForm – would be bad if it modifies the document, adding a form to it (should only create it and return).
 *
 * checkPermission – would be bad if it displays the access granted/denied message (should only perform the check and return the result).
 *
 *
 */

/***
 * =========================== Ultrashort function names ============
 *
 * Functions that are used very often sometimes have ultrashort names
 *
 * For example, the jQuery  framework defines a function with $ . The Lodash  library has its core function named _ .
 *
 * Functions == Comments
 *
 * Functions should be short and do exactly one thing. If that thing is big, maybe it’s worth it to split the function into a few smaller functions.
 * Sometimes following this rule may not be that easy,but it’s definitely a good thing.
 * A separate function is not only easier to test and debug – its very existence is a great comment!
 *
 */

function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    alert(i); // a prime
  }
}

// The second variant uses an additional function isPrime(n) to test for primality:

function showPrimes1(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;
    alert(i); // a prime
  }
}

// is prime number

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

//=== A function declaration looks like this

function name(parameters, delimited, by, comma) {
  /* code */
}

//=============== Is "else" required? ================

function checkAgeWithElse(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Did parents allow you?");
  }
}

// ================== Will the function work differently if else is removed? =========

function checkAgeWithoutElse(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Did parents allow you?");
}

// Copy Function  Refference

function sayHi() {
  // (1) create
  alert("Hello");
}
let func = sayHi; // (2) copy
func(); // Hello // (3) run the copy (it works)!
sayHi(); // Hello // this still works too (why wouldn't it

//=================== Everything would work the same. Even more obvious what’s going on, right? ==============

//============ Why is there a semicolon at the end?

// You might wonder, why does Function Expression have a semicolon ; at the end, but Function Declaration does not:

function sayHi1() {
  // ...
}
//==================== A Function Expression is used inside the statement: =============
let sayHi2 = function () {
  // ...
};

//================================= Callback functions ====================

/**
 *
 *
 * Let’s look at more examples of passing functions as values and using function expressions. We’ll write a function ask(question, yes, no) with three parameters:
 *
 */

/***
 *
 *
 * The function should ask the question and, depending on the user’s answer, call yes() or no() :
 *
 *
 */

function ask(question, yes, no) {
  // heare is  (yse is a call back functions )
  //  no  is a Callback function
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert("You agreed.");
}
function showCancel() {
  alert("You canceled the execution.");
}
// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

//================== The arguments of ask are called callback functions or just callbacks. =================

function asks(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
asks(
  "Do you agree?",
  function () {
    alert("You agreed.");
  },
  function () {
    alert("You canceled the execution.");
  }
);

//=================== A function is a value representing an “action” ===============

/**
 *
 *
 * Regular values like strings or numbers represent the data.
 * A function can be perceived as an action.
 * We can pass it between variables and run when we want.
 *
 *
 */

// Function Expression vs Function Declaration

// Function Declaration
function sumDeclaration(a, b) {
  return a + b;
}

// Function Expression
let sumExpression = function (a, b) {
  return a + b;
};

// function declaration
sayHi2("John"); // Hello, John
function sayHi2(name) {
  alert(`Hello, ${name}`);
}

// Function Expression

sayHi3("John"); // error!
let sayHi3 = function (name) {
  // (*) no magic any more
  alert(`Hello, ${name}`);
};

//=========================== Arrow functions ======================

/**
 *
 * There’s one more very simple and concise syntax for creating functions, that’s often better than
 * Function Expressions. It’s called “arrow functions”, because it looks like this:
 *
 *
 */
let funcs = (arg1, arg2, ...argN) => console.log("hellow");

let funcc = function (arg1, arg2, ...argN) {
  return 5;
};

let sum5 = (a, b) => a + b;
/* The arrow function is a shorter form of:
let sum5 = function(a, b) {
return a + b;
};
*/
alert(sum5(1, 2)); // 3

//============ If we have only one argument, then parentheses can be omitted, making that even shorter: ===============

// same as
// let double = function(n) { return n * 2 }
let double = (n) => n * 2;
alert(double(3)); // 6
