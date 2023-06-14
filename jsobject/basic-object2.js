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
