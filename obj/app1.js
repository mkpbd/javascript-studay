//================= The “class” syntax ===================

class MyClass {
  // class methods
  constructor() {
    //...
  }
  method1() {
    // ...
  }
  method2() {
    //...
  }
  method3() {
    //...
  }
}
/**
 *
 *
 * Then new MyClass() creates a new object with all the listed methods.
 * The constructor() method is called automatically by new , so we can initialize the object there.
 *
 */

class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}
// Usage:
let user = new User("John");
user.sayHi();

/***
 *
 *
 * When new User("John") is called:
 * 1. A new object is created.
 * 2. The constructor runs with the given argument and assigns this.name to it.
 *
 *
 * No comma between class methods
 * A common pitfall for novice developers is to put a comma between class methods, which would result in a syntax error.
 * The notation here is not to be confused with object literals. Within the class, no commas are  required.
 *
 */

class User1 {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}
// proof: User is a function
alert(typeof User1); // function

class User2 {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}
// class is a function
alert(typeof User2); // function
// ...or, more precisely, the constructor method
alert(User2 === User2.prototype.constructor); // true
// The methods are in User.prototype, e.g:
alert(User2.prototype.sayHi); // alert(this.name);
// there are exactly two methods in the prototype
alert(Object.getOwnPropertyNames(User2.prototype)); // constructor, sayHi

//========== Not just a syntax sugar ========

/**
 *
 * Sometimes people say that class is a “syntax sugar” (syntax that is designed to make things easier to read, but doesn’t introduce anything new) in JavaScript, because we could actually declare the same without class keyword at all:
 *
 *
 */

// rewriting class User in pure functions
// 1. Create constructor function
function User4(name) {
  this.name = name;
}
// any function prototype has constructor property by default,
// so we don't need to create it
// 2. Add the method to prototype
User4.prototype.sayHi = function () {
  alert(this.name);
};
// Usage:
let user4 = new User4("John");
user4.sayHi();

// Unlike a regular function, a class constructor can’t be called without new :

class User5 {
  constructor() {}
}
alert(typeof User5); // function
User5(); // Error: Class constructor User cannot be invoked without 'new'

/**
 *
 * Class methods are non-enumerable. A class definition sets enumerable flag to false for all methods in the "prototype" .
 * That’s good, because if we for..in over an object, we usually don’t want its class methods.
 * Classes always use strict . All code inside the class construct is automatically in strict mode.
 */

//****************** Class Expression ************************* */

// Just like functions, classes can be defined inside another expression, passed around, returned, assigned etc.
let User6 = class {
  sayHi() {
    alert("Hello");
  }
};

// "Named Class Expression"
// (no such term in the spec, but that's similar to Named Function Expression)
let User11 = class MyClass11 {
  sayHi() {
    alert(MyClass); // MyClass is visible only inside the class
  }
};
new User11().sayHi(); // works, shows MyClass definition
alert(MyClass11); // error, MyClass not visible outside of the class

//================== We can even make classes dynamically “on-demand”, like this: =============

function makeClass(phrase) {
  // declare a class and return it
  return class {
    sayHi() {
      alert(phrase);
    }
  };
}
// Create a new class
let User22 = makeClass("Hello");
new User22().sayHi(); // Hello

//=========================== Getters/setters, other shorthands =================

// Just like literal objects, classes may include getters/setters, generators, computed properties etc.

class User23 {
  constructor(name) {
    // invokes the setter
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }
}
let user23 = new User23("John");
alert(user.name); // John
user23 = new User23(""); // Name too short.

//=============== The class declaration creates getters and setters in User.prototype , like this: =============

Object.defineProperties(User.prototype, {
  name: {
    get() {
      return this._name;
    },
    set(name) {
      // ...
    },
  },
});

//=================== Here’s an example with computed properties:==========

function f() {
  return "sayHi";
}
class User33 {
  [f()]() {
    alert("Hello");
  }
}
new User33().sayHi();

//==================== Class properties ========================

class User44 {
  name = "Anonymous";
  sayHi() {
    alert(`Hello, ${this.name}!`);
  }
}
new User44().sayHi();

class MyClass12 {
  prop = value; // field
  constructor() {
    //...
    // constructor
    // ...
  }
  method() {}
  // ... // method
  get something() {} //... // getter method
  set something(name) {} // setter method
  [Symbol.iterator]() {} // method with computed name/symbol name
  // ...
}

//******************* Class inheritance ****************** */

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed += speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} stopped.`);
  }
}
let animal = new Animal("My animal");

class Rabbit {
  constructor(name) {
    this.name = name;
  }
  hide() {
    alert(`${this.name} hides!`);
  }
}
let rabbit = new Rabbit("My rabbit");

// Inherit from Animal by specifying "extends Animal"
class Rabbit1 extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}
let rabbit1 = new Rabbit("White Rabbit");

rabbit1.run(5); // White Rabbit runs with speed 5.
rabbit1.hide(); // White Rabbit hides!

function f(phrase) {
  return class {
    sayHi() {
      alert(phrase);
    }
  };
}
class User12 extends f("Hello") {}
new User12().sayHi(); // Hello

//============ Overriding a method ================
/**
 *
 * Now let’s move forward and override a method. As of now, Rabbit inherits the stop method that sets this.speed = 0 from Animal .
 * If we specify our own stop in Rabbit , then it will be used instead:
 *
 */

class Rabbit15 extends Animal {
  stop() {
    // ...this will be used for rabbit.stop()
  }
}

class Animal44 {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed += speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} stopped.`);
  }
}
class Rabbit44 extends Animal44 {
  hide() {
    alert(`${this.name} hides!`);
  }
  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}
let rabbit44 = new Rabbit("White Rabbit");

/*************************************************** Arrow functions have no super ***************************** */

/***
 *
 * As was mentioned in the chapter Arrow functions revisited, arrow functions do not have super .
 * If accessed, it’s taken from the outer function. For instance:
 *
 */
class Rabbit55 extends Animal44 {
  stop() {
    setTimeout(() => super.stop(), 1000); // call parent stop after 1sec
  }
}

/********************************** Overriding constructor ***************************** */
/***
 *
 *
 * With constructors it gets a little bit tricky. Till now, Rabbit did not have its own constructor .
 * According to the specification  , if a class extends another class and has no constructor , then the following “empty” constructor is generated:
 *
 *
 */

class Rabbit66 extends Animal44 {
  // generated for extending classes without own constructors
  constructor(...args) {
    super(...args);
  }
}

class Animal12 {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  // ...
}
class Rabbit12 extends Animal12 {
  constructor(name, earLength) {
    this.speed = 0;
    this.name = name;
    this.earLength = earLength;
  }
  // ...
}

//Doesn't work!
let rabbit33 = new Rabbit("White Rabbit", 10); // Error: this is not defined.

class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }
  // ...
}
// now fine
let rabbit444 = new Rabbit("White Rabbit", 10);
alert(rabbit444.name); // White Rabbit
alert(rabbit444.earLength); // 10
