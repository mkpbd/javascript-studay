// Promise 

/**
 * Promise JS is like a really unreliable boyfriend. It always promises to be there for you, but it's always late. And sometimes, it just doesn't show up at all.
 * Here's a more technical explanation:
 * A promise in JavaScript is a way to represent the outcome of an asynchronous operation. It can be either fulfilled (the operation succeeded) or rejected (the operation failed). Promises are used to handle asynchronous code in a more predictable and elegant way.
 * Here's a funny way to think about promises:
 * A promise is like a fart. You never know when it's going to happen, and you never know what it's going to smell like.
 * Here are some other funny ways to explain promise JS:
 * Promise JS is like a politician. It always promises to deliver, but it's not always clear what it's actually going to deliver.
 * Promise JS is like a blind date. You never know what you're going to get.
 * Promise JS is like a box of chocolates. You never know what you're going to get, but it's always delicious.
 * 
 */

let promise = new Promise(function(resolve, reject) {
    // executor (the producing code, "singer")
    });


    /**
     * The function passed to new Promise is called the executor.
     *  When the promise is created, this executor function runs automatically.
     *  It contains the producing code, that should eventually produce a result. In terms of the analogy above: the executor is the “singer”.
     * 
     * The resulting promise object has internal properties:
     * 
     * state — initially “pending”, then changes to either “fulfilled” or “rejected”,
     * result — an arbitrary value, initially undefined
     * 
     * 
     * resolve(value) — to indicate that the job finished successfully:
     * sets state to "fulfilled" ,
     * sets result to value .
     * reject(error) — to indicate that an error occurred:
     * sets state to "rejected" , 
     * sets result to error .
     * 
     */


    let promise2 = new Promise(function(resolve, reject) {
        // the function is executed automatically when the promise is constructed
        // after 1 second signal that the job is done with the result "done"
        setTimeout(() => resolve("done"), 1000);
        });


// We can see two things by running the code above: 

// 1. The executor is called automatically and immediately (by the new Promise ). 

// The executor receives two arguments: resolve and reject — these functions are predefined by the JavaScript engine.
// So we don’t need to create them. We only should call one of them when ready.

let promise3 = new Promise(function(resolve, reject) {
    // after 1 second signal that the job is finished with an error
    setTimeout(() => reject(new Error("Whoops!")), 1000);
    });

    //=========== There can be only a single result or an error 
    // The executor should call only one resolve or one reject . The promise’s state change is final.
    let promise4 = new Promise(function(resolve, reject) {
        resolve("done");
        reject(new Error("…")); // ignored
        setTimeout(() => resolve("…")); // ignored
        });


        //============= Immediately calling resolve / reject ====================

        let promise5 = new Promise(function(resolve, reject) {
            // not taking our time to do the job
            resolve(123); // immediately give the result: 123
            });

            //=========== The state and result are internal ==========

            /***
             * 
             * The properties state and result of the Promise object are internal. 
             * We can’t directly access them from our “consuming code”. We can use the methods
             *  .then / .catch / .finally for that. They are described below.
             * 
             */

// =================== Consumers: then, catch, finally ===============

/**
 * A Promise object serves as a link between the executor (the “producing code” or “singer”) and the consuming functions (the “fans”), which will receive the result or error.
 *  Consuming functions can be registered (subscribed) using methods .then , .catch and .finally
 * 
 */

//=================== The most important, fundamental one is .then . ===========
promise.then(
    function(result) { /* handle a successful result */ },
    function(error) { /* handle an error */ }
    );


    // resolve runs the first function in .then
promise.then(
    result => alert(result), // shows "done!" after 1 second
    error => alert(error) // doesn't run
    );

    // reject runs the second function in .then
promise.then(
    result => alert(result), // doesn't run
    error => alert(error) // shows "Error: Whoops!" after 1 second
    );

    promise.then(alert); // shows "done!" after 1 second

    // .catch(f) is the same as promise.then(null, f)
promise.catch(alert); // shows "Error: Whoops!" after 1 second


// finally, then, catch the error

new Promise((resolve, reject) => {
    setTimeout(() => resolve("result"), 2000)
    })
    .finally(() => alert("Promise ready"))
    .then(result => alert(result)); // <-- .then handles the result


    new Promise((resolve, reject) => {
        throw new Error("error");
        })
        .finally(() => alert("Promise ready"))
        .catch(err => alert(err)); // <-- .catch handles the error object


        //=============== On settled promises handlers runs immediately ================

        // an immediately resolved promise
let promise6 = new Promise(resolve => resolve("done!"));
promise6.then(alert); // done! (shows up right now)