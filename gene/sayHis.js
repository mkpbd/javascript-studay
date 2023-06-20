//=========== Export “as” ===========


export function sayHi(user) {
  alert(`Hello, ${user}!`);
}


function sayBye(user) {}
export {sayHi, sayBye}; // a list of exported variables

export {sayHi as hi, sayBye as bye};
