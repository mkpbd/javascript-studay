/**
 *
 * Remember, new objects can be created with a constructor function, like new F() . If F.prototype is an object, then new operator uses it to set [[Prototype]] for the new object.
 *
 *
 * JavaScript had prototypal inheritance from the beginning. It was one of the core features of the language.
 */

let animal = {
  eats: true,
};
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype = animal;
let rabbit = new Rabbit("White Rabbit"); // rabbit.__proto__ == animal
alert(rabbit.eats); // true

//================= Default F.prototype, constructor property ==========

/**
 *
 * Every function has the "prototype" property even if we don’t supply it. The default "prototype" is an object with the only property constructor that points back to the function itself. Like this:
 *
 *
 */

function Rabbit2() {}
/* default prototype
Rabbit.prototype = { constructor: Rabbit };
*/

alert(Rabbit.prototype.constructor == Rabbit); // true

let rabbit2 = new Rabbit2(); // inherits from {constructor: Rabbit

alert(rabbit2.constructor == Rabbit2); // true (from prototype)

//= We can use constructor property to create a new object using the same constructor as the existing one.

function Rabbit3(name) {
  this.name = name;
  alert(name);
}
let rabbit3 = new Rabbit3("White Rabbit");
let rabbit4 = new rabbit2.constructor("Black Rabbit");

Rabbit.prototype = {
  jumps: true,
};
let rabbit5 = new Rabbit();
alert(rabbit5.constructor === Rabbit); // false

/**
 *
 * So, to keep the right "constructor" we can choose to add/remove properties to the default "prototype" instead of overwriting it as a whole:
 *
 */
function Rabbit4() {}
// Not overwrite Rabbit.prototype totally
// just add to it
Rabbit4.prototype.jumps = true;
// the default Rabbit.prototype.constructor is preserved
// Or, alternatively, recreate the constructor property manually:

Rabbit4.prototype = {
  jumps: true,
  constructor: Rabbit4,
};
// now constructor is also correct, because we added it

//====================== Other built-in prototypes =====================

/***
    Other built-in objects such as Array , Date , Function and others also keep methods in prototypes.

    Other built-in objects such as Array , Date , Function and others also keep methods in prototypes
*/

let arr = [1, 2, 3];
// it inherits from Array.prototype?
alert(arr.__proto__ === Array.prototype); // true
// then from Object.prototype?
alert(arr.__proto__.__proto__ === Object.prototype); // true
// and null on the top.
alert(arr.__proto__.__proto__.__proto__); // null
/**
 *
 * Some methods in prototypes may overlap, for instance, Array.prototype has its own toString that lists comma-delimited elements:
 *
 */

let arr2 = [1, 2, 3];
alert(arr2); // 1,2,3 <-- the result of Array.prototype.toString

/**
 *
 *
 * Other built-in objects also work the same way.
 * Even functions – they are objects of a built-in Function constructor, and their methods ( call / apply and others) are taken from Function.prototype .
 *  Functions have their own toString too.
 *
 *
 */

function f() {}
alert(f.__proto__ == Function.prototype); // true
alert(f.__proto__.__proto__ == Object.prototype); // true, inherit from objects

/*********************** Primitives ************************ */

/**
 *
 *
 * The most intricate thing happens with strings, numbers and booleans.
 * As we remember, they are not objects.
 *  But if we try to access their properties, then temporary wrapper objects are created using built-in constructors String , Number , Boolean , they  provide the methods and disappear.
 * These objects are created invisibly to us and most engines optimize them out, but the specification describes it exactly this way.
 * Methods of these objects also reside in prototypes,available as String.prototype , Number.prototype and Boolean.prototype .
 *
 *
 */

//*********************8 Values null and undefined have no object wrappers ********************** */

/**
 *
 *
 * Special values null and undefined stand apart.
 * They have no object wrappers, so methods and properties are not available for them.
 *  And there are no corresponding prototypes too.
 *
 */

/***
 * 
 * Important:
Prototypes are global, so it’s easy to get a conflict. If two libraries add a method
String.prototype.show , then one of them will be overwriting the other.
So, generally, modifying a native prototype is considered a bad idea.
 * 
 * 
 */

/***
 * 
 * ************* Borrowing from prototypes***************
 * 
 * 
 * In the chapter Decorators and forwarding, call/apply we talked about method borrowing.
That’s when we take a method from one object and copy it into another.
Some methods of native prototypes are often borrowed.
For instance, if we’re making an array-like object, we may want to copy some array methods to it.
 */

let obj = {
  0: "Hello",
  1: "world!",
  length: 2,
};
obj.join = Array.prototype.join;
alert(obj.join(",")); // Hello,world!

let animal11 = {
  eats: true,
};
// create a new object with animal as a prototype
let rabbit11 = Object.create(animal);
alert(rabbit11.eats); // true
alert(Object.getPrototypeOf(rabbi11t) === animal11); // get the prototype of rabbit
Object.setPrototypeOf(rabbit11, {}); // change the prototype of rabbit to {}

/***
 *
 * Object.create has an optional second argument: property descriptors. We can provide additional properties to the new object there, like this:
 *
 */

let animal121 = {
  eats: true,
};
let rabbit121 = Object.create(animal121, {
  jumps: {
    value: true,
  },
});
alert(rabbit121.jumps); // true

// The descriptors are in the same format as described in the chapter Property flags and descriptors.

// // fully identical shallow clone of obj
let clone = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
);

/**
 *
 *
 * This call makes a truly exact copy of obj , including all properties: enumerable and nonenumerable, data properties and setters/getters – everything, and with the right
 * [[Prototype]] .
 *
 */

//************************************** Brief history ****************************** */

// If we count all the ways to manage [[Prototype]] , there’s a lot! Many ways to do the same!

// Don’t reset [[Prototype]] unless the speed doesn’t matter

//=========== “Very plain” objects ==========

let obj = {};
let key = prompt("What's the key?", "__proto__");
obj[key] = "some value";
alert(obj[key]); // [object Object], not "some value"!

let obj1 = Object.create(null);
let key1 = prompt("What's the key?", "__proto__");
obj1[key1] = "some value";
alert(obj1[key1]); // "some value"

Object.create(null) //creates an empty object without a prototype ( [[Prototype]] is  null ):