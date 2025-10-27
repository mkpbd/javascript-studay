class Animal {
    constructor(name) {
        this.name = name;
    }
    static info() {
        return "Animals are multicellular eukaryotic organisms.";
    }
}

console.log(Animal.info());
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    static info() {
        return "Dogs are domesticated mammals, not natural wild animals.";
    }
    getDetails() {
        return `${this.name} is a ${this.breed}.`;
    }   
}

console.log(Dog.info());
const dog = new Dog("Buddy", "Golden Retriever");
console.log(dog.getDetails());

