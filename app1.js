// Object letaral 
//One of the best things about objects is that we can store a function as one of its properties.
let john = {
    name: "John",
    sayHi: function() {
      alert("Hi buddy!");
    }
  };
  
  john.sayHi(); // Hi buddy!


  // primitive data type 
  let str = "Hello";

alert( str.toUpperCase() ); // HELLO

let n = 1.23456;

alert( n.toFixed(2) ); // 1.23



let zero = new Number(0);

if (zero) { // zero is true, because it's an object
  alert( "zero is truthy!?!" );
}

let num = Number("123"); // convert a string to number

// null/undefined have no methods


let num1 = 255;

alert( num1.toString(16) );  // ff
alert( num1.toString(2) );   // 11111111