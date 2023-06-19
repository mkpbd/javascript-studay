function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
    document.head.append(script);
    }

    /**
     * 
     * The new function loadScript will not require a callback. 
     * Instead, it will create and return a Promise object that resolves when the loading is complete.
     *  The outer code can add handlers (subscribing functions) to it using .then :
     * 
     */

    function loadScript1(src) {
        return new Promise(function(resolve, reject) {
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Script load error for ${src}`));
        document.head.append(script);
});
}

let promise = loadScript1("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js")
promise.then(
//script => alert(`${script.src} is loaded!`),
//error => alert(`Error: ${error.message}`)
);
promise.then(script => //alert('One more handler to do something else!')
    console.log("One more handler to do something else ")
);



//================= Promises chaining =============

/**
 * 
 * Let’s return to the problem mentioned in the chapter Introduction: callbacks: we have a sequence of asynchronous tasks to be done one after another. For instance, loading scripts. How can we code it well?
 * 
 */

new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000); // (*)
    }).then(function(result) { // (**)
       // alert(result); // 1
        return result * 2;
        }).then(function(result) { // (***)
       // alert(result); // 2
        return result * 2;
        }).then(function(result) {
       // alert(result); // 4
        return result * 2;
        });

// ======== To make these words more clear, here’s the start of the chain: 

new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);

}).then(function(result) {
    alert(result);
    return result * 2; // <-- (1)
    }) // <-- (2)
    // .then…


    let promise2 = new Promise(function(resolve, reject) {
        setTimeout(() => resolve(1), 1000);
        });
        promise2.then(function(result) {
       // alert(result); // 1
        return result * 2;
        });
        promise2.then(function(result) {
       // alert(result); // 1
        return result * 2;
        });
        promise2.then(function(result) {
        //alert(result); // 1
        return result * 2;
        });



        //============ Returning promises 

        new Promise(function(resolve, reject) {
            setTimeout(() => resolve(1), 1000);
            }).then(function(result) {
            //alert(result); // 1
            return new Promise((resolve, reject) => { // (*)
            setTimeout(() => resolve(result * 2), 1000);
            });
            }).then(function(result) { // (**)
          //  alert(result); // 2
            return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result * 2), 1000);
            });
            }).then(function(result) {
            alert(result); // 4
            });