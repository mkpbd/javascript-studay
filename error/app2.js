function readData() {
    let json = '{ "age": 30 }';

    try {
        // ...
        blabla(); // error!
        } catch (e) {
        // ...
        if (e.name != 'SyntaxError') {
        throw e; // rethrow (don't know how to deal with it)
        }
        }
     }


     try {
        readData();
        } catch (e) {
        alert( "External catch got: " + e ); // caught it!
        }
/**
 * Here readData only knows how to handle SyntaxError , while the outer try..catch knows how to handle everything.
 * 
 */

/**
 * 
 * try…catch…finall
 * 
 * after try , if there were no errors, after catch , if there were errors.
 * 
 */

try {
    alert( 'try' );
    if (confirm('Make an error?')) BAD_CODE();
    } catch (e) {
    alert( 'catch' );
    } finally {
    alert( 'finally' );
    }


    let num = +prompt("Enter a positive integer number?", 35)
let diff, result;
function fib(n) {
if (n < 0 || Math.trunc(n) != n) {
throw new Error("Must not be negative, and also an integer.");
}
return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
let start = Date.now();
try {
result = fib(num);
} catch (e) {
result = 0;
} finally {
diff = Date.now() - start;
}

alert(result || "error occurred");
alert( `execution took ${diff}ms` );

//=============== finally and return =============================

function func() {
    try {
    return 1;
    } catch (e) {
    /* ... */
    } finally {
    alert( 'finally' );
    }
    }
    alert( func() ); // first works alert from finally, and then this one   

    //=== Environment-specific 

    window.onerror = function(message, url, line, col, error) {
        // ...
        };