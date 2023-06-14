// “Symbol” value represents a unique identifier.

// A value of this type can be created using Symbol() :

// id is a new symbol
let id = Symbol();

// Upon creation, we can give symbol a description (also called a symbol name), mostly useful for debugging purposes:

// id is a symbol with the description "id"
let idd = Symbol("id");

let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false

/**
 *
 *
 * Most values in JavaScript support implicit conversion to a string. For instance, we can alert almost any value, and it will work. Symbols are special. They don’t auto-convert.
 *
 *
 */

let user = { name: "John" };
let ided = Symbol("id");
user[ided] = "ID Value";
alert(user[ided]); // we can access the data using the symbol as the key

let user3 = { name: "John" };
// our script uses "id" property
user3.ided = "ID Value";
// ...if later another script the uses "id" for its purposes...
user3.ided = "Their id value";
// boom! overwritten! it did not mean to harm the colleague, but did it!

/**
 *
 * ========================== Symbols in a literal ==============
 *
 *
 * If we want to use a symbol in an object literal {...} , we need square brackets around it.
 *
 */

let iddd = Symbol("id");
let user4 = {
  name: "John",
  [iddd]: 123, // not just "id: 123"
};

// Symbols are skipped by for…in

let id3 = Symbol("id");
let user5 = {
  name: "John",
  age: 30,
  [id3]: 123,
};
for (let key in user3) alert(key); // name, age (no symbols)
// the direct access by the symbol works
alert("Direct: " + user3[id3]);

/**
 *
 * Object.keys(user) also ignores them. That’s a part of the general “hiding symbolic properties” principle.
 *
 */

let idede = Symbol("id");
let user6 = {
  [idede]: 123,
};
let clone = Object.assign({}, user6);
alert(clone[idede]); // 123

let obj = {
  0: "test", // same as "0": "test"
};
// both alerts access the same property (the number 0 is converted to string "0")
alert(obj["0"]); // test
alert(obj[0]); // test (same property)

// =========== Global symbols ============

// read from the global registry
let id6 = Symbol.for("id"); // if the symbol did not exist, it is created
// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");
// the same symbol
alert(id6 === idAgain); // true

/**
 *
 *
 * Symbol.keyFor
 * For global symbols, not only Symbol.for(key) returns a symbol by name, but there’s a reverse call: Symbol.keyFor(sym) , that does the reverse: returns a name by a global symbol.
 *
 */

let sym = Symbol.for("name");
let sym2 = Symbol.for("id");
// get name from symbol
alert(Symbol.keyFor(sym)); // name
alert(Symbol.keyFor(sym2)); // id
alert( Symbol.keyFor(Symbol.for("name")) ); // name, global symbol
alert( Symbol.keyFor(Symbol("name2")) ); // undefined, the argument isn't a global symbol


/**
 * 
 * There exist many “system” symbols that JavaScript uses internally, and we can use them to
fine-tune various aspects of our objects.
They are listed in the specification in the Well-known symbols  table:
Symbol.hasInstance
Symbol.isConcatSpreadable
Symbol.iterator
Symbol.toPrimitive
 * 
 */