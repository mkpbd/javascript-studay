//============ Object.keys, values, entries

/**
 *
 * They are supported for:
 *
 * Map
 * Set
 * Array (except arr.values() )
 */

/***
 *
 * For plain objects, the following methods are available:
 * Object.keys(obj)  – returns an array of keys.
 *
 * Object.values(obj)  – returns an array of values.
 * Object.entries(obj)  – returns an array of [key, value] pairs.
 *
 */

let user = {
  name: "John",
  age: 30,
};

Object.keys(user) = ["name", "age"]
Object.values(user) = ["John", 30]
Object.entries(user) = [ ["name","John"], ["age",30] ]


// Here’s an example of using Object.values to loop over property values: 

let user2 = {
    name: "John",
    age: 30
    };
    // loop over values
    for (let value of Object.values(user2)) {
    alert(value); // John, then 30
    }

    //============ Object.keys/values/entries ignore symbolic properties =============

    // Just like a for..in loop, these methods ignore properties that use Symbol(...) as keys.


    /**
     * 
     * Usually that’s convenient.
     * But if we want symbolic keys too, then there’s a separate method Object.getOwnPropertySymbols  that returns an array of only symbolic keys.
     *  Also, there exist a method Reflect.ownKeys(obj)  that returns all keys.
     * 
     */

    /**
     * 
     * Object.fromEntries to transform objects
     * 
     * 
     * Sometimes we need to perform a transformation of an object to Map and back. 
     * We already have new Map(Object.entries(obj)) to make a Map from obj .
     * The syntax of Object.fromEntries does the reverse. Given an array of [key, value] pairs, it creates an object:
     * 
     * 
     * 
     */


    let prices = Object.fromEntries([
        ['banana', 1],
        ['orange', 2],
        ['meat', 4]
        ]);
        // now prices = { banana: 1, orange: 2, meat: 4 }
        alert(prices.orange); // 2

        /**
         * 
         * For example, we’d like to create a new object with double prices from the existing one. 
         * For arrays, we have .map method that allows to transform an array, but nothing like that for objects. So we can use a loop:
         * 
         * 
         */


        let prices2 = {
            banana: 1,
            orange: 2,
            meat: 4,
            };


            let doublePrices = {};
            for(let [product, price] of Object.entries(prices)) {
            doublePrices[product] = price * 2;
            }
            alert(doublePrices.meat); // 8



/// ============ Object.fromEntries . 

let prices3 = {
    banana: 1,
    orange: 2,
    meat: 4,
    };
    let doublePrices3 = Object.fromEntries(
    // convert to array, map, and then fromEntries gives back the object
    Object.entries(prices3).map(([key, value]) => [key, value * 2])
    );
    alert(doublePrices3.meat); // 8


    /***
     * 
     * It may look difficult from the first sight, but becomes easy to understand after you use it once or twice. 
     * We also can use fromEntries to get an object from Map . E.g. we have a Map of prices, but we need to pass it to a 3rd-party code that expects an object.
     * 
     * 
     */

    let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);
let obj = Object.fromEntries(map);
// now obj = { banana: 1, orange: 2, meat: 4 }
alert(obj.orange); // 2





// ================ Destructuring assignment =================

/**
 * 
 * The two most used data structures in JavaScript are Object and Array . 
 * Objects allow us to create a single entity that stores data items by key, and arrays allow us to gather data items into an ordered collection.
 * But when we pass those to a function, it may need not an object/array as a whole, but rather individual pieces. 
 * Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient. 
 * Destructuring also works great with complex functions that have a lot of parameters, default values, and so on.
 * 
 * 
 * 
 */

/***
 * 
 * **************************** Array destructuring ******************************
 * 
 * An example of how the array is destructured into variables
 * 
 */


// we have an array with the name and surname
let arr = ["Ilya", "Kantor"]
// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;
alert(firstName); // Ilya
alert(surname); // Kantor

/**
 * 
 * Now we can work with variables instead of array members. 
 * It looks great when combined with split or other array-returning methods:
 * 
 */


let [firstName1, surname2] = "Ilya Kantor".split(' ');


// “Destructuring” does not mean “destructive”. 

// Ignore elements using commas

// second element is not needed
let [firstName2, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
alert( title ); // Consul


// =================== Works with any iterable on the right-side ==============

let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);


// Assign to anything at the left-side

// We can use any “assignables” at the left side. 

let user3 = {};
[user3.name, user3.surname] = "Ilya Kantor".split(' ');
alert(user3.name); // Ilya

//============= Looping with .entries() ===========

// In the previous chapter we saw the Object.entries(obj)  method.  We can use it with destructuring to loop over keys-and-values of an object:
let user4 = {
    name: "John",
    age: 30
    };
    // loop over keys-and-values
    for (let [key, value] of Object.entries(user4)) {
    alert(`${key}:${value}`); // name:John, then age:30
    }


    // And the same for a map: 

    let user5 = new Map();
user5.set("name", "John");
user5.set("age", "30");
for (let [key, value] of user5) {
alert(`${key}:${value}`); // name:John, then age:30
}



let [ name1 , name2 , ...rest ] = [ " J u l i u s " , " C a e s a r " , " C o n s u l " , " o f t h e R o m a n R e p u b l i c "];
alert(name1); // Julius
alert(name2); // Caesar
// Note that type of `rest` is Array.
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2

//=============== Default values ==============


/**
 * 
 * If there are fewer values in the array than variables in the assignment, there will be no error. Absent values are considered undefined:
 * 
 */
let [firstName4, surname4] = [];
alert(firstName4); // undefined
alert(surname5); // undefined


// default values
let [name = "Guest", surnamed = "Anonymous"] = ["Julius"];
alert(name); // Julius (from array)
alert(surnamed); // Anonymous (default used)



/**
 * 
 * 
 * Default values can be more complex expressions or even function calls.
 *  They are evaluated only if the value is not provided. For instance, here we use the prompt function for two defaults. But it will run only for the missing one:
 * 
 */


// runs only prompt for surname
let [name3 = prompt('name?'), surname3 = prompt('surname?')] = ["Julius"];
alert(name3); // Julius (from array)
alert(surname3); // whatever prompt gets

// The destructuring assignment also works with objects. The basic syntax is:


let options = {
    title: "Menu",
    width: 100,
    height: 200
    };
    let {title1, width, height} = options;
    alert(title); // Menu
    alert(width); // 100
    alert(height); // 200