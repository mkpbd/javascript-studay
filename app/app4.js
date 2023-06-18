// Function object, NFE

/**
 *
 * As we already know, functions in JavaScript are values.
 * Every value in JavaScript has a type. What type is a function?
 * In JavaScript, functions are objects.
 *
 * A good way to imagine functions is as callable “action objects”. We can not only call them, but also treat them as objects: add/remove properties, pass by reference etc.
 *
 */

///================= The “name” property ================

function sayHi() {
  alert("Hi");
}
alert(sayHi.name); // sayHi

function f(sayHi = function () {}) {
  alert(sayHi.name); // sayHi (works!)
}
f();

/**
 *
 *
 * In the specification, this feature is called a “contextual name”. If the function does not provide one, then in an assignment it is figured out from the context.
 *
 *
 */

let user = {
  sayHi() {
    // ...
  },
  sayBye: function () {
    // ...
  },
};

alert(user.sayHi.name); // sayHi
alert(user.sayBye.name); // sayBye

// function created inside array
let arr = [function () {}];
alert(arr[0].name); // <empty string>
// the engine has no way to set up the right name, so there is none

//================= The “length” property =====================

// There is another built-in property “length” that returns the number of function parameters, for instance:

function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}
alert(f1.length); // 1
alert(f2.length); // 2
alert(many.length); // 2

/**
 *
 * Here we can see that rest parameters are not counted.
 * The length property is sometimes used for introspection in functions that operate on other functions.
 *
 */

/**
 *
 *
 * The idea is that we have a simple, no-arguments handler syntax for positive cases (most frequent variant), but are able to provide universal handlers as well.
 *
 *
 */

function ask(question, ...handlers) {
  let isYes = confirm(question);
  for (let handler of handlers) {
    if (handler.length == 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }
}

// for positive answer, both handlers are called
// for negative answer, only the second one
ask(
  "Question?",
  () => alert("You said yes"),
  (result) => alert(result)
);

/****
 *
 *
 * ********************* Custom properties ***********************************
 *
 * We can also add properties of our own.
 *
 * Here we add the counter property to track the total calls count:
 *
 */

function sayHi1() {
  alert("Hi");
  // let's count how many times we run
  sayHi1.counter++;
}
sayHi.counter = 0; // initial value
sayHi1(); // Hi
sayHi1(); // Hi
alert(`Called ${sayHi1.counter} times`); // Called 2 times

//======================= A property is not a variable ===============

/**
 *
 *
 * A property assigned to a function like sayHi.counter = 0 does not define a local variable counter inside it.
 *  In other words, a property counter and a variable let  counter are two unrelated things.
 * We can treat a function as an object, store properties in it, but that has no effect on its execution.
 * Variables are not function properties and vice versa. These are just parallel worlds.
 *
 *
 */

/***
 *
 *
 * Function properties can replace closures sometimes. For instance, we can rewrite the counter function example from the chapter Closure to use a function property:
 *
 *
 *
 */

function makeCounter() {
  // instead of:
  // let count = 0
  function counter() {
    return counter.count++;
  }
  counter.count = 0;
  return counter;
}

let counter = makeCounter();
alert(counter()); // 0
alert(counter()); // 1

// The count is now stored in the function directly, not in its outer Lexical Environment. Is it better or worse than using a closure?

function makeCounter1() {
  function counter() {
    return counter.count++;
  }
  counter.count = 0;
  return counter;
}
let counter1 = makeCounter1();
counter1.count = 10;
alert(counter()); // 10

//============================= Named Function Expression ======================

/**
 *
 * Named Function Expression, or NFE, is a term for Function Expressions that have a name. For instance, let’s take an ordinary Function Expression:
 *
 *
 */
let sayHi1 = function (who) {
  alert(`Hello, ${who}`);
};

//============== The function is still available as sayHi() : ==============

let sayHi2 = function func(who) {
  alert(`Hello, ${who}`);
};
sayHi2("John"); // Hello, John

//================ There are two special things about the name func : ==============

// It allows the function to reference itself internally.
// It is not visible outside of the function.

// For instance, the function sayHi below calls itself again with "Guest" if no who is provided:

let sayHi3 = function funcc(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func("Guest"); // use func to re-call itself
  }
};
sayHi3(); // Hello, Guest
// But this won't work:
funcc(); // Error, func is not defined (not visible outside of the function)

//=================== Why do we use func ? Maybe just use sayHi for the nested call? ==============

let sayHi11 = function (who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    sayHi11("Guest");
  }
};

/***
 *
 *
 * The problem with that code is that the value of sayHi may change. The function may go to another variable, and the code will start to give errors:
 *
 */

let sayHi12 = function (who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    sayHi12("Guest"); // Error: sayHi is not a function
  }
};
let welcome = sayHi12;
sayHi12 = null;
welcome(); // Error, the nested sayHi call doesn't work any more!

/**
 *
 *
 * That happens because the function takes sayHi from its outer lexical environment. There’s no local sayHi , so the outer variable is used.
 * And at the moment of the call that outer sayHi is null . The optional name which we can put into the Function Expression is meant to solve exactly these kinds of problems.
 *
 *
 */

let sayhi13 = function func2(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func2("Guest"); // Now all fine
  }
};
let welcome1 = sayHi13;
sayHi13 = null;
welcome1(); // Hello, Guest (nested call works)

//========================== The "new Function" syntax =======================
/**
 *
 * There’s one more way to create a function. It’s rarely used, but sometimes there’s no alternative.
 *
 */

let funccc = new Function([arg1, arg2, ...argN], functionBody);

/**
 *
 * The function is created with the arguments arg1...argN and the given functionBody . It’s easier to understand by looking at an example.
 * Here’s a function with two arguments:
 *
 *
 */

let sum = new Function("a", "b", "return a + b");
alert(sum(1, 2)); // 3

let sayHi34 = new Function('alert("Hello")');
sayHi34(); // Hello

/**
 * 
 * ********************* Closure **************************
 * 
 * Usually, a function remembers where it was born in the special property [[Environment]] .
It references the Lexical Environment from where it’s created.
But when a function is created using new Function , its [[Environment]] references not
the current Lexical Environment, but instead the global one.
So, such function doesn’t have access to outer variables, only to the global ones.
 * 
 * 
 */

function getFunc() {
  let value = "test";
  let func = function () {
    alert(value);
  };
  return func;
}
getFunc()(); // "test", from the Lexical Environment of getFunc


/***
 * 
 * *************** If new Function had access to outer variables, it would have problems with minifiers. **************
 * 
 */

