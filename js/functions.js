//=============== Function Declaration ==========

// To create a function we can use a function declaration

function showMessage() {
  alert("Hello everyone!");
}

showMessage();
showMessage();
/**
 *
 * The function keyword goes first, then goes the name of the function, then a list of
 * parameters between the parentheses (empty in the example above) and finally the code of the
 * function, also named “the function body”, between curly braces.
 *
 *
 */

/**
 * 
 * If we ever need to change the message or the way it is shown, it’s enough to modify the code in
one place: the function which outputs it.
 * 
 * 
 */

//================================ Local variables =====================
// A variable declared inside a function is only visible inside that function

function showMessages() {
  let message = "Hello, I'm JavaScript!"; // local variable
  alert(message);
}
showMessages(); // Hello, I'm JavaScript!
// alert(message); // <-- Error! The variable is local to the function

//======================= Outer variables ================

let userName = "John";
function showMessage1() {
  let message = "Hello, " + userName;
  alert(message);
}
showMessage1(); // Hello, John

//=============== The function has full access to the outer variable. It can modify it as well. =============
let userName1 = "John";
function showMessage2() {
  userName1 = "Bob"; // (1) changed the outer variable
  let message = "Hello, " + userName1;
  alert(message);
}
alert(userName); // John before the function call
showMessage2();
alert(userName); // Bob, the value was modified by the function

//====================== The outer variable is only used if there’s no local one. ===============

/**
 *
 * If a same-named variable is declared inside the function then it shadows the outer one.
 * For instance, in the code below the function uses the local userName . The outer one is ignored:
 *
 */

// ==================  Global variables ================

/***
 * 
 * Variables declared outside of any function, such as the outer userName in the code
above, are called global.
Global variables are visible from any function (unless shadowed by locals).
It’s a good practice to minimize the use of global variables. Modern code has few or no
globals. Most variables reside in their functions. Sometimes though, they can be useful to
store project-level data.
 * 
 */

//=============================== Parameters ========================

/**
 *
 *
 * We can pass arbitrary data to functions using parameters (also called function arguments) .
 * In the example below, the function has two parameters: from and text .
 *
 */

function showMessageParem(from, text) {
  // arguments: from, text
  alert(from + ": " + text);
}
showMessageParem("Ann", "Hello!"); // Ann: Hello! (*)
showMessageParem("Ann", "What's up?"); // Ann: What's up? (**)

// Another Exampels

function showMessage3(from, text) {
  from = "*" + from + "*"; // make "from" look nicer
  alert(from + ": " + text);
}
let from = "Ann";
showMessage3(from, "Hello"); // *Ann*: Hello
// the value of "from" is the same, the function modified a local copy
alert(from); // Ann

//================================= Default values ================

/**
 *
 * If a parameter is not provided, then its value becomes undefined .
 * For instance, the aforementioned function showMessage(from, text) can be called with a single argument:
 *
 */

function showMessageDefault(from, text = "no text given hear") {
  alert(from + ": " + text);
}

showMessageDefault("kamal ");

// we can pass function in another function  in defualt paramiter

function anotherFunction() {
  return " No Text are given bellow hear";
}
function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}
