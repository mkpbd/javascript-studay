/**
 * 
 * A proxy wraps another object and intercepts operations, like reading/writing properties and others, optionally handling them on its own, or transparently allowing the object to handle them. 
 * Proxies are used in many libraries and some browser frameworks. We’ll see many practical applications in this chapter.
 * 
 * 
 */


let proxy = new Proxy(target, handler)

/**
 * 
 * target – is an object to wrap, can be anything, including functions.
 * handler – an object with “traps”: methods that intercept operations.,
 *  e.g. get for reading a property, set for writing a property, etc.
 * 
 * For operations on proxy , if there’s a corresponding trap in handler , then it runs, and the proxy has a chance to handle it, otherwise the operation is performed on target
 * 
 * 
 */
let target = {};
let proxy1 = new Proxy(target, {}); // empty handler

proxy.test = 5; // writing to proxy (1)
alert(target.test); // 5, the property appeared in target!
alert(proxy.test); // 5, we can read it from proxy too (2)
for(let key in proxy) alert(key); // test, iteration works (3)

/**
 * 
 * As there are no traps, all operations on proxy are forwarded to target .
 * 
 * A writing operation proxy.test= sets the value on target .
 * 
 * A reading operation proxy.test returns the value from target .
 * 
 * Iteration over proxy returns values from target
 * As we can see, without any traps, proxy is a transparent wrapper around target
 * 
 * There’s a list of internal object operations in the Proxy specification  . A proxy can intercept any of these, we just need to add a handler method.
 * 
 */


/**
 * 
 * 
 * Internal Method is the specification-specific name for the operation. For example, [[Get]] is the name of the internal, specification-only method of reading a property.
 *  The specification describes how this is done at the very lowest level.
 * 
 * 
 * Handler Method is a method name that we should add to proxy handler to trap the operation and perform custom actions.
 * 
 * [[Get]] get reading a property
 * 
 * [[Set]] set writing to a property
 * [[HasProperty]] has in operator
 * [[Delete]] deleteProperty delete operator
 * [[Call]] apply function call
 * [[GetPrototypeOf]] getPrototypeOf Object.getPrototypeOf 
 * [[Construct]] construct new operator
 * [[SetPrototypeOf]] setPrototypeOf Object.setPrototypeOf
 * [[IsExtensible]] isExtensible Object.isExtensible 
 * [[PreventExtensions]] preventExtensions Object.preventExtensions
 * [[GetOwnProperty]] getOwnPropertyDescriptor Object.getOwnPropertyDescriptor
 * [[DefineOwnProperty]] defineProperty Object.defineProperty  , Object.defineProperties
 * 
 * [[OwnPropertyKeys]] ownKeys      Object.keys  , Object.getOwnPropertyNames  ,Object.getOwnPropertySymbols  , iteration keys
 * 
 * 
 * 
 */

//================== Invariants ==============

// JavaScript enforces some invariants – conditions that must be fulfilled by internal methods and traps.

/**
 * 
 * Most of them are for return values:
 * [[Set]] must return true if the value was written successfully, otherwise false .
 * [[Delete]] must return true if the value was deleted successfully, otherwise false .
 * 
 * *********************** There are some other invariants, like:*********************
 * [[GetPrototypeOf]] , applied to the proxy object must return the same value as
 * 
 * [[GetPrototypeOf]] applied to the proxy object’s target object.
 * 
 * In other words, reading prototype of a proxy must always return the prototype of the target object.
 *  The getPrototypeOf trap may intercept this operation, but it must follow this rule, not do something crazy.
 * 
 * 
 */


/**
 * 
 * 
 ****************  Default value with “get” trap *************
 * 
 * The most common traps are for reading/writing properties
 * To intercept the reading, the handler should have a method get(target, property, receiver) .
 * 
 * ******************* It triggers when a property is read:***************
 * target – is the target object, the one passed as the first argument to new Proxy
 * 
 * property – property name,
 * 
 * receiver – if the property is a getter, then receiver is the object that’s going to be used as this in that code. Usually that’s the proxy object itself (or an object that inherits from it, if we inherit from proxy)
 * 
 * 
 */

 let numbers = [0, 1, 2];
numbers = new Proxy(numbers, {
    get(target, prop) {
    if (prop in target) {
    return target[prop];
    } else {
    return 0; // default value
    }
}
});

alert( numbers[1] ); // 1
alert( numbers[123] ); // 0 (no such value)

let dictionary = {
    'Hello': 'Hola',
    'Bye': 'Adiós'
    };
    alert( dictionary['Hello'] ); // Hola
    alert( dictionary['Welcome'] ); // undefined


    let dictionary2 = {
        'Hello': 'Hola',
        'Bye': 'Adiós'
        };
        dictionary2 = new Proxy(dictionary2, {
        get(target, phrase) { // intercept reading a property from dictionary
        if (phrase in target) { // if we have it in the dictionary
        return target[phrase]; // return the translation
        } else {
        // otherwise, return the non-translated phrase
        return phrase;
        }
        }
    });
    // Look up arbitrary phrases in the dictionary!
    // At worst, they are not translated.
    alert( dictionary['Hello'] ); // Hola
    alert( dictionary['Welcome to Proxy']); // Welcome to Proxy (no translation)
  //  dictionary = new Proxy(dictionary, ...);
//numbers = new Proxy(numbers, ...);




//********* Validation with “set” trap */

/**
 * 
 * 
 * The set trap triggers when a property is written: set(target, property, value, receiver)
 * target – is the target object, the one passed as the first argument to new Proxy , 
 * property – property name,
 * value – property value, 
 * receiver – same as in get trap, only matters if the property is a setter.
 * 
 */

let numbers3 = [];
numbers3 = new Proxy(numbers3, { // (*)
set(target, prop, val) { // to intercept property writing
if (typeof val == 'number') {
target[prop] = val;
return true;
} else {
return false;
}
}
});
numbers3.push(1);
numbers3.push(2);

alert("Length is: " + numbers.length); // 2
numbers.push("test"); // TypeError ('set' on proxy returned false)
alert("This line is never reached (error in the line above)");


/**
 * 
 * Please note: the built-in functionality of arrays is still working! The length property autoincreases
when values are added. Our proxy doesn’t break anything.
Also, we don’t have to override value-adding array methods like push and unshift , and so
on! Internally, they use [[Set]] operation, that’s intercepted by the proxy.
So the code is clean and concise.
 * 
 */


/**
 *  
 * Protected properties with “deleteProperty” and “ownKeys”
 * 
 * There’s a widespread convention that properties and methods prefixed by an underscore _ are internal. They shouldn’t be accessible from outside the object.
 * 
 * 
 */
let user = {
    name: "John",
    _password: "secret"
    };
    alert(user._password); // secret

    