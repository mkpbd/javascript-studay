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

//====================  One of the most important uses of apply is passing the call to another function, like this: =============

let wrapper = function () {
  return anotherFunction.apply(this, arguments);
};

/**
 *
 *
 * That’s called call forwarding. The wrapper passes everything it gets: the context this and arguments to anotherFunction and returns back its result.
 *
 */

let worker = {
  slow(min, max) {
    alert(`Called with ${min},${max}`);
    return min + max;
  },
};
function cachingDecorator(func, hash) {
  let cache = new Map();
  return function () {
    let key = hash(arguments); // (*)
    if (cache.has(key)) {
      return cache.get(key);
    }
    let result = func.apply(this, arguments); // (**)
    cache.set(key, result);
    return result;
  };
}

function hash(args) {
  return args[0] + "," + args[1];
}
worker.slow = cachingDecorator(worker.slow, hash);
alert(worker.slow(3, 5)); // works
alert("Again " + worker.slow(3, 5)); // same (cached)

/***
 *
 * *************************** There are two changes ***************************
 *
 * In the line (*) it calls hash to create a single key from arguments . Here we use a simple “joining” function that turns arguments (3, 5) into the key "3,5" .
 *  More complex cases may require other hashing functions. Then (**) uses func.apply to pass both the context and all arguments the wrapper got (no matter how many) to the original function.
 *
 *
 */

function hash1(args) {
  return args[0] + "," + args[1];
}

function hash2(args) {
  return args.join();
}

// Still, there’s an easy way to use array join:

function hash3() {
  alert([].join.call(arguments)); // 1,2
}
hash(1, 2);

//=============== The generic call forwarding is usually done with apply : ==========

let wrapper3 = function () {
  return original.apply(this, arguments);
};

//============== Function binding ===========

/**
 *
 * Suddenly, this just stops working right. The situation is typical for novice developers, but happens with experienced ones as well
 *
 */

let user3 = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  },
};
setTimeout(user3.sayHi, 1000); // Hello, undefined!

let f = user3.sayHi;
setTimeout(f, 1000); // lost user context

//============== The simplest solution is to use a wrapping function: ======================

let user4 = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  },
};
setTimeout(function () {
  user4.sayHi(); // Hello, John!
}, 1000);

/***
 *
 * Now it works, because it receives user from the outer lexical environment, and then calls the method normally.
 *
 *
 */
setTimeout(() => user.sayHi(), 1000); // Hello, John!

let user5 = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  },
};
setTimeout(() => user5.sayHi(), 1000);
// ...within 1 second
user5 = {
  sayHi() {
    alert("Another user in setTimeout!");
  },
};

// // Another user in setTimeout?!?

//========================= ================= Solution 2: bind ===================

//=========================== Functions provide a built-in method bind  that allows to fix this =============

// more complex syntax will be little later
let boundFunc = func.bind(context);

let user6 = {
  firstName: "John",
};
function func() {
  alert(this.firstName);
}
let funcUser = func.bind(user6);
funcUser(); // John

/***
 *
 *
 * Here func.bind(user) as a “bound variant” of func , with fixed this=user . All arguments are passed to the original func “as is”, for instance:
 *
 *
 */

let user7 = {
  firstName: "John",
};
function func3(phrase) {
  alert(phrase + ", " + this.firstName);
}
// bind this to user
let funcUser7 = func3.bind(user7);
funcUser7("Hello"); // Hello, John (argument "Hello" is passed, and this=user)

//================== Now let’s try with an object method: =============

let user8 = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  },
};
let sayHi8 = user8.sayHi.bind(user); // (*)
sayHi8(); // Hello, John!
setTimeout(sayHi, 1000); // Hello, John!

//===================== Binding Options

let user9 = {
  firstName: "John",
  say(phrase) {
    alert(`${phrase}, ${this.firstName}!`);
  },
};
let say = user9.say.bind(user9);
say("Hello"); // Hello, John ("Hello" argument is passed to say)
say("Bye"); // Bye, John ("Bye" is passed to say)
