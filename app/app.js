/**
 *
 * Advanced working with functions
 * Recursion and stack
 *
 */

// power function Two way Resove

// iterative

function pow(x, n) {
  let result = 1;
  // multiply result by x n times in the loop
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
alert(pow(2, 3)); // 8

// recursive function   Recursive thinking: simplify the task and call self:

function pow1(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow1(x, n - 1);
  }
}
alert(pow1(2, 3)); // 8


/**
 * 
 * Please note how the recursive variant is fundamentally different. 
 * When pow(x, n) is called, the execution splits into two branches:
 * 
 * if n==1 = x
 * 
 * pow(x, n)
 * 
 * else = x * pow(x, n - 1)
 * 
 * 
 * 1. If n == 1 , then everything is trivial. It is called the base of recursion, because it immediately produces the obvious result: pow(x, 1) equals x .
 * 
 * 
 * Otherwise, we can represent pow(x, n) as x * pow(x, n - 1) . In maths, one would write xn = x * xn-1 . This is called a recursive step: we transform the task into a simpler
 * action (multiplication by x ) and a simpler call of the same task ( pow with lower n ). Next steps simplify it further and further until n reaches 1 .
 * 
 */