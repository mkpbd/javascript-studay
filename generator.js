
/**
 * 
 * You can think of generators as processes (pieces of code) that you can pause and resume while executing that particular code :
 * 
 */
function* func() {
    // (A)
    console.log('First');
    yield;
    console.log('Second');
}


const fun = func();

fun.next();
fun.next();


function* increment(i) {
    yield i + 1;
    yield i + 2;
}
var obj = increment(10);
console.log(obj.next()); //{value: 11, done: false}
console.log(obj.next()); //{value: 12, done: false}
console.log(obj.next()); //{value: undefined, done: true}



function* incrementByLoop(number) {
    let incrementNumber = 0;
    for(let i = 0; i< number; i++) {
        yield  incrementNumber = i;
    }
    return incrementNumber;
}

let incrementNum = incrementByLoop(10);

console.log(incrementNum.next())
console.log(incrementNum.next())
console.log(incrementNum.next())
console.log(incrementNum.next())
console.log(incrementNum.next())
console.log(incrementNum.next())
console.log(incrementNum.next())
console.log(incrementNum.next())
console.log(incrementNum.next())
console.log(incrementNum.next())
console.log(incrementNum.next())