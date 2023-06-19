/// Promise api
// There are 5 static methods in the Promise class. We’ll quickly cover their use cases here 

// Promise.resolve 

let promise = Promise.resolve(value);

// Returns a resolved promise with the given value .

let promise2 = new Promise(resolve => resolve(value));
//The method is used when we already have a value, but would like to have it “wrapped” into a promise

function loadCached(url) {
    let cache = loadCached.cache || (loadCached.cache = new Map());
    if (cache.has(url)) {
    return Promise.resolve(cache.get(url)); // (*)
    }
    return fetch(url)
    .then(response => response.text())
    .then(text => {
    cache.set(url,text);
    return text;
    });
    }

    //========= Promise.reject 
    let promise3 = Promise.reject(error);
    let promise4 = new Promise((resolve, reject) => reject(error));

    // Promise.all

    /**
     * 
     * Let’s say we want to run many promises to execute in parallel, and wait till all of them are ready. For instance, download several URLs in parallel and process the content when all are done. That’s what Promise.all is for.
     * 
     */

    //let promise = Promise.all([...promises...]);

    Promise.all([
        new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
        new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
        new Promise(resolve => setTimeout(() => resolve(3), 1000)) // 3
        ]).then(alert); // 1,2,3 when promises are ready: each promise contributes an array member


        let urls = [
            'https://api.github.com/users/iliakan',
            'https://api.github.com/users/remy',
            'https://api.github.com/users/jeresig'
            ];
            // map every url to the promise of the fetch
            let requests = urls.map(url => fetch(url));
            // Promise.all waits until all jobs are resolved
            Promise.all(requests)
            .then(responses => responses.forEach(
            response => alert(`${response.url}: ${response.status}`)
            ));


            let names = ['iliakan', 'remy', 'jeresig'];
let requests1 = names.map(name => fetch(`https://api.github.com/users/${name}`));
Promise.all(requests1)
.then(responses => {
// all responses are ready, we can show HTTP status codes
for(let response of responses) {
alert(`${response.url}: ${response.status}`); // shows 200 for every url
}
return responses;
})
// map array of responses into array of response.json() to read their content
.then(responses => Promise.all(responses.map(r => r.json())))
// all JSON answers are parsed: "users" is the array of them
.then(users => users.forEach(user => alert(user.name)));


/**
 * 
 * If any of the promises is rejected, the promise returned by Promise.all immediately rejects with that error.
 * 
 */

Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
    ]).catch(alert); // Error: Whoops!

    /**
     * 
     * In case of an error, other promises are ignored
     * 
     * Promise.all(iterable) allows non-promise “regular” values in iterable Normally, Promise.all(...) accepts an iterable (in most cases an array) of promises.
     * But if any of those objects is not a promise, it’s wrapped in Promise.resolve .
     * 
     */

    Promise.all([
        new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000)
        }),
        2, // treated as Promise.resolve(2)
        3 // treated as Promise.resolve(3)
        ]).then(alert); // 1, 2, 3



        //========= Promise.allSettled =======

        Promise.all([
            fetch('/template.html'),
            fetch('/style.css'),
            fetch('/data.json')
            ]).then(render); // render method needs them all



            let urls1 = [
                'https://api.github.com/users/iliakan',
                'https://api.github.com/users/remy',
                'https://no-such-url'
                ];

                Promise.allSettled(urls1.map(url => fetch(url)))
.then(results => { // (*)
results.forEach((result, num) => {
if (result.status == "fulfilled") {
alert(`${urls[num]}: ${result.value.status}`);
}
if (result.status == "rejected") {
alert(`${urls[num]}: ${result.reason}`);
}
});
});

//=========== if the browser doesn’t support Promise.allSettled , it’s easy to polyfill ================
if(!Promise.allSettled) {
    Promise.allSettled = function(promises) {
    return Promise.all(promises.map(p => Promise.resolve(p).then(v => ({
    state: 'fulfilled',
    value: v,
    }), r => ({
    state: 'rejected',
    reason: r,
    }))));
    };
    }


    //============ Promise.race ===========

    /**
     * Similar to Promise.all , it takes an iterable of promises, but instead of waiting for all of them to finish, it waits for the first result (or error), and goes on with it.
     * 
     */

    let promise6 = Promise.race(iterable);

    Promise.race([
        new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
        new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
        ]).then(alert); // 1


        /**
         * 
         * There are 5 static methods of Promise class:
1. Promise.resolve(value) – makes a resolved promise with the given value.
2. Promise.reject(error) – makes a rejected promise with the given error.
3. Promise.all(promises) – waits for all promises to resolve and returns an array of their
results. If any of the given promises rejects, then it becomes the error of Promise.all ,
and all other results are ignored.
4. Promise.allSettled(promises) (a new method) – waits for all promises to resolve or
reject and returns an array of their results as object with:
state : 'fulfilled' or 'rejected'
value (if fulfilled) or reason (if rejected).
5. Promise.race(promises) – waits for the first promise to settle, and its result/error
becomes the outcome.
Of these five, Promise.all is probably the most common in practice.
         * 
         */