// Promises, async / await

// introduction : callbacks

// Many actions in JavaScript are asynchronous.

function loadScript(src) {
  let script = document.createElement("script");
  script.src = src;
  document.head.append(script);
}

// The purpose of the function is to load a new script.
// When it adds the <script src="…"> to the document, the browser loads and executes it.

// loads and executes the script
loadScript("./js/script.js");
// the code below loadScript doesn't wait for the script loading to finish

/**
 * The function is called “asynchronously,” because the action (script loading) finishes not now, but later.
 *
 * The call initiates the script loading, then the execution continues.
 * While the script is loading, the code below may finish executing, and if the loading takes time, other scripts may run meanwhile too.
 *
 */

function loadScript2(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

function newFunction() {
  console.log("New Function  ");
}
loadScript2("/js/script.js", function () {
  // the callback runs after the script is loaded
  newFunction(); // so now it works
  // ...
});

/**
 * That’s the idea: the second argument is a function (usually anonymous) that runs when the action is completed.
 *  Here’s a runnable example with a real script:
 */

function loadScript3(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript3(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js",
  (script) => {
    //alert(`Cool, the ${script.src} is loaded`);
    //alert( _ ); // function declared in the loaded script
  }
);

/**
 *
 * That’s called a “callback-based” style of asynchronous programming.
 *  A function that does something asynchronously should provide a callback argument where we put the function to run after it’s complete.
 * Here we did it in loadScript , but of course, it’s a general approach
 *
 *
 */

//======================  Callback in Callback =================

/**
 *
 * How can we load two scripts sequentially: the first one, and then the second one after it?
 * The natural solution would be to put the second loadScript call inside the callback, like this:
 *
 */

loadScript3("/js/script.js", function (script) {
  // alert(`Cool, the ${script.src} is loaded, let's load one more`);
  loadScript3("/js/script2.js", function (script) {
    //alert(`Cool, the second script is loaded`);
  });
});

loadScript3("/js/script.js", function (script) {
  // alert(`Cool, the ${script.src} is loaded, let's load one more`);
  loadScript3("/js/script2.js", function (script) {
    // alert(`Cool, the second script is loaded`);
  });

  loadScript3("/js/script3.js", function (script) {});
});
