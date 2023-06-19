//=============== Bigger example: fetch =====

// In frontend programming promises are often used for network requests. So let’s see an extended example of that
// We’ll use the fetch method to load the information about the user from the remote server. It has
// a lot of optional parameters covered in separate chapters, but the basic syntax is quite simple:
let promise = fetch(url);

fetch("/article/promise-chaining/user.json")
  // .then below runs when the remote server responds
  .then(function (response) {
    // response.text() returns a new promise that resolves with the full response text
    // when we finish downloading it
    return response.text();
  })
  .then(function (text) {
    // ...and here's the content of the remote file
    alert(text); // {"name": "iliakan", isAdmin: true}
  });

// same as above, but response.json() parses the remote content as JSON
fetch("/article/promise-chaining/user.json")
  .then((response) => response.json())
  .then((user) => alert(user.name)); // iliakan

// Make a request for user.json
fetch("/article/promise-chaining/user.json")
  // Load it as json
  .then((response) => response.json())
  // Make a request to GitHub
  .then((user) => fetch(`https://api.github.com/users/${user.name}`))
  // Load the response as json
  .then((response) => response.json())
  // Show the avatar image (githubUser.avatar_url) for 3 seconds (maybe animate it)
  .then((githubUser) => {
    let img = document.createElement("img");
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
    setTimeout(() => img.remove(), 3000); // (*)
  });

fetch("/article/promise-chaining/user.json")
  .then((response) => response.json())
  .then((user) => fetch(`https://api.github.com/users/${user.name}`))
  .then((response) => response.json())
  .then(
    (githubUser) =>
      new Promise(function (resolve, reject) {
        let img = document.createElement("img");
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);
        setTimeout(() => {
          img.remove();
          resolve(githubUser);
        }, 3000);
      })
  )
  // triggers after 3 seconds
  .then((githubUser) => alert(`Finished showing ${githubUser.name}`));

// Finally, we can split the code into reusable functions:

function loadJson(url) {
  return fetch(url).then((response) => response.json());
}
function loadGithubUser(name) {
  return fetch(`https://api.github.com/users/${name}`).then((response) =>
    response.json()
  );
}
function showAvatar(githubUser) {
  return new Promise(function (resolve, reject) {
    let img = document.createElement("img");
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
    setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 3000);
  });
}
// Use them:
loadJson("/article/promise-chaining/user.json")
  .then((user) => loadGithubUser(user.name))
  .then(showAvatar)
  .then((githubUser) => alert(`Finished showing ${githubUser.name}`));
// ...

//++++++++====== Error handling with promises

fetch("https://no-such-server.blabla") // rejects
  .then((response) => response.json())
  .catch((err) => alert(err)); // TypeError: failed to fetch (the text may vary)

fetch("/") // fetch works fine now, the server responds with the HTML page
  .then((response) => response.json()) // rejects: the page is HTML, not a valid json
  .catch((err) => alert(err)); // SyntaxError: Unexpected token < in JSON at position 0

fetch("/article/promise-chaining/user.json")
  .then((response) => response.json())
  .then((user) => fetch(`https://api.github.com/users/${user.name}`))
  .then((response) => response.json())
  .then(
    (githubUser) =>
      new Promise((resolve, reject) => {
        let img = document.createElement("img");
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);
        setTimeout(() => {
          img.remove();
          resolve(githubUser);
        }, 3000);
      })
  )
  .catch((error) => alert(error.message));

//========= Implicit try…catch ====================

new Promise((resolve, reject) => {
  throw new Error("Whoops!");
}).catch(alert); // Error: Whoops!

new Promise((resolve, reject) => {
  reject(new Error("Whoops!"));
}).catch(alert); // Error: Whoops!

new Promise((resolve, reject) => {
  resolve("ok");
})
  .then((result) => {
    throw new Error("Whoops!"); // rejects the promise
  })
  .catch(alert); // Error: Whoops!

new Promise((resolve, reject) => {
  resolve("ok");
})
  .then((result) => {
    blabla(); // no such function
  })
  .catch(alert); // ReferenceError: blabla is not defined

//========================= Rethrowing ==========4

/**
     * 
     * As we already noticed, .catch behaves like try..catch . We may have as many .then
handlers as we want, and then use a single .catch at the end to handle errors in all of them.
In a regular try..catch we can analyze the error and maybe rethrow it if can’t handle. The
same thing is possible for promises.
If we throw inside .catch , then the control goes to the next closest error handler. And if we
handle the error and finish normally, then it continues to the closest successful .then handler.
In the example below the .catch successfully handles the error:
     * 
     */
// the execution: catch -> then
new Promise((resolve, reject) => {
  throw new Error("Whoops!");
})
  .catch(function (error) {
    alert("The error is handled, continue normally");
  })
  .then(() => alert("Next successful handler runs"));

// the execution: catch -> catch -> then
new Promise((resolve, reject) => {
  throw new Error("Whoops!");
})
  .catch(function (error) {
    // (*)
    if (error instanceof URIError) {
      // handle it
    } else {
      alert("Can't handle such error");
      throw error; // throwing this or another error jumps to the next catch
    }
  })
  .then(function () {
    /* never runs here */
  })
  .catch((error) => {
    // (**)
    alert(`The unknown error has occurred: ${error}`);
    // don't return anything => execution goes the normal way
  });

//==================== Fetch error handling example =============

/**
 *
 * The promise returned by fetch  rejects when it’s impossible to make a request.
 * For instance, a remote server is not available, or the URL is malformed.
 * But if the remote server responds with error 404, or even error 500, then it’s considered a valid response.
 *
 *
 */

fetch("no-such-user.json") // (*)
  .then((response) => response.json())
  .then((user) => fetch(`https://api.github.com/users/${user.name}`)) // (**)
  .then((response) => response.json())
  .catch(alert); // SyntaxError: Unexpected token < in JSON at position 0

class HttpError extends Error {
  // (1)
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}
function loadJson(url) {
  // (2)
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new HttpError(response);
    }
  });
}

loadJson("no-such-user.json") // (3)
  .catch(alert); // HttpError: 404 for .../no-such-user.json

function demoGithubUser() {
  let name = prompt("Enter a name?", "iliakan");
  return loadJson(`https://api.github.com/users/${name}`)
    .then((user) => {
      alert(`Full name: ${user.name}.`);
      return user;
    })
    .catch((err) => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
        return demoGithubUser();
      } else {
        throw err; // (*)
      }
    });
}
demoGithubUser();

//============== Unhandled rejections ==============

new Promise(function () {
  noSuchFunction(); // Error here (no such function)
}).then(() => {
  // successful promise handlers, one or more
}); // without .catch at the end!

window.addEventListener("unhandledrejection", function (event) {
  // the event object has two special properties:
  alert(event.promise); // [object Promise] - the promise that generated the error
  alert(event.reason); // Error: Whoops! - the unhandled error object
});
new Promise(function () {
  throw new Error("Whoops!");
}); // no catch to handle the error

function demoGithubUser() {
  let name = prompt("Enter a name?", "iliakan");
  document.body.style.opacity = 0.3; // (1) start the indication
  return loadJson(`https://api.github.com/users/${name}`)
    .finally(() => {
      // (2) stop the indication
      document.body.style.opacity = "";
      return new Promise((resolve) => setTimeout(resolve)); // (*)
    })
    .then((user) => {
      alert(`Full name: ${user.name}.`);
      return user;
    })
    .catch((err) => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
        return demoGithubUser();
      } else {
        throw err;
      }
    });
}
demoGithubUser();
