// Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}

greet("Alice"); // "Hello, Alice!"
// Function Expression
const nameGreet = function(name) {
    return "Hello, " + name + "!";
};
nameGreet("Bob"); // "Hello, Bob!"
// Arrow Function
const nameArrow = (name) => {
    return "Hello, " + name + "!";
};
nameArrow("Charlie"); // "Hello, Charlie!"
// Arrow Function with implicit return
const nameArrowSingle = name => "Hello, " + name + "!";
nameArrowSingle("David"); // "Hello, David!"
