//******** The “for…in” loop  */

/**
 *
 * To walk over all keys of an object, there exists a special form of the loop: for..in .
 *  This is a completely different thing from the for(;;) construct that we studied before.
 *
 */
for (key in object) {
  // executes the body for each key among object properties
}

/**
 *
 * For instance, let’s output all properties of user :
 */

let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  // keys
  alert(key); // name, age, isAdmin
  // values for the keys
  alert(user[key]); // John, 30, true
}

//======== Note that all “for” constructs allow us to declare the looping variable inside the loop, like let key here.

// Ordered like an object

let codes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  // ..,
  1: "USA",
};
for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}

let user2 = {
  name: "John",
  surname: "Smith",
};
user2.age = 25; // add one more
// non-integer properties are listed in the creation order
for (let prop in user2) {
  alert(prop); // name, surname, age
}

let codes1 = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA",
};
for (let code in codes1) {
  alert(+code); // 49, 41, 44, 1
}

// Comparison by reference

let a = {};
let b = a; // copy the reference
alert(a == b); // true, both variables reference the same object
alert(a === b); // true

//========= And here two independent objects are not equal, even though both are empty: ===========

let aa = {};
let bb = {}; // two independent objects
alert(aa == bb); // false

// Const object

const userConst = {
  name: "John",
};
userConst.age = 25; // (*)
alert(userConst.age); // 25

//=============== Cloning and merging, Object.assign ============

/**
 *
 * So, copying an object variable creates one more reference to the same object.
 * But what if we need to duplicate an object? Create an independent copy, a clone?
 * That’s also doable, but a little bit more difficult, because there’s no built-in method for that in JavaScript.
 * Actually, that’s rarely needed. Copying by reference is good most of the time.
 *
 */

let user12 = {
  name: "John",
  age: 30,
};

let clone = {}; // the new empty object
// let's copy all user properties into it
for (let key in user12) {
  clone[key] = user12[key];
}
// now clone is a fully independent clone
clone.name = "Pete"; // changed the data in it
alert(user12.name); // still John in the original object
Object.assign(dest, [src1, src2, src3]);

//=========== For instance, we can use it to merge several objects into one: ==========

let user121 = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
// copies all properties from permissions1 and permissions2 into user
Object.assign(user121, permissions1, permissions2);
// now user = { name: "John", canView: true, canEdit: true }

// If the receiving object ( user ) already has the same named property, it will be overwritten

let user11 = { name: "John" };
// overwrite name, add isAdmin
Object.assign(user11, { name: "Pete", isAdmin: true });
// now user = { name: "Pete", isAdmin: true }

// We also can use Object.assign to replace the loop for simple cloning:

let user21 = {
  name: "John",
  age: 30,
};
let clone21 = Object.assign({}, user21);

/**
 *
 * It copies all properties of user into the empty object and returns it. Actually, the same as the loop, but shorter.
 *
 */

let user8 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};
alert(user8.sizes.height); // 182

let clone8 = Object.assign({}, user);
alert(user8.sizes === clone8.sizes); // true, same object
// user and clone share sizes
user8.sizes.width++; // change a property from one place
alert(clone8.sizes.width); // 51, see the result from the other one

// Object methods, "this"

// Objects are usually created to represent entities of the real world, like users, orders and so on:

let user211 = {
  name: "John",
  age: 30,
};
user211.sayHi = function () {
  alert("Hello!");
};

// Method shorthand

user211 = {
  sayHi: function () {
    alert("Hello");
  },
};
// method shorthand looks better, right?
user211 = {
  sayHi() {
    // same as "sayHi: function()"
    alert("Hello");
  },
};

//========= “this” in methods =

let user111 = {
  name: "John",
  age: 30,
  sayHi() {
    alert(this.name);
  },
};
user111.sayHi(); // John

/**
 * Here during the execution of user.sayHi() , the value of this will be user .
Technically, it’s also possible to access the object without this , by referencing it via the outer
variable:
 * 
 */

let user43 = {
  name: "John",
  age: 30,
  sayHi() {
    alert(user43.name); // "user" instead of "this"
  },
};

// “this” is not bound

// In JavaScript, “this” keyword behaves unlike most other programming languages. It can be used in any function.
// There’s no syntax error in the code like that:

function sayHi21() {
  alert(this.name);
}

//The value of this is evaluated during the run-time, depending on the context. And it can be anything.

let user33 = { name: "John" };
let admin = { name: "Admin" };
function sayHi() {
  alert(this.name);
}
// use the same function in two objects
user33.f = sayHi;
admin.f = sayHi;
// these calls have different this
// "this" inside the function is the object "before the dot"
user33.f(); // John (this == user)
admin.f(); // Admin (this == admin)
admin["f"](); // Admin (dot or square brackets access the method – doesn't matter)

//========== Calling without an object: this == undefined

// We can even call the function without an object at all:

function sayHi44() {
  alert(this);
}
sayHi44(); // undefined

//============= Internals: Reference Type ========

// This section covers an advanced topic, to understand certain edge-cases better.

let user55 = {
  name: "John",
  hi() {
    alert(this.name);
  },
  bye() {
    alert("Bye");
  },
};

user55.hi(); // John (the simple call works)
// now let's call user.hi or user.bye depending on the name
(user55.name == "John" ? user55.hi : user55.bye)(); // Error!

//======= Arrow functions have no “this”

/**
 *
 * Arrow functions are special: they don’t have their “own” this . If we reference this from such a function, it’s taken from the outer “normal” function.
 *
 */
let user66 = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  },
};
user66.sayHi(); // Ilya

let calculator = {
  // ... your code ...
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function () {
    // shows the current step
    alert(this.step);
  },
};
