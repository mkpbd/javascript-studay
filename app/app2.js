//nested function

// A function is called “nested” when it is created inside another function.

function sayHiBye(firstName, lastName) {
  // helper nested function to use below
  function getFullName() {
    return firstName + " " + lastName;
  }
  alert("Hello, " + getFullName());
  alert("Bye, " + getFullName());
}

// constructor function returns a new object
function User(name) {
  // the object method is created as a nested function
  this.sayHi = function () {
    alert(name);
  };
}

let user = new User("John");
user.sayHi(); // the method "sayHi" code has access to the outer "name"

function makeCounter() {
  let count = 0;
  return function () {
    return count++; // has access to the outer "count"
  };
}
let counter = makeCounter();
alert(counter()); // 0
alert(counter()); // 1
alert(counter()); // 2

//======== Code blocks and loops, IIFE =========

(function () {
  let message = "Hello";
  alert(message); // Hello
})();

// Ways to create IIFE
(function () {
  alert("Parentheses around the function");
})();
(function () {
  alert("Parentheses around the whole thing");
})();
!(function () {
  alert("Bitwise NOT operator starts the expression");
})();
+(function () {
  alert("Unary plus starts the expression");
})();

let value = "Surprise!";
function f() {
  let value = "the closest value";
  function g() {
    debugger; // in console: type alert( value ); Surprise!
  }
  return g;
}
let g = f();
g();
