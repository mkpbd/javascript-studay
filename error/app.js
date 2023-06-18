

// Error handling Error handling, "try..catch"

/**
 * 
 * No matter how great we are at programming, sometimes our scripts have errors. 
 * They may occur because of our mistakes, an unexpected user input, an erroneous server response and for a thousand of other reasons.
 * Usually, a script “dies” (immediately stops) in case of an error, printing it to console. 
 * But there’s a syntax construct try..catch that allows to “catch” errors and, instead of dying, do something more reasonable.
 * 
 */

/**
 * The “try…catch” syntax
 * The try..catch construct has two main blocks: try , and then catch :
 */


    try {
        // code...
    } catch (err) {
        // error handling
    }

    /**
     * 
     * 1. First, the code in try {...} is executed. 
     * 2. If there were no errors, then catch(err) is ignored: the execution reaches the end of
     * try and then jumps over catch .
     * 3 If an error occurs, then try execution is stopped, and the control flows to the beginning of catch(err) . The err variable (can use any name for it) contains an error object with details about what’s happened.
     * 
     * 
     */
