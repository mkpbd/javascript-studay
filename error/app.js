

// Error handling Error handling, "try..catch"

/**
 * 
 * No matter how great we are at programming, sometimes our scripts have errors. 
 * They may occur because of our mistakes, an unexpected user input, an erroneous server response and for a thousand of other reasons.
 * Usually, a script “dies” (immediately stops) in case of an error, printing it to console. 
 * But there’s a syntax construct try..catch that allows to “catch” errors and, instead of dying, do something more reasonable.
 * 
 */

/**
 * The “try…catch” syntax
 * The try..catch construct has two main blocks: try , and then catch :
 */


    try {
        // code...
    } catch (err) {
        // error handling
    }

    /**
     * 
     * 1. First, the code in try {...} is executed. 
     * 2. If there were no errors, then catch(err) is ignored: the execution reaches the end of
     * try and then jumps over catch .
     * 3 If an error occurs, then try execution is stopped, and the control flows to the beginning of catch(err) . The err variable (can use any name for it) contains an error object with details about what’s happened.
     * 
     * 
     */


    try {
        alert('Start of try runs'); // (1) <--
        // ...no errors here
        alert('End of try runs'); // (2) <--
        } catch(err) {
        alert('Catch is ignored, because there are no errors'); // (3)
        }
        alert("...Then the execution continues");



        try {
            alert('Start of try runs'); // (1) <--
            lalala; // error, variable is not defined!
            alert('End of try (never reached)'); // (2)
            } catch(err) {
            alert(`Error has occurred!`); // (3) <--
            }
            alert("...Then the execution continues");


            /**
             * 
             * try..catch only works for runtime errors For try..catch to work, the code must be runnable. In other words, it should be valid JavaScript.
             * It won’t work if the code is syntactically wrong, for instance it has unmatched curly braces
             * 
             */


            /// try..catch works synchronously 

            // If an exception happens in “scheduled” code, like in setTimeout , then try..catch won’t catch it:

            try {
                setTimeout(function() {
                noSuchVariable; // script will die here
                }, 1000);
                } catch (e) {
                alert( "won't work" );
                }


                setTimeout(function() {
                    try {
                    noSuchVariable; // try..catch handles the error!
                    } catch {
                    alert( "error is caught here!" );
                    }
                    }, 1000);

 //==================== Error object ===============

 // When an error occurs, JavaScript generates an object containing the details about it. The object is then passed as an argument to catch :

 try {
    // ...
    } catch(err) { // <-- the "error object", could use another word instead of err
    // ...
    }
// For all built-in errors, the error object inside catch block has two main properties: 


try {
    lalala; // error, variable is not defined!
    } catch(err) {
    alert(err.name); // ReferenceError
    alert(err.message); // lalala is not defined
    alert(err.stack); // ReferenceError: lalala is not defined at ...
    // Can also show an error as a whole
    // The error is converted to string as "name: message"
    alert(err); // ReferenceError: lalala is not defined
    }

    // If json is malformed, JSON.parse generates an error, so the script “dies”. 

    let json = "{ bad json }";
    try {
    let user = JSON.parse(json); // <-- when an error occurs...
    alert( user.name ); // doesn't work
    } catch (e) {
    // ...the execution jumps here
    alert( "Our apologies, the data has errors, we'll try to request it one more time." );
    alert( e.name );
    alert( e.message );
    }

    //  ============== Throwing our own errors =============================

    let json2 = '{ "age": 30 }'; // incomplete data
try {
let user2 = JSON.parse(json); // <-- no errors
alert( user2.name ); // no name!
} catch (e) {
alert( "doesn't execute" );
}

//========= “Throw” operator =========================  

// The throw operator generates an error. 

//throw <error object>

let error1 = new Error(message);
// or
let error2 = new SyntaxError(message);
let error3 = new ReferenceError(message);

let error4 = new Error("Things happen o_O");
alert(error4.name); // Error
alert(error4.message); // Things happen o_O

// Let’s see what kind of error JSON.parse generates: 


try {
    JSON.parse("{ bad json o_O }");
    } catch(e) {
    alert(e.name); // SyntaxError
    alert(e.message); // Unexpected token o in JSON at position 0
    }



    let json3 = '{ "age": 30 }'; // incomplete data
try {
let user = JSON.parse(json3); // <-- no errors
if (!user.name) {
throw new SyntaxError("Incomplete data: no name"); // (*)
}
alert( user.name );
} catch(e) {
alert( "JSON Error: " + e.message ); // JSON Error: Incomplete data: no name
}


// Rethrowing 

try {
    user = JSON.parse(json); // <-- forgot to put "let" before user
    // ...
    } catch(err) {
    alert("JSON Error: " + err); // JSON Error: ReferenceError: user is not defined
    // (no JSON Error actually)
    }


    let json4 = '{ "age": 30 }'; // incomplete data
try {
let user = JSON.parse(json4);
if (!user.name) {
throw new SyntaxError("Incomplete data: no name");
}
blabla(); // unexpected error
alert( user.name );
} catch(e) {
if (e.name == "SyntaxError") {
alert( "JSON Error: " + e.message );
} else {
throw e; // rethrow (*)
}
}