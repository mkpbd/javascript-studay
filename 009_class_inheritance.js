class Animal {
    constructor(name) {
        this.name = name;
        this.speed = 0;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
    run(speed) {
        this.speed += speed;
        console.log(`${this.name} runs at ${this.speed} m/s.`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} has stopped.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
    run(speed) {
        super.run(speed);
        console.log(`${this.name} is happily running!`);
    }
    stop() {
        super.stop();
        console.log(`${this.name} is now resting.`);
    }
}

class Cat extends Animal {
    speak() {
        console.log(`${this.name} meows.`);
    }
    run(speed) {
        super.run(speed);
        console.log(`${this.name} is stealthily running!`);
    }
    stop() {
        super.stop();
        console.log(`${this.name} is now napping.`);
    }
    
}

const dog = new Dog("Buddy");
dog.speak(); // Buddy barks.

const cat = new Cat("Whiskers");
cat.speak(); // Whiskers meows.
