let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;


function sum(a, b) {
    return a + b;
  }
  
  alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

  // Another advantage of using backticks is that they allow a string to span multiple lines:


  let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // a list of guests, multiple lines


let str = `Hello`;

// the first character
alert( str[0] ); // H
alert( str.at(0) ); // H

// the last character
alert( str[str.length - 1] ); // o
alert( str.at(-1) );





function ucFirst(str){

   let rr =  str[0].toUpperCase() + str.slice(1);

   return rr
    


}


function checkSpam(str){

    let lower = str.toUpperCase();

    let viagra =  lower.includes('viagra');
    let xxx = lower.includes('XXX'.toLowerCase());

    return viagra || xxx;

}