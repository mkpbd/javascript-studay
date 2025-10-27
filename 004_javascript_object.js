// JavaScript objects
// objects literals and properties
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(person.fullName()); // John Doe
// adding new property to object
person.gender = "male";
console.log(person.gender); // male
// modifying existing property
person.age = 31;
console.log(person.age); // 31
// deleting property from object
delete person.lastName;
console.log(person.lastName); // undefined  
// nested objects
const company = {
    name: "Tech Corp",
    address: {
        street: "123 Main St",
        city: "Metropolis",
        zip: "12345"
    }
};
console.log(company.address.city); // Metropolis
// object methods
const calculator = {    
    add: function(a, b) {
        return a + b;
    }
};
console.log(calculator.add(5, 10)); // 15
// iterating over object properties
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// Object.keys() method
const keys = Object.keys(person);
console.log(keys); // [ 'firstName', 'age', 'fullName',
// 'gender' ]
// Object.values() method
const values = Object.values(person);
console.log(values); // [ 'John', 31, [Function: fullName], 'male' ]
// Object.entries() method
const entries = Object.entries(person);
console.log(entries); // [ [ 'firstName', 'John' ],
// [ 'age', 31 ], [ 'fullName', [Function: fullName]


// object create using constructor function
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
const myCar = new Car("Toyota", "Camry", 2020);
console.log(myCar.make);
// Toyota
console.log(myCar.model); // Camry
console.log(myCar.year); // 2020
// object create using Object.create()
const animal = {
    type: "Mammal",
    sound: function() {
        return "Some sound";
    }
};
const dog = Object.create(animal);
dog.breed = "Labrador";
console.log(dog.type); // Mammal
console.log(dog.sound()); // Some sound
console.log(dog.breed); // Labrador
// object destructuring
const { firstName, age } = person;
console.log(firstName);
console.log(age);

// firstName: John


// object create for  factory function
function createBook(title, author, year) {
    return {
        title: title,
        author: author,
        year: year,
        getSummary: function() {
            return `${title} was written by ${author} in ${year}.`;
        }   
    };
}
const book1 = createBook("1984", "George Orwell", 1949);
console.log(book1.getSummary()); // 1984 was written by George Orwell in 1949.
// object methods using 'this' keyword
const rectangle = {
    width: 10,
    height: 5,
    getArea: function() {
        return this.width * this.height;
    }
};
console.log(rectangle.getArea()); // 50     

// object method borrowing
const anotherRectangle = {
    width: 7,
    height: 3
};
anotherRectangle.getArea = rectangle.getArea;
console.log(anotherRectangle.getArea()); // 21

// object with getter and setter
const user = {
    firstName: "Jane",  
    lastName: "Smith",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
set fullName(name) {
        const parts = name.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
console.log(user.fullName); // Jane Smith
user.fullName = "Emily Johnson";
console.log(user.firstName);
// Emily
console.log(user.lastName); // Johnson
// object immutability with Object.freeze()

const frozenObject = {
    prop1: "value1",
    prop2: "value2"
};
Object.freeze(frozenObject);
frozenObject.prop1 = "newValue";
console.log(frozenObject.prop1); // value1
// object merging with Object.assign()
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj); // { a: 1, b: 3, c: 4 } 
// object cloning with Object.assign()
const originalObj = { x: 10, y: 20 };
const clonedObj = Object.assign({}, originalObj);
console.log(clonedObj); // { x: 10, y: 20 } 
// modifying cloned object
clonedObj.x = 30;
console.log(originalObj.x); // 10
console.log(clonedObj.x); // 30 
// object with Symbol properties
const sym1 = Symbol("uniqueProp");
const sym2 = Symbol("uniqueProp");
const symbolObject = {
    [sym1]: "value1",
    [sym2]: "value2"
};  

console.log(symbolObject[sym1]); // value1
console.log(symbolObject[sym2]); // value2  
// iterating over Symbol properties
for (let key of Object.getOwnPropertySymbols(symbolObject)) {
    console.log(`${key.toString()}: ${symbolObject[key]}`);
}   
// Symbol(uniqueProp): value1
// Symbol(uniqueProp): value2
// object with computed property names
const propName = "dynamicProp";
const computedObject = {
    [propName]: "This is a dynamic property"
};
console.log(computedObject.dynamicProp); // This is a dynamic property
// object with method shorthand syntax
const methodObject = {
    greet(name) {
        return `Hello, ${name}!`;
    }
};
console.log(methodObject.greet("Alice")); // Hello, Alice!
// object with optional chaining
const nestedObject = {
    level1: {
        level2: {   
            value: "Deep Value"
        }
    }
};
console.log(nestedObject.level1?.level2?.value);

// Deep Value
console.log(nestedObject.level1?.level3?.value); // undefined
// object with nullish coalescing operator
const settings = {
    theme: null,    
    fontSize: 14
};
const theme = settings.theme ?? "default";
console.log(theme);
// default
const fontSize = settings.fontSize ?? 12;
console.log(fontSize); // 14

// object with spread operator
const objA = { p: 1, q: 2 };
const objB = { q: 3, r: 4 };
const combinedObj = { ...objA, ...objB };
console.log(combinedObj); // { p: 1, q: 3, r: 4 }
// object with rest properties
const { p, ...restProps } = combinedObj;
console.log(p); // 1
console.log(restProps); // { q: 3, r: 4 }

// object with JSON methods
const jsonObject = {
    name: "Sample", 
    value: 100
};
const jsonString = JSON.stringify(jsonObject);
console.log(jsonString); // {"name":"Sample","value":100}
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject); // { name: 'Sample', value: 100 }    
// accessing parsed object properties
console.log(parsedObject.name); // Sample
console.log(parsedObject.value); // 100
// end of JavaScript objects example
// accessing parsed object properties
console.log(parsedObject.name); // Sample
console.log(parsedObject.value); // 100
// end of JavaScript objects example

// accessing parsed object properties
console.log(parsedObject.name); // Sample
console.log(parsedObject.value); // 100
// end of JavaScript objects example

// accessing parsed object properties
console.log(parsedObject.name); // Sample
console.log(parsedObject.value); // 100
// end of JavaScript objects example
// accessing parsed object properties

