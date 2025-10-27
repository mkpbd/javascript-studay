class MyClass{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log(`Hello, ${this.name}!`);
    }
    setName(newName){
        this.name = newName;
    }
    getName(){
        return this.name;
    }

}

const user = new MyClass("Alice");
user.greet(); // Hello, Alice!
user.setName("Bob");
console.log(user.getName());


// class expression
const AnotherClass = class {
    constructor(age){
        this.age = age;
    }
    getAge(){
        return this.age;
    }
}

const anotherUser = new AnotherClass(30);
console.log(anotherUser.getAge()); // 30

// class using getter and setter
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
   get getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set setFullName(fullName){
        [this.firstName, this.lastName] = fullName.split(" ");
    }

}

const person = new Person("John", "Doe");
console.log(person.getFullName());

person.setFullName = "Jane Smith";
console.log(person.getFullName);

// class fields
class Animal {
    species = "Unknown";    
    constructor(name){
        this.name = name;
    }
    getInfo(){
        return `${this.name} is a ${this.species}`;
    }   
}

const animal = new Animal("Leo");
animal.species = "Lion";
console.log(animal.getInfo()); // Leo is a Lion