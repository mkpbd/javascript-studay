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


