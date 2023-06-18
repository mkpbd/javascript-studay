//================ Decorators and forwarding, call/apply ===============

/**
 *
 * JavaScript gives exceptional flexibility when dealing with functions. They can be passed around, used as objects, and now we’ll see how to forward calls between them and decorate them.
 *
 */

/**
 *
 *
 ****************** Transparent caching *****************
 *
 * Let’s say we have a function slow(x) which is CPU-heavy, but its results are stable. In other words, for the same x it always returns the same result.
 * If the function is called often, we may want to cache (remember) the results for different x to avoid spending extra-time on recalculations.
 * But instead of adding that functionality into slow() we’ll create a wrapper. As we’ll see, there are many benefits of doing so.
 *
 *
 */

function slow(x) {
  // there can be a heavy CPU-intensive job here
  alert(`Called with ${x}`);
  return x;
}
function cachingDecorator(func) {
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      // if the result is in the map
      return cache.get(x); // return it
    }
    let result = func(x); // otherwise call func
    cache.set(x, result); // and cache (remember) the result
    return result;
  };
}
slow = cachingDecorator(slow);
alert(slow(1)); // slow(1) is cached
alert("Again: " + slow(1)); // the same
alert(slow(2)); // slow(2) is cached
alert("Again: " + slow(2)); // the same as the previous line

/**
 * Using “func.call” for the context
 */

// we'll make worker.slow caching
let worker = {
  someMethod() {
    return 1;
  },
  slow(x) {
    // actually, there can be a scary CPU-heavy task here
    alert("Called with " + x);
    return x * this.someMethod(); // (*)
  },
};

// same code as before
function cachingDecorator(func) {
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func(x); // (**)
    cache.set(x, result);
    return result;
  };
}
alert(worker.slow(1)); // the original method works
worker.slow = cachingDecorator(worker.slow); // now make it caching

/**
 *
 * The reason is that the wrapper calls the original function as func(x) in the line (**) . And, when called like that, the function gets this = undefined .
 *
 * We would observe a similar symptom if we tried to run:
 *
 */

let func = worker.slow;
func(2);
function sayHi() {
  alert(this.name);
}

let user = { name: "John" };
let admin = { name: "Admin" };
// use call to pass different objects as "this"
sayHi.call(user); // this = John
sayHi.call(admin); // this = Admin

//============= And here we use call to call say with the given context and phrase: =============

function say(phrase) {
  alert(this.name + ": " + phrase);
}
let user1 = { name: "John" };

// user becomes this, and "Hello" becomes the first argument
say.call(user, "Hello"); // John: Hello

let worker1 = {
  someMethod() {
    return 1;
  },
  slow(x) {
    alert("Called with " + x);
    return x * this.someMethod(); // (*)
  },
};
function cachingDecorator(func) {
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func.call(this, x); // "this" is passed correctly now
    cache.set(x, result);
    return result;
  };
}
worker.slow = cachingDecorator(worker.slow); // now make it caching
alert(worker.slow(2)); // works
alert(worker.slow(2)); // works, doesn't call the original (cached)

//================ Going multi-argument with “func.apply” ===============

/***
 *
 *
 * Now let’s make cachingDecorator even more universal. Till now it was working only with nsingle-argument functions.
 * Now how to cache the multi-argument worker.slow method?
 *  */

let worker2 = {
  slow(min, max) {
    return min + max; // scary CPU-hogger is assumed
  },
};
// should remember same-argument calls
worker2.slow = cachingDecorator(worker2.slow);

/**
 * The only syntax difference between call and apply is that call expects a list of arguments, while apply takes an array-like object with them.
 *
 */

let args = [1, 2, 3];
func.call(context, ...args); // pass an array as list with spread operator
func.apply(context, args); // is same as using apply
