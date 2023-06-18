//============== Currying and partials ==============

/**
 *
 *
 * Until now we have only been talking about binding this . Let’s take it a step further.
 * We can bind not only this , but also arguments. That’s rarely done, but sometimes can be handy.
 *
 * It allows to bind context as this and starting arguments of the function.
 *
 *
 */

function mul(a, b) {
  return a * b;
}

//===================== Let’s use bind to create a function double on its base: ============

function mul(a, b) {
  return a * b;
}
let double = mul.bind(null, 2);
alert(double(3)); // = mul(2, 3) = 6
alert(double(4)); // = mul(2, 4) = 8
alert(double(5)); // = mul(2, 5) = 10

function mult(a, b) {
  return a * b;
}
let triple = mult.bind(null, 3);
alert(triple(3)); // = mul(3, 3) = 9
alert(triple(4)); // = mul(3, 4) = 12
alert(triple(5)); // = mul(3, 5) = 15

//========================== Going partial without context ================

/***
 *
 * What if we’d like to fix some arguments, but not bind this ?
 * The native bind does not allow that. We can’t just omit the context and jump to arguments.
 * Fortunately, a partial function for binding only arguments can be easily implemented.
 *
 *
 */

function partial(func, ...argsBound) {
  return function (...args) {
    // (*)
    return func.call(this, ...argsBound, ...args);
  };
}
// Usage:
let user = {
  firstName: "John",
  say(time, phrase) {
    alert(`[${time}] ${this.firstName}: ${phrase}!`);
  },
};

// add a partial method that says something now by fixing the first argument
user.sayNow = partial(
  user.say,
  new Date().getHours() + ":" + new Date().getMinutes()
);
user.sayNow("Hello");
// Something like:
// [10:00] John: Hello!

/**
 *
 *
 * The result of partial(func[, arg1, arg2...]) call is a wrapper (*) that calls func with: Same this as it gets (for user.sayNow call it’s user )
 * Then gives it ...argsBound – arguments from the partial call ( "10:00" ) Then gives it ...args – arguments given to the wrapper ( "Hello" )
 *
 *
 */

/***
 * ************************ Currying ******************
 *
 * Sometimes people mix up partial function application mentioned above with another thing named “currying”.
 * That’s another interesting technique of working with functions that we just have to mention here.
 * urrying  is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c) .
 * In JavaScript, we usually make a wrapper to keep the original function.
 *
 * ********************** Currying doesn’t call a function. It just transforms it.**********************
 * Let’s create a helper curry(f) function that performs currying for a two-argument f .
 * In other words, curry(f) for two-argument f(a, b) translates it into f(a)(b)
 *
 */

function curry(f) {
  // curry(f) does the currying transform
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}
// usage
function sum(a, b) {
  return a + b;
}
let carriedSum = curry(sum);
alert(carriedSum(1)(2)); // 3

/***
 *
 *
 * As you can see, the implementation is a series of wrappers. The result of curry(func) is a wrapper function(a) .
 * When it is called like sum(1) , the argument is saved in the Lexical Environment, and a new wrapper is returned function(b) .
 * Then sum(1)(2) finally calls function(b) providing 2 , and it passes the call to the original multi-argument sum .
 *
 *
 *
 *
 */

function curry1(f) {
  return function (...args) {
    // if args.length == f.length (as many arguments as f has),
    // then pass the call to f
    // otherwise return a partial function that fixes args as first arguments
  };
}

//====================== Advanced curry implementation ==================

/**
 *
 * In case you’d like to get in details (not obligatory!), here’s the “advanced” curry implementation that we could use above.
 *
 */

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}
let curriedSum = curry(sum);
alert(curriedSum(1, 2, 3)); // 6, still callable normally
alert(curriedSum(1)(2, 3)); // 6, currying of 1st arg
alert(curriedSum(1)(2)(3)); // 6, full currying

/***
 *
 *
 * The new curry may look complicated, but it’s actually easy to understand. The result of curry(func) is the wrapper curried that looks like this:
 *
 */

// func is the function to transform
function curried(...args) {
  if (args.length >= func.length) {
    // (1)
    return func.apply(this, args);
  } else {
    return function pass(...args2) {
      // (2)
      return curried.apply(this, args.concat(args2));
    };
  }
}

//====================== Arrow functions revisited ======================

/**
 * 
 * Let’s revisit arrow functions.
Arrow functions are not just a “shorthand” for writing small stuff.
JavaScript is full of situations where we need to write a small function, that’s executed
somewhere else.
For instance:
arr.forEach(func) – func is executed by forEach for every array item.
setTimeout(func) – func is executed by the built-in scheduler.
…there are more.
It’s in the very spirit of JavaScript to create a function and pass it somewhere.
And in such functions we usually don’t want to leave the current context.
 * 
 * 
 */

//================== Arrow functions have no “this” ==================

//===== As we remember from the chapter Object methods, "this", arrow functions do not have this .
// If this is accessed, it is taken from the outside.

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList() {
    this.students.forEach((student) => alert(this.title + ": " + student));
  },
};

let group2 = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList() {
    this.students.forEach(function (student) {
      // Error: Cannot read property 'title' of undefined
      alert(this.title + ": " + student);
    });
  },
};
group2.showList();

//=================== Arrow functions can’t run with new ===============

/**
 *
 * Not having this naturally means another limitation: arrow functions can’t be used as constructors. They can’t be called with new .
 *
 *
 * ============================== Arrow functions VS bind ======================
 *
 * There’s a subtle difference between an arrow function => and a regular function called with
 * .bind(this) :
 * .bind(this) creates a “bound version” of the function.
 * The arrow => doesn’t create any binding. The function simply doesn’t have this . The  lookup of this is made exactly the same way as a regular variable search: in the outer lexical environment.
 *
 */

//================== Arrows have no “arguments” =====================

/***
 * 
 * 
 * Arrow functions also have no arguments variable.
That’s great for decorators, when we need to forward a call with the current this and
arguments .
For instance, defer(f, ms) gets a function and returns a wrapper around it that delays the
call by ms milliseconds:
The same without an arrow function would look like:
Here we had to create additional variables args and ctx so that the function inside
setTimeout could take them.
Arrow functions:
Do not have this .
Do not have arguments .
Can’t be called with new .
(They also don’t have super , but we didn’t study it. Will be in the chapter Class
inheritance).
That’s because they are meant for short pieces of code that do not have their own “context”, but
rather works in the current one. And they really shine in that use case. In this
 * 
 * 
 */

function defer(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}
function sayHi(who) {
  alert("Hello, " + who);
}
let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John"); // Hello, John after 2 seconds

//================ The same without an arrow function would look like: ==========

function defer(f, ms) {
  return function (...args) {
    let ctx = this;
    setTimeout(function () {
      return f.apply(ctx, args);
    }, ms);
  };
}

//=========== Object properties configuration ==============
//==== Property flags and descriptors ==============

/***
 *
 * Till now, a property was a simple “key-value” pair to us. But an object property is actually a more flexible and powerful thing.
 * In this chapter we’ll study additional configuration options, and in the next we’ll see how to invisibly turn them into getter/setter functions.
 *
 *
 */

/***
 *
 *
 * Property flags
 *
 * Object properties, besides a value , have three special attributes (so-called “flags”):
 * writable – if true , can be changed, otherwise it’s read-only.
 * enumerable – if true , then listed in loops, otherwise not listed.
 * configurable – if true , the property can be deleted and these attributes can be modified, otherwise not.
 *
 *
 */

let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

let use3r = {
  name: "John",
};
let descriptor3 = Object.getOwnPropertyDescriptor(user, "name");
alert(JSON.stringify(descriptor, null, 2));
/* property descriptor:
    {
        "value": "John",
        "writable": true,
        "enumerable": true,
        "configurable": true
}
*/

//================= descriptor ================

/**
 *
 *
 * If the property exists, defineProperty updates its flags. Otherwise, it creates the property with the given value and flags; in that case, if a flag is not supplied, it is assumed false .
 * For instance, here a property name is created with all falsy flags:
 *
 */

let user6 = {};
Object.defineProperty(user6, "name", {
  value: "John",
});
let descriptor6 = Object.getOwnPropertyDescriptor(user6, "name");
alert(JSON.stringify(descriptor6, null, 2));
/*
{
"value": "John",
"writable": false,
"enumerable": false,
"configurable": false
}
*/

//===================== Read-only ================

let user9 = {
  name: "John",
};
Object.defineProperty(user9, "name", {
  writable: false,
});
user9.name = "Pete"; // Error: Cannot assign to read only property 'name'...

//================= Here’s the same operation, but for the case when a property doesn’t exist: =============

let user11 = {};
Object.defineProperty(user11, "name", {
  value: "Pete",
  // for new properties need to explicitly list what's true
  enumerable: true,
  configurable: true,
});
alert(user11.name); // Pete
user11.name = "Alice"; // Error


//============== Sealing an object globally ============

Object.preventExtensions(obj);

//======= Forbids adding/removing of properties. Sets configurable: false for all existing properties.
Object.seal(obj);

//Forbids adding/removing/changing of properties. Sets configurable: false, writable: false for all existing properties. And also there are tests for them:
Object.freeze(obj)



//============== Returns false if adding properties is forbidden, otherwise true .

Object.isExtensible(obj)

// ============ Returns true if adding/removing properties is forbidden, and all existing properties have configurable: false

Object.isSealed(obj)

//====== Returns true if adding/removing/changing properties is forbidden, and all current properties are configurable: false, writable: false .
Object.isFrozen(obj)

