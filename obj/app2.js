let animal = {
  name: "Animal",
  eat() {
    alert(`${this.name} eats.`);
  },
};
let rabbit = {
  __proto__: animal,
  name: "Rabbit",
  eat() {
    // that's how super.eat() could presumably work
    this.__proto__.eat.call(this); // (*)
  },
};
rabbit.eat(); // Rabbit eats

let longEar = {
  __proto__: rabbit,
  eat() {
    // ...do something with long ears and call parent (rabbit) method
    this.__proto__.eat.call(this); // (**)
  },
};

// inside longEar.eat() we have this = longEar
this.__proto__.eat.call(this); // (**)
// becomes
longEar.__proto__.eat.call(this);
// that is
rabbit.eat.call(this);

//================ Methods are not “free” ====================
/***
 * 
 * Methods are not “free”
As we’ve known before, generally functions are “free”, not bound to objects in JavaScript. So
they can be copied between objects and called with another this .
The very existance of [[HomeObject]] violates that principle, because methods remember
their objects. [[HomeObject]] can’t be changed, so this bond is forever.
The only place in the language where [[HomeObject]] is used – is super . So, if a method
does not use super , then we can still consider it free and copy between objects. But with
super things may go wrong.
Here’s the demo of a wrong super call:
 * 
 * 
 */

let animal11 = {
  sayHi() {
    console.log(`I'm an animal`);
  },
};
let rabbit11 = {
  __proto__: animal,
  sayHi() {
    super.sayHi();
  },
};
let plant = {
  sayHi() {
    console.log("I'm a plant");
  },
};
let tree = {
  __proto__: plant,
  sayHi: rabbit.sayHi, // (*)
};
tree.sayHi(); // I'm an animal (?!?)

//============= Methods, not function properties =============

let animal01 = {
  eat: function () {
    // should be the short syntax: eat() {...}
    // ...
  },
};
let rabbit01 = {
  __proto__: animal01,
  eat: function () {
    super.eat();
  },
};

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}
// usage
let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1)),
];
articles.sort(Article.compare);

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static createTodays() {
    // remember, this = Article
    return new this("Today's digest", new Date());
  }
}

let article = Article.createTodays();
alert(article.title); // Todays digest

/**
 * *********************Static properties ******************
 *
 * ***************** This is a recent addition to the language. Examples work in the recent Chrome ********************
 * ***************  Static properties are also possible, just like regular class properties:
 *
 ********************** Statics and inheritance
 */

class Animal {
  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }
  run(speed = 0) {
    this.speed += speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }
  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }
}
// Inherit from Animal
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}
let rabbits = [new Rabbit("White Rabbit", 10), new Rabbit("Black Rabbit", 5)];
rabbits.sort(Rabbit.compare);
rabbits[0].run(); // Black Rabbit runs with speed 5.

class Animal {}
class Rabbit extends Animal {}
// for static properties and methods
alert(Rabbit.__proto__ === Animal); // true
// the next step up leads to Function.prototype
alert(Animal.__proto__ === Function.prototype); // true
// the "normal" prototype chain for object methods
alert(Rabbit.prototype.__proto__ === Animal.prototype);

//==================== Private and protected properties and methods ===============

// Protecting “waterAmount”

class CoffeeMachine {
  waterAmount = 0; // the amount of water inside
  constructor(power) {
    this.power = power;
    alert(`Created a coffee-machine, power: ${power}`);
  }
}
// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);
// add water
coffeeMachine.waterAmount = 200;

//============ Protected properties are usually prefixed with an underscore _ . ==========

class CoffeeMachine {
  _waterAmount = 0;
  set waterAmount(value) {
    if (value < 0) throw new Error("Negative water");
    this._waterAmount = value;
  }
  get waterAmount() {
    return this._waterAmount;
  }
  constructor(power) {
    this._power = power;
  }
}
// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);
// add water
coffeeMachine.waterAmount = -10; // Error: Negative water

//=============== Read-only “power” ===========

class CoffeeMachine {
  // ...
  constructor(power) {
    this._power = power;
  }
  get power() {
    return this._power;
  }
}
// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);
alert(`Power is: ${coffeeMachine.power}W`); // Power is: 100W
coffeeMachine.power = 25; // Error (no setter)

//========== Getter/setter functions ===========

//Here we used getter/setter syntax. But most of the time get.../set... functions are preferred, like this:
class CoffeeMachine {
  _waterAmount = 0;
  setWaterAmount(value) {
    if (value < 0) throw new Error("Negative water");
    this._waterAmount = value;
  }
  getWaterAmount() {
    return this._waterAmount;
  }
}
new CoffeeMachine().setWaterAmount(100);

//============ Protected fields are inherited ===============

/**
 * If we inherit class MegaMachine extends CoffeeMachine , then nothing prevents us from accessing this._waterAmount or this._power from the methods of the new class.
 * So protected fields are naturally inheritable. Unlike private ones that we’ll see below.
 */

//======================= Private “#waterLimit” ===================

/**
 *
 *
 * This is a recent addition to the language. Not supported in JavaScript engines, or supported partially yet, requires polyfilling.
 *
 *
 */

class CoffeeMachine {
  #waterLimit = 200;
  #checkWater(value) {
    if (value < 0) throw new Error("Negative water");
    if (value > this.#waterLimit) throw new Error("Too much water");
  }
}
let coffeeMachine = new CoffeeMachine();
// can't access privates from outside of the class
coffeeMachine.#checkWater(); // Error
coffeeMachine.#waterLimit = 1000; // Error
