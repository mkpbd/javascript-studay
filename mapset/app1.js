// Map, Set, WeakMap and WeakSet

// Now we’ve learned about the following complex data structures:

// Objects for storing keyed collections.
// Arrays for storing ordered collections

// But that’s not enough for real life. That’s why Map and Set also exist.

// Map  is a collection of keyed data items, just like an Object . But the main difference is that Map allows keys of any type.

/**
 *
 * The main methods are:
 * new Map() – creates the map.
 * map.set(key, value) – stores the value by the key.
 * map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
 * map.has(key) – returns true if the key exists, false otherwise.
 * map.delete(key) – removes the value by the key.
 * map.clear() – clears the map
 * map.size – returns the current element count.
 *
 *
 */

let map = new Map();
map.set("1", "str1"); // a string key
map.set(1, "num1"); // a numeric key
map.set(true, "bool1"); // a boolean key
// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert(map.get(1)); // 'num1'
alert(map.get("1")); // 'str1'
alert(map.size); // 3

/// As we can see, unlike objects, keys are not converted to strings. Any type of key is possible.

// Map can also use objects as keys.

let john = { name: "John" };
// for every user, let's store their visits count
let visitsCountMap = new Map();
// john is the key for the map
visitsCountMap.set(john, 123);
alert(visitsCountMap.get(john)); // 123

/**
 *
 * Using objects as keys is one of most notable and important Map features.
 *  For string keys, Object can be fine, but it would be difficult to replace the Map with a regular Object in the
 *
 *
 */

let john1 = { name: "John" };
let visitsCountObj1 = {}; // try to use an object
visitsCountObj1[john] = 123; // try to use john object as the key
// That's what got written!
alert(visitsCountObj["[object Object]"]); // 123

/**
 *
 * As john is an object, it got converted to the key string "[object Object]" .
 * All objects  without a special conversion handling are converted to such string, so they’ll all mess up.
 * In the old times, before Map existed, people used to add unique identifiers to objects for that:
 *
 */

// we add the id field
let john2 = { name: "John", id: 1 };
let visitsCounts = {};
// now store the value by id
visitsCounts[john.id] = 123;
alert(visitsCounts[john.id]); // 123

/**
 *
 * ********************* How Map compares keys ****************************
 *
 * To test values for equivalence, Map uses the algorithm SameValueZero .
 * It is roughly the same as strict equality === , but the difference is that NaN is considered equal to NaN .
 *  So NaN can be used as the key as well.
 *
 */

//========================== Chaining ================

// Every map.set call returns the map itself, so we can “chain” the calls:

map.set("1", "str1").set(1, "num1").set(true, "bool1");

//============= Map from Object =============

//=============== When a Map is created, we can pass an array (or another iterable) with key-value pairs, like this:

// array of [key, value] pairs
let map1 = new Map([
  ["1", "str1"],
  [1, "num1"],
  [true, "bool1"],
]);

/**
 * There is a built-in method Object.entries(obj)  that returns an array of key/value pairs for an object exactly in that format.
 *
 * So we can initialize a map from an object like this:
 *
 */

let map2 = new Map(
  Object.entries({
    name: "John",
    age: 30,
  })
);

/**
 *
 * Here, Object.entries returns the array of key/value pairs: [ ["name","John"], ["age", 30] ] . That’s what Map needs.
 *
 */

//=================== Iteration over Map ==================

/**
 * 
 * For looping over a map , there are 3 methods:
map.keys() – returns an iterable for keys,
map.values() – returns an iterable for values,
map.entries() – returns an iterable for entries [key, value] , it’s used by default in
for..of .
 * 
 */

let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);
// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}
// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}
// iterate over [key, value] entries
for (let entry of recipeMap) {
  // the same as of recipeMap.entries()
  alert(entry); // cucumber,500 (and so on)
}

//=================== The insertion order is used ===================

//====== The iteration goes in the same order as the values were inserted. Map preserves this order, unlike a regular Object .

// Besides that, Map has a built-in forEach method, similar to Array

// runs the function for each (key, value) pair
recipeMap.forEach((value, key, map) => {
  alert(`${key}: ${value}`); // cucumber: 500 etc
});

//========= A Set is a collection of values, where each value may occur only once. ==========

/**
 * SET
 * A Set is a collection of values, where each value may occur only once.
 *
 * new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
 * set.add(value) – adds a value, returns the set itself.
 * set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false .
 * set.has(value) – returns true if the value exists in the set, otherwise false .
 * set.clear() – removes everything from the set.
 * set.size – is the elements count.
 *
 */

/***
 * 
 * let set = new Set();
 * let john = { name: "John" };
 * let pete = { name: "Pete" };
 * let mary = { name: "Mary" };
 * // visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
 * 
 */

let set = new Set();
let john3 = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);

set.add(mary);
// set keeps only unique values
alert(set.size); // 3
for (let user of set) {
  alert(user.name); // John (then Pete and Mary)
}

/***
 * 
 * The alternative to Set could be an array of users, and the code to check for duplicates on
every insertion using arr.find  . But the performance would be much worse, because this
method walks through the whole array checking every element. Set is much better optimized
internally for uniqueness checks.
 * 
 */

/****
 *
 * ****************** Iteration over Set *********************
 *
 * We can loop over a set either with for..of or using forEach :
 *
 *
 *
 *  */

let set2 = new Set(["oranges", "apples", "bananas"]);
for (let value of set2) alert(value);
// the same with forEach:
set2.forEach((value, valueAgain, set) => {
  alert(value);
});


/***
 * 
 * Note the funny thing. The callback function passed in forEach has 3 arguments: a value,
then again a value, and then the target object. Indeed, the same value appears in the
arguments twice.
 *
That’s for compatibility with Map where the callback passed forEach has three arguments.
Looks a bit strange, for sure. But may help to replace Map with Set in certain cases with
ease, and vice versa 


 */

/**
 * 
 * The same methods Map has for iterators are also supported:
set.keys() – returns an iterable object for values,
set.values() – same as set.keys , for compatibility with Map ,
set.entries() – returns an iterable object for entries [value, value] , exists for
compatibility with Map .
 * 
 */