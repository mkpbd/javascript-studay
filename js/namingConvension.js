//================== Naming a function ===============

/**
 * 
 * Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an
indication of what the function does.
 * 
 */

/**
 * 
 * Function starting with…
 * "get…" – return a value,
 * "calc…" – calculate something,
 * "create…" – create something,
 * "check…" – check something and return a boolean, etc
 * 
 */


/**
 * 
 * 
 * showMessage(..) // shows a message
 * getAge(..) // returns the age (gets it somehow)
 * calcSum(..) // calculates a sum and returns the result
 * createForm(..) // creates a form (and usually returns it)
 * checkPermission(..) // checks a permission, returns true/false
 * 
 * 
 */


/**
 * 
 * 
 * With prefixes in place, a glance at a function name gives an understanding what kind of work it does and what kind of value it returns.
 * 
 */


/**
 * =================== One function – one action====================
 * 
 * A function should do exactly what is suggested by its name, no more.
 * 
 * Two independent actions usually deserve two functions, even if they are usually called together (in that case we can make a 3rd function that calls those two).
 * 
 * ====== A few examples of breaking this rule: ==============
 * 
 * getAge – would be bad if it shows an alert with the age (should only get).
 * 
 * createForm – would be bad if it modifies the document, adding a form to it (should only create it and return).
 * 
 * checkPermission – would be bad if it displays the access granted/denied message (should only perform the check and return the result).
 * 
 * 
 */



/***
 * =========================== Ultrashort function names ============
 * 
 * Functions that are used very often sometimes have ultrashort names
 * 
 * For example, the jQuery  framework defines a function with $ . The Lodash  library has its core function named _ .
 * 
 * Functions == Comments
 * 
 */