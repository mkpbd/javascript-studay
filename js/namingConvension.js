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
