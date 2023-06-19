//========== Async/await 

// There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. It’s surprisingly easy to understand and use.

// Async functions 

async function f() {
    return 1;
    }

    f().then(alert); // 1

    async function ff() {
        return Promise.resolve(1);
        }
        ff().then(alert); // 1


        /**
         * So, async ensures that the function returns a promise, and wraps non-promises in it. Simple
enough, right? But not only that. There’s another keyword, await , that works only inside
async functions, and it’s pretty cool.
         * 
         */


// works only inside async functions
let value = await promise

//==== The keyword await makes JavaScript wait until that promise settles and returns its result. ===

async function f1() {
    let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
    });
    let result = await promise; // wait till the promise resolves (*)
    alert(result); // "done!"
    }
    f1();


    /**
     * 
     * Let’s take the showAvatar() example from the chapter Promises chaining and rewrite it
using async/await :
1. We’ll need to replace .then calls with await .
2. Also we should make the function async for them to work.
     * 
     */

async function showAvatar() {
    // read our JSON
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();
    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();
    // show the avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
    // wait 3 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
    img.remove();
    return githubUser;
    }
    showAvatar();


    //=============== await won’t work in the top-level code=========
    // syntax error in top-level code
let response = await fetch('/article/promise-chaining/user.json');
let user = await response.json();

//========= We can wrap it into an anonymous async function, like this: ===

(async () => {
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();
   // ...
    })();


    class Thenable {
        constructor(num) {
        this.num = num;
        }
        then(resolve, reject) {
        alert(resolve);
        // resolve with this.num*2 after 1000ms
        setTimeout(() => resolve(this.num * 2), 1000); // (*)
        }
        };
        async function f11() {
        // waits for 1 second, then result becomes 2
        let result = await new Thenable(1);
        alert(result);
        }
        f11();


        /// Error handling

        async function f() {
            try {
            let response = await fetch('http://no-such-url');
            } catch(err) {
            alert(err); // TypeError: failed to fetch
            }
            }
            f();


            async function f3() {
                try {
                let response = await fetch('/no-user-here');
                let user = await response.json();
                } catch(err) {
                // catches errors both in fetch and response.json
                alert(err);
                }
                }
                f3();

                //============ Rewrite using async/await
                function loadJson(url) {
                    return fetch(url)
                    .then(response => {
                    if (response.status == 200) {
                    return response.json();
                    }
                    else {
                        throw new Error(response.status);
                        }
                        })
                        }
                        loadJson('no-such-user.json') // (3)
                        .catch(alert); // Error: 404

//================ Rewrite "rethrow" with async/await =========

class HttpError extends Error {
    constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
    }
    }
    function loadJson(url) {
    return fetch(url)
    .then(response => {
    if (response.status == 200) {
    return response.json();
    } else {
    throw new HttpError(response);
    }
    })
    }

    // Ask for a user name until github returns a valid user
function demoGithubUser() {
    let name = prompt("Enter a name?", "iliakan");
    return loadJson(`https://api.github.com/users/${name}`)
    .then(user => {
    alert(`Full name: ${user.name}.`);
    return user;
    })
    .catch(err => {
    if (err instanceof HttpError && err.response.status == 404) {
    alert("No such user, please reenter.");
    return demoGithubUser();
    } else {
    throw err;
    }
    });
    }
    demoGithubUser();