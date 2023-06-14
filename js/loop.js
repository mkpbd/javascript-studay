// =============== Loops: while and for =============

// ======== ========== Loops are a way to repeat the same code multiple times. ==============

// ==================== The “while” loop

while (/*condition*/ 10 > 5) {
  // code
  // so-called "loop body"
}

//==================== While the condition is true , the code from the loop body is executed. ======

let i = 0;
while (i < 3) {
  // shows 0, then 1, then 2
  alert(i);
  i++;
}

while (i) {
  // when i becomes 0, the condition becomes falsy, and the loop stops
  alert(i);
  i--;
}

//======================== If the loop body has a single statement, we can omit the curly braces {…}  ==================

// ============================= The “do…while” loop ======================
//============= The condition check can be moved below the loop body using the do..while syntax: =================

do {
  // loop body

  break;
} while (/*condition*/ 5 > 2);

do {
  alert(i);
  i++;
} while (i < 3);

//===================== The “for” loop ===================

//  The for loop is the most commonly used loop.

for (/*begin; condition; step */ let i = 0; i < 10; i++) {
  // ... loop body ...
}

//======================== The general loop algorithm works like this: ================

/**
 * 
 * 
 * Run begin
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ ...
 * 
 */

/*
    If you are new to loops, it could help to go back to the example and reproduce how it runs stepby-step on a piece of paper.

*/

// for (let i1 = 0; i1 < 3; i1++) alert(i1)
// run begin
let i1 = 0;
// if condition → run body and run step
if (i1 < 3) {
  alert(i1);
  i1++;
}
// if condition → run body and run step
if (i1 < 3) {
  alert(i1);
  i1++;
}
// if condition → run body and run step
if (i1 < 3) {
  alert(i1);
  i1++;
}
// ...finish, because now i == 3

//================== Inline variable declaration =============

for (let i = 0; i < 3; i++) {
  alert(i); // 0, 1, 2
}

// alert(i); // error, no such variable

//===================== Instead of defining a variable, we could use an existing one: ==============

let i2 = 0;
for (i2 = 0; i2 < 3; i2++) {
  // use an existing variable
  alert(i2); // 0, 1, 2
}

alert(i2); // 3, visible, because declared outside of the loop

//=================== Skipping parts ===================

//==== Any part of for can be skipped

let ig = 0; // we have i already declared and assigned
for (; ig < 3; ig++) {
  // no need for "begin"
  alert(ig); // 0, 1, 2
}

// =================== We can also remove the step part:

for (; ig < 3; ) {
  alert(ig++);
}
//============================ Breaking the loop =====================

/*
    Normally, a loop exits when its condition becomes falsy.
But we can force the exit at any time using the special break directive.
*/

let sum = 0;
while (true) {
  let value = +prompt("Enter a number", "");
  if (!value) break; // (*)
  sum += value;
}
alert("Sum: " + sum);

//================== Continue to the next iteration ==================

/*
    The continue directive is a “lighter version” of break . It doesn’t stop the whole loop.
Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).
We can use it if we’re done with the current iteration and would like to move on to the next one.
The loop below uses continue to output only odd values:


*/

for (let i = 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;
  alert(i); // 1, then 3, 5, 7, 9
}

//===================== The continue directive helps decrease nesting =================

//=== A loop that shows odd values could look like this:

for (let i = 0; i < 10; i++) {
  if (i % 2) {
    alert(i);
  }
}

//==================== No break/continue to the right side of ‘?’ =============

/**
 *
 *
 * Please note that syntax constructs that are not expressions cannot be used with the ternary operator ? .
 * In particular, directives such as break/continue aren’t allowed there.
 *
 *
 */

for (let i = 0; i < 20; i++) {
  if (i > 5) {
    alert(i);
  } else {
    continue;
  }

  // ( i > 5 ) ? alert ( i ) : continue; // continue isn't allowed here
}

//======================== Labels for break/continue ===============

//= Sometimes we need to break out from multiple nested loops at once.

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, "");
    // what if I want to exit from here to Done (below)?
  }
}

// We need a way to stop the process if the user cancels the input

labelName: for (/*...*/ let i = 0; i < 4; i++) {
  // ...
}

// ======== The break <labelName> statement in the loop below breaks out to the label: =

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, "");
    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)
    // do something with the value...
  }
}

//================ Some Question and answer =================

while (i) {
  alert(i--);
}
let iff = 0;
while (++iff < 5) alert(iff);

while (iff++ < 5) alert(iff);

//=========== The postfix form: =======

for (let i = 0; i < 5; i++) alert(i);

//====================== The prefix form: ===========

for (let i = 0; i < 5; ++i) alert(i);

//================================= The "switch" statement ==========================

/**
 *
 * A switch statement can replace multiple if checks.
 * It gives a more descriptive way to compare a value with multiple variants
 *
 */

/*
switch(x) {
    case 'value1': // if (x === 'value1')
   // ...
    [break]
    case 'value2': // if (x === 'value2')
  //  ...

  break :
    [break]
    default:
    ...
    [break]
    }


    */

//============== An example of switch (the executed code is highlighted): =======

let a = 2 + 2;
switch (a) {
  case 3:
    alert("Too small");
    break;
  case 4:
    alert("Exactly!");
    break;
  case 5:
    alert("Too large");
    break;
  default:
    alert("I don't know such values");
}

/**
 * Here the switch starts to compare a from the first case variant that is 3 . The match fails.
 * Then 4 . That’s a match, so the execution starts from case 4 until the nearest break .
 * If there is no break then the execution continues with the next case without any checks.
 */

//======================= Any expression can be a switch/case argument ===============

let aa = "1";
let b = 0;
switch (+aa) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;
  default:
    alert("this doesn't run");
}

//====================== Grouping of “case” ============

//======== Several variants of case which share the same code can be grouped.

let a1 = 2 + 2;
switch (a1) {
  case 4:
    alert("Right!");
    break;
  case 3: // (*) grouped two cases
  case 5:
    alert("Wrong!");
    alert("Why don't you take a math class?");
    break;
  default:
    alert("The result is strange. Really.");
}

//================== Type matters ===============

let arg = prompt("Enter a value?");
switch (arg) {
  case "0":
  case "1":
    alert("One or zero");
    break;
  case "2":
    alert("Two");
    break;
  case 3:
    alert("Never executes!");
    break;
  default:
    alert("An unknown value");
}

//=================  Rewrite the code below using a single switch statement: ==============
let browser = "chrome";
switch (browser) {
  case "Edge":
    alert("You've got the Edge!");
    break;

  // importance: 4;

  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    alert("Okay we support these browsers too");
    break;
  default:
    alert("We hope that this page looks ok!");
}

// convert if else

if (browser === "Edge") {
  alert("You've got the Edge!");
} else if (
  browser === "Chrome" ||
  browser === "Firefox" ||
  browser === "Safari" ||
  browser === "Opera"
) {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}

// ==== Rewrite the code below using a single switch statement: =============


let ab = +prompt('a?', '');
if (ab == 0) {
alert( 0 );
}
if (ab == 1) {
alert( 1 );
}
if (ab == 2 || a == 3) {
alert( '2,3' );
}


// convert to  switch statement 


switch(ab){
    
    case 0:
         alert( 0 );
    break;
    case 1:
        alert( 1 );
    break;
    
    case 2:
    case 3:
        alert( '2,3' );
    break;
}