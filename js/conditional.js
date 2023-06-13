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
