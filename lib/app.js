/**
 * 
 * There’s a “root” object called window . It has two roles:
 * 1. First, it is a global object for JavaScript code, as described in the chapter Global object.
 * 2. Second, it represents the “browser window” and provides methods to control it.
 * 
 * 
 */

function sayHi() {
    //alert("Hello");
}
// global functions are accessible as properties of window
window.sayHi();


//alert(window.innerHeight); // inner window height


//=========== DOM (Document Object Model) ====

/**
 * The document object gives access to the page content. We can change or create anything on the page using it.
 * 
 */

// change the background color to red
document.body.style.background = "red";
// change it back after 1 second
setTimeout(() => document.body.style.background = "", 1000);

/**
 * Here we used document.body.style , but there’s much, much more.
 * Properties and methods are described in the specification:
 * 
 */

/**
 * 
 * *************** DOM is not only for browsers ************
 * 
 * The DOM specification explains the structure of a document and provides objects to manipulate it. There are non-browser instruments that use it too.
 * 
 * For instance, server-side tools that download HTML pages and process them use the DOM. They may support only a part of the specification though.
 * 
 */


// BOM (Browser object model) 

alert(location.href); // shows current URL
if (confirm("Go to wikipedia?")) {
// location.href = "https://wikipedia.org"; // redirect the browser to another URL
}




//=========== BOM is the part of the general =========