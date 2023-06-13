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
