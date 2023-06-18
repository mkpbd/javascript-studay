//========== Global object =============

// The global object provides variables and functions that are available anywhere. Mostly, the ones that are built into the language or the environment.

// there is two type globab object in javaScripts   window,  globalThis

alert("Hello");
// the same as
window.alert("Hello");

let gLet = 5;
alert(window.gLet); // undefined (doesn't become a property of the global object)

// make current user information global, to let all scripts access it
window.currentUser = {
  name: "John",
};

// somewhere else in code
alert(currentUser.name); // John
// or, if we have a local variable with the name "currentUser"
// get it from window explicitly (safe!)
alert(window.currentUser.name); // John

//============ Using for polyfills ================

//============== We use the global object to test for support of modern language features. =================

if (!window.Promise) {
  alert("Your browser is really old!");
}

if (!window.Promise) {
  window.Promise = null; //... // custom implementation of the modern language feature
}
