/**
 * objects are used to store keyed collections of various data and more complex entities.
 * In JavaScript, objects penetrate almost every aspect of the language.
 * So we must understand them first before going in-depth anywhere else
 *
 */

/***
 *
 *
 * An object can be created with figure brackets {…} with an optional list of properties.
 * A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.
 *
 *
 */

/**
    An empty object (“empty cabinet”) can be created using one of two syntaxes
*/

let user = new Object(); // "object constructor" syntax
let user1 = {}; // "object literal" syntax

/**
 * ============== Literals and properties
 * Usually, the figure brackets {...} are used. That declaration is called an object literal
 *
 */

let userLiteral = {
  // an object
  name: "John", // by key "name" store value "John"
  age: 30, // by key "age" store value 30
};

/**
 *
 * A property has a key (also known as “name” or “identifier”) before the colon ":" and a value to the right of it.
 * In the userLiteral object, there are two properties:
 * 1. The first property has the name "name" and the value "John" .
 * 2. The second one has the name "age" and the value 30 .
 * The resulting user object can be imagined as a cabinet with two signed files labeled “name” and “age”.
 *
 */

/**
 *
 * We can add, remove and read files from it any time.
 * Property values are accessible using the dot notation:
 *
 */
// get fields of the object:
alert(userLiteral.name); // John
alert(userLiteral.age); // 30

// ============ The value can be of any type. Let’s add a boolean one: =========

userLiteral.isAdmin = true;

// To remove a property, we can use delete operator:

delete userLiteral.age;

//======== We can also use multiword property names, but then they must be quoted:

let userPropertyMultiWorkd = {
  name: "John",
  age: 30,
  "likes birds": true, // multiword property name must be quoted
};

// The last property in the list may end with a comma:
user1.isAdmin = true;
delete user1.age;

let user1 = {
  name: "John",
  age: 30,
  "likes birds": true, // multiword property name must be quoted
};

let user3 = {
  name: "John",
  age: 30,
};

/**
 *
 *
 * That is called a “trailing” or “hanging” comma. Makes it easier to add/remove/move around properties, because all lines become alike.
 *
 *
 *  *************** Square brackets *****************
 *
 * For multiword properties, the dot access doesn’t work:
 *
 * // this would give a syntax error    user.likes birds = true
 */

let user5 = {};
// set
user5["likes birds"] = true;
// get
alert(user5["likes birds"]); // true
// delete
delete user5["likes birds"];

/**
 *
 * Now everything is fine. Please note that the string inside the brackets is properly quoted (any type of quotes will do).
 * Square brackets also provide a way to obtain the property name as the result of any expression – as opposed to a literal string – like from a variable as follows:
 *
 *
 */

let key = "likes birds";
// same as user["likes birds"] = true;
user5[key] = true;

/**
 *
 *
 *
 */
let user8 = {
  name: "John",
  age: 30,
};
let key2 = prompt("What do you want to know about the user?", "name");

// access by variable
alert(user8[key2]); // John (if enter "name")

//=========== Computed properties     We can use square brackets in an object literal. That’s called computed properties. ===============

let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};
alert(bag.apple); // 5 if fruit="apple"

/**
    The meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit .
So, if a visitor enters "apple" , bag will become {apple: 5} .

*/
let fruit1 = prompt("Which fruit to buy?", "apple");
let bag1 = {};
// take property name from the fruit variable
bag1[fruit1] = 5;

/**
 *
 *
 * We can use more complex expressions inside square brackets:
 *
 *
 */

let fruit3 = "apple";
let bag3 = {
  [fruit3 + "Computers"]: 5, // bag.appleComputers = 5
};

/**
 *
 * Square brackets are much more powerful than the dot notation. They allow any property names and variables. But they are also more cumbersome to write.
 *
 */

//==================== Property value shorthand =====================

// In real code we often use existing variables as values for property names.

function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}
let userMake = makeUser("John", 30);
alert(userMake.name); // John

//===========  Instead of name:name we can just write name , like this:

function makeUser1(name, age) {
  return {
    name, // same as name: name
    age, // same as age: age
    // ...
  };
}

// We can use both normal properties and shorthands in the same object

let user9 = {
  name, // same as name:name
  age: 30,
};

//============= Existence check ===============

/**
 *
 *
 * A notable objects feature is that it’s possible to access any property.
 *  There will be no error if the property doesn’t exist! Accessing a non-existing property just returns undefined .
 * It provides a very common way to test whether the property exists – to get it and compare vs undefined:
 *
 *
 *
 */

let user10 = {};
alert(user10.noSuchProperty === undefined); // true means "no such property"

//=============== There also exists a special operator "in" to check for the existence of a property.  The syntax is:

"key" in object;

let user11 = { name: "John", age: 30 };
alert("age" in user11); // true, user.age exists
alert("blabla" in user11); // false, user.blabla doesn't exist


//================= Please note that on the left side of in there must be a property name. That’s usually a quoted string. 