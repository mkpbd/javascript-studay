const user = {
  name: "John"
};

user.name = "Pete"; // (*)

alert(user.name); // Pete

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

alert( user.name ); // still John in the original object

// Another way to clone an object is to use Object.assign method
const dest = {};
const source1 = { a: 1 };
const source2 = { b: 2 };
Object.assign(dest, ...sources)


let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
alert(user.name); // John
alert(user.canView); // true
alert(user.canEdit); // true

Object.assign(user, { name: "Pete" });

alert(user.name); // now user = { name: "Pete" }

let clone1 = Object.assign({}, user);

alert( user.sizes === clone1.sizes ); // true, same object

// user and clone share sizes
user.sizes.width = 60;    // change a property from one place
alert(clone1.sizes.width); // 60, get the result from the other one