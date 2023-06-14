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
