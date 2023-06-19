/**
 * 
 * We’ll need the traps:
get to throw an error when reading,
set to throw an error when writing,
deleteProperty to throw an error when deleting,
ownKeys to skip properties starting with _ when iterating over an object or using
Object.keys()
 * 
 */

let user = {
    name: "John",
    _password: "***"
};
user = new Proxy(user, {
get(target, prop) {
if (prop.startsWith('_')) {
throw new Error("Access denied");
}
let value = target[prop];
return (typeof value === 'function') ? value.bind(target) : value; // (*)
},set(target, prop, val) { // to intercept property writing
    if (prop.startsWith('_')) {
    throw new Error("Access denied");
    } else {
    target[prop] = val;
    }
    },
    deleteProperty(target, prop) { // to intercept property deletion
        if (prop.startsWith('_')) {
        throw new Error("Access denied");
        } else {
        delete target[prop];
        return true;
        }
        },
        ownKeys(target) { // to intercept property list
        return Object.keys(target).filter(key => !key.startsWith('_'));
        }
        });

        // "get" doesn't allow to read _password
try {
    alert(user._password); // Error: Access denied
    } catch(e) { alert(e.message); }
    // "set" doesn't allow to write _password
    try {
    user._password = "test"; // Error: Access denied
    } catch(e) { alert(e.message); }
    // "deleteProperty" doesn't allow to delete _password
    try {
    delete user._password; // Error: Access denied
    } catch(e) { alert(e.message); }
    // "ownKeys" filters out _password
    for(let key in user) alert(key); // name

    /// Please note the important detail in get trap, in the line (*) :

    let range = {
        start: 1,
        end: 10
        };
        range = new Proxy(range, {
        has(target, prop) {
        return prop >= target.start && prop <= target.end
        }
        });
        alert(5 in range); // true
        alert(50 in range); // false


        //====== Wrapping functions: “apply” ========

        /**
         * 
         * The apply(target, thisArg, args) trap handles calling a proxy as function:
         * target is the target object,
         * thisArg is the value of this .
         * args is a list of arguments.
         * 
         */

// no proxies, just a function wrapper
function delay(f, ms) {
    // return a wrapper that passes the call to f after the timeout
    return function() { // (*)
    setTimeout(() => f.apply(this, arguments), ms);
    };
    }
    function sayHi(user) {
    alert(`Hello, ${user}!`);
    }
    // now calls to sayHi will be delayed for 3 seconds
    sayHi = delay(sayHi, 3000);
    sayHi("John"); // Hello, John! (after 3 seconds)


    /**
     * 
     * 
     * But a wrapper function does not forward property read/write operations or anything else. 
     * So if we have a property on the original function, we can’t access it after wrapping:
     * 
     */
    function delay(f, ms) {
        return function() {
        setTimeout(() => f.apply(this, arguments), ms);
        };
        }
        function sayHi(user) {
        alert(`Hello, ${user}!`);
        }
        alert(sayHi.length); // 1 (function length is the arguments count)
        sayHi = delay(sayHi, 3000);
        alert(sayHi.length); // 0 (wrapper has no arguments)

        /**
         * 
         * Proxy is much more powerful, as it forwards everything to the target object. 
         * Let’s use Proxy instead of a wrapping function:
         * 
         */
        function delay(f, ms) {
            return new Proxy(f, {
            apply(target, thisArg, args) {
            setTimeout(() => target.apply(thisArg, args), ms);
            }
            });
            }
            function sayHi(user) {
            alert(`Hello, ${user}!`);
            }
            sayHi = delay(sayHi, 3000);
            alert(sayHi.length); // 1 (*) proxy forwards "get length" operation to the target
            sayHi("John"); // Hello, John! (after 3 seconds)