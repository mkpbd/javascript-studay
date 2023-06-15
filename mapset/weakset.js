// WeakMap and WeakSet

// WeakSet is a special kind of Set that does not prevent JavaScript from removing its items from memory. WeakMap is the same thing for Map .

let john = { name: "John" };
// the object can be accessed, john is the reference to it
// overwrite the reference
john = null;
// the object will be removed from memory

// Usually, properties of an object or elements of an array or another data structure are considered reachable and kept in memory while that data structure is in memory.

/**
 *
 * For instance, if we put an object into an array, then while the array is alive, the object will be alive as well, even if there are no other references to it.
 *
 */

let john2 = { name: "John" };
let array = [john];
john2 = null; // overwrite the reference
// john is stored inside the array, so it won't be garbage-collected
// we can get it as array[0]

let john3 = { name: "John" };
let map = new Map();
map.set(john, "...");
john3 = null; // overwrite the reference
// john is stored inside the map,
// we can get it by using map.keys()

/**
 * 
 * 
 * let john = { name: "John" };
let map = new Map();
map.set(john, "...");
john = null; // overwrite the reference
// john is stored inside the map,
// we can get it by using map.keys()
 * 
The first difference from Map is that WeakMap keys must be objects, not primitive values:
 */

let weakMap = new WeakMap();
let obj1 = {};

weakMap.set(obj1, "ok"); // works fine (object key)
// can't use a string as the key
weakMap.set("test", "Whoops"); // Error, because "test" is not an object

let john4 = { name: "John" };
let weakMap2 = new WeakMap();

weakMap2set(john4, "...");
john4 = null; // overwrite the reference
// john is removed from memory!

/**
 * 
 * Compare it with the regular Map example above. Now if john only exists as the key of WeakMap – it is to be automatically deleted.
 *  WeakMap does not support iteration and methods keys() , values() , entries() , so 
 * there’s no way to get all keys or values from it. WeakMap has only the following methods:
 * 
 * weakMap.get(key)
weakMap.set(key, value)
weakMap.delete(key)
weakMap.has(key)
 * 
 * 


 */

weakMap.set(john, "secret documents");
// if john dies, secret documents will be destroyed automatically

/**
 *
 * That’s useful for situations when we have a main storage for the objects somewhere and need to keep additional information, that is only relevant while the object lives.
 */

let john5 = { name: "John" };
// map: user => visits count
let visitsCountMap = new Map();
// john is the key for the map
visitsCountMap.set(john, 123);
// now john leaves us, we don't need him anymore
john5 = null;
// but it's still in the map, we need to clean it!
alert(visitsCountMap.size); // 1
// and john is also in the memory, because Map uses it as the key

/// Another way would be to use WeakMap :

let john6 = { name: "John" };
let visitsCountMap2 = new WeakMap();
visitsCountMap2.set(john, 123);
// now john leaves us, we don't need him anymore
john6 = null;
// there are no references except WeakMap,
// so the object is removed both from the memory and from visitsCountMap automatically

/***
 *
 *
 * WeakMap can make things simpler, because it is cleaned up automatically. The information in it like visits count in the example above lives only while the key object exists.
 *
 */

// WeakSet behaves similarly:

/**
 *
 *
 * It is analogous to Set , but we may only add objects to WeakSet (not primitives). An object exists in the set while it is reachable from somewhere else.
 *
 * Like Set , it supports add , has and delete , but not size , keys() and no iterations
 */

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];
// fill it with array elements (3 items)
let unreadSet = new WeakSet(messages);
// use unreadSet to see whether a message is unread
alert(unreadSet.has(messages[1])); // true
// remove it from the set after reading
unreadSet.delete(messages[1]); // true
// and when we shift our messages history, the set is cleaned up automatically
messages.shift();
// no need to clean unreadSet, it now has 2 items
// (though technically we don't know for sure when the JS engine clears it)

/***
 * 
 * 
 * The most notable limitation of WeakMap and WeakSet is the absence of iterations, and inability to get all current content. That may appear inconvenient, but does not prevent
WeakMap/WeakSet from doing their main job – be an “additional” storage of data for object which are stored/managed at another place.
 * 
 */