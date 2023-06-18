//============== Property getters and setters =============

/**
 *
 * There are two kinds of properties.
 * The first kind is data properties. We already know how to work with them. All properties that we’ve been using till now were data properties.
 * The second type of properties is something new. It’s accessor properties.
 * They are essentially functions that work on getting and setting a value, but look like regular properties to an external code.
 *
 */
//*************************** Getters and setters*************************** */

/**
 *
 * Accessor properties are represented by “getter” and “setter” methods. In an object literal they are denoted by get and set
 *
 *
 */
let obj = {
  get propName() {
    // getter, the code executed on getting obj.propName
  },
  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  },
};
/**
 *
 * The getter works when obj.propName is read, the setter – when it is assigned. For instance, we have a user object with name and surname
 *
 */

let user1 = {
  name: "John",
  surname: "Smith",
};

let user2 = {
  name: "John",
  surname: "Smith",
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};
alert(user2.fullName); // John Smith

/**
 *
 * From outside, an accessor property looks like a regular one. That’s the idea of accessor properties.
 * We don’t call user.fullName as a function, we read it normally: the getter runs behind the scenes.
 *
 */
/**
 *
 *
 * As of now, fullName has only a getter. If we attempt to assign user.fullName= , there will be an error.
 *
 * Let’s fix it by adding a setter for user.fullName :
 *
 */

let user3 = {
  name: "John",
  surname: "Smith",
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};
// set fullName is executed with the given value.
user3.fullName = "Alice Cooper";
alert(user3.name); // Alice
alert(user3.surname); // Cooper

//===================== Accessor properties are only accessible with get/set =====================

/**
 *
 * Once a property is defined with get prop() or set prop() , it’s an accessor property, not a data property any more.
 * If there’s a getter – we can read object.prop , otherwise we can’t.
 * If there’s a setter – we can set object.prop=... , otherwise we can’t.
 * And in either case we can’t delete an accessor property.
 *
 *
 *
 */

/**
 *
 *
 * ********************* Accessor descriptors ***************************
 *
 * get – a function without arguments, that works when a property is read,
 * set – a function with one argument, that is called when the property is set,
 * enumerable – same as for data properties,
 * configurable – same as for data properties.
 *
 *
 */

let user4 = {
  name: "John",
  surname: "Smith",
};
Object.defineProperty(user4, "fullName", {
  get() {
    return `${this.name} ${this.surname}`;
  },
  set(value) {
    [this.name, this.surname] = value.split(" ");
  },
});
alert(user4.fullName); // John Smith
for (let key in user) alert(key); // name, surname

/**
 *
 *
 * Please note once again that a property can be either an accessor or a data property, not both. If we try to supply both get and value in the same descriptor, there will be an error:
 *
 */

//============ Smarter getters/setters =============

// Getters/setters can be used as wrappers over “real” property values to gain more control over them

let user12 = {
  get name() {
    return this._name;
  },
  set name(value) {
    if (value.length < 4) {
      alert("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  },
};
user12.name = "Pete";
alert(user12.name); // Pete
user12.name = ""; // Name is too short...

//=============================== Using for compatibility ================

/**
 *
 * One of the great ideas behind getters and setters – they allow to take control over a “regular” data property at any moment by replacing it with getter and setter and tweak its behavior.
 * Let’s say we started implementing user objects using data properties name and age :
 *
 */

function User(name, age) {
  this.name = name;
  this.age = age;
}
let john = new User("John", 25);
alert(john.age); // 25

/**
 *
 * …But sooner or later, things may change. Instead of age we may decide to store birthday , because it’s more precise and convenient:
 *
 */

function User1(name, birthday) {
  this.name = name;
  this.birthday = birthday;
}
let john1 = new User1("John", new Date(1992, 6, 1));

function User2(name, birthday) {
  this.name = name;
  this.birthday = birthday;
  // age is calculated from the current date and birthday
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    },
  });
}
let john3 = new User("John", new Date(1992, 6, 1));
alert(john3.birthday); // birthday is available
alert(john3.age); // ...as well as the age

/***
 *
 * Prototypes, inheritance
 *
 * Prototypal inheritance
 *
 * In programming, we often want to take something and extend it.
 *
 * Prototypal inheritance is a language feature that helps in that.
 *
 * [[Prototype]]
 *
 *
 */

let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};
rabbit.__proto__ = animal;

rabbit.__proto__ = animal; // (*)
// we can find both properties in rabbit now:
alert(rabbit.eats); // true (**)
alert(rabbit.jumps); // true

let animal2 = {
  eats: true,
  walk() {
    alert("Animal walk");
  },
};
let rabbit1 = {
  jumps: true,
  __proto__: animal2,
};
// walk is taken from the pr
rabbit1.walk(); // Animal walk

//=================== The prototype chain can be longer: =================

let animal11 = {
  eats: true,
  walk() {
    alert("Animal walk");
  },
};
let rabbit11 = {
  jumps: true,
  __proto__: animal,
};
let longEar1 = {
  earLength: 10,
  __proto__: rabbit,
};
// walk is taken from the prototype chain
longEar1.walk(); // Animal walk
alert(longEar1.jumps); // true (from rabbit)

//======= There are actually only two limitations: ==========

/**
 *
 *
 * 1. The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.
 * 2. The value of __proto__ can be either an object or null , other types (like primitives) are ignored.
 *
 * Also it may be obvious, but still: there can be only one [[Prototype]] . An object may not inherit from two others
 */

/**
 * 
 * That’s for data properties only, not for accessors. If a property is a getter/setter, then it behaves
like a function: getters/setters are looked up in the prototype.
For that reason admin.fullName works correctly in the code below
 * 
 */

let user12 = {
  name: "John",
  surname: "Smith",
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

let admin = {
  __proto__: user,
  isAdmin: true,
};
alert(admin.fullName); // John Smith (*)
// setter triggers!
admin.fullName = "Alice Cooper"; // (**)
