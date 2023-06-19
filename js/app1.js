// Here’s an improved version of loadScript that tracks loading errors:

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
    document.head.append(script);
    }


    function  handleError(err) {

        console.log( new Error(err.message));
    }

    // It calls callback(null, script) for successful load and callback(error) otherwise. The usage:

    loadScript('/js/script.js', function(error, script) {
        if (error) {
        // handle error
        } else {
        // script loaded successfully
        }
        });


        loadScript('1.js', function(error, script) {
            if (error) {
            handleError(error);
            } else {
            // ...
            loadScript('2.js', function(error, script) {
            if (error) {
            handleError(error);
        } else {
            // ...
            loadScript('3.js', function(error, script) {
            if (error) {
            handleError(error);
            } else {
            // ...continue after all scripts are loaded (*)
            }
            });
            }
            })
            }
            });


            // we can try to  alleviate the problem by making  every action  a stand-alone function function like this



            loadScript('1.js', step1);
function step1(error, script) {
if (error) {
handleError(error);
} else {
// //...
loadScript('2.js', step2);
}
}

function step2(error, script) {
    if (error) {
    handleError(error);
    } else {
    // ...
    loadScript('3.js', step3);
    }
    }
    function step3(error, script) {
    if (error) {
    handleError(error);
    } else {
    // ...continue after all scripts are loaded (*)
    }
    };