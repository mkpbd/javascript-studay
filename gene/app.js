/**
 * 
 * Modules 
 * Modules, introduction
 * 
 * 
 */

/**
 * 
 * As our application grows bigger, we want to split it into multiple files, so called ‘modules’.
 *  A module usually contains a class or a library of useful functions. 
 * For a long time, JavaScript existed without a language-level module syntax. That wasn’t a problem, because initially scripts were small and simple, so there was no need.
 * But eventually scripts became more and more complex, so the community invented a variety of ways to organize code into modules, special libraries to load modules on demand.
 * 
 */



//=========================== What is a module? ==================

/**
 * 
 * A module is just a file, a single script, as simple as that.
There are directives export and import to interchange functionality between modules, call
functions of one module from another one:
export keyword labels variables and functions that should be accessible from outside the
current module.
import allows to import functionality from other modules.
 * 
 */


// As modules support special keywords and features, we must tell the browser that a script should be treated as module, by using the attribute <script type="module"> .


import {sayHi} from './sayHis.js';

// Import the same module from different files
// 􀀀 1.js
import {abc} from  './alert.js'; // Module is evaluated!
// 􀀀 2.js
import './alert.js'; // (nothing)

import {admin} from './admin.js';
admin.name = "Pete";

alert(sayHi); // function...
sayHi('John'); // Hello, John!

alert(admin.name);



//==================== =========== import.meta ===========================

/**
 * 
 * 
 * The object import.meta contains the information about the current module. Its content depends on the environment. 
 * In the browser, it contains the url of the script, or a current webpage url if inside HTML:
 * 
 * 
 */



//==================== Top-level “this” is undefined ===============

// That’s kind of a minor feature, but for completeness we should mention it.
// In a module, top-level this is undefined, as opposed to a global object in non-module scripts:


//=================== Browser-specific features ==================

//=========== There are also several browser-specific differences of scripts with type="module" compared to regular ones.