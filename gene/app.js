/***
 *
 *
 * Regular functions return only one, single value (or nothing).
 * Generators can return (“yield”) multiple values, possibly an infinite number of values, one after another, on-demand.
 *  They work great with iterables, allowing to create data streams with ease.
 *
 *
 *
 */

//=================== Generator functions =============

//== To create a generator, we need a special syntax construct: function* , so-called “generator function”.

function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

// "generator function" creates "generator object"
let generator = generateSequence();

/**
 *
 * The main method of a generator is next() . When called, it resumes execution till the nearest yield <value> statement.
 *  Then the execution pauses, and the value is returned to the outer code.
 * For instance, here we create the generator and get its first yielded value:
 *
 */

function* generateSequence1() {
  yield 1;
  yield 2;
  return 3;
}
let generator1 = generateSequence1();
let one = generator1.next();
alert(JSON.stringify(one)); // {value: 1, done: false}

/**
 *
 * The result of next() is always an object: value : the yielded value.
 * done : false if the code is not finished yet, otherwise true .
 *
 *
 */

// Let’s call generator.next() again. It resumes the execution and returns the next yield :

let two = generator.next();

alert(JSON.stringify(two)); // {value: 2, done: false}

let three = generator.next();
alert(JSON.stringify(three)); // {value: 3, done: true}

/**
 *
 * New calls generator.next() don’t make sense any more. If we make them, they return the same object: {done: true} .
 * There’s no way to “roll back” a generator. But we can create another one by calling
 * generateSequence() .
 *
 */

//=================== Generators are iterable ==============

// As you probably already guessed looking at the next() method, generators are iterable. We can get loop over values by for..of :

function* generateSequence3() {
  yield 1;
  yield 2;
  return 3;
}
let generator2 = generateSequence3();
for (let value of generator2) {
  alert(value); // 1, then 2
}

// That’s a much better-looking way to work with generators than calling .next().value , right? /

function* generateSequence4() {
  yield 1;
  yield 2;
  yield 3;
}
let generator5 = generateSequence4();
for (let value of generator5) {
  alert(value); // 1, then 2, then 3
}

// Naturally, as generators are iterable, we can call all related functionality, e.g. the spread operator ... :

function* generateSequence5() {
  yield 1;
  yield 2;
  yield 3;
}
let sequence = [0, ...generateSequence5()];
alert(sequence); // 0, 1, 2, 3

//============= In the code above, ...generateSequence()
// turns the iterable into array of items (read more about the spread operator in the chapter Rest parameters and spread operator)

//================================= Using generators instead of iterables ==================================

// Some time ago, in the chapter Iterables we created an iterable range object that returns values from..to

let range = {
  from: 1,
  to: 5,
  // for..of calls this method once in the very beginning
  [Symbol.iterator]() {
    // ...it returns the iterator object:
    // onward, for..of works only with that object, asking it for next values
    return {
      current: this.from,
      last: this.to,
      // next() is called on each iteration by the for..of loop
      next() {
        // it should return the value as an object {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};
alert([...range]); // 1,2,3,4,5

//======================= Using a generator to make iterable sequences is so much more elegant: =================

function* generateSequence6(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}
let sequence6 = [...generateSequence6(1, 5)];
alert(sequence6); // 1, 2, 3, 4, 5

//=================== Converting Symbol.iterator to generator ==============

// We can get the best from both worlds by providing a generator as Symbol.iterator :

let range2 = {
  from: 1,
  to: 5,
  *[Symbol.iterator]() {
    // a shorthand for [Symbol.iterator]: function*()
    for (let value = this.from; value <= this.to; value++) {
      yield value;
    }
  },
};
alert([...range2]); // 1,2,3,4,5

// ==== The range object is now iterable. ====

//============== That works pretty well, because when range[Symbol.iterator] is called: =============

/**
 *
 * it returns an object (now a generator) that has .next() method (yep, a generator has it)
 * that returns values in the form {value: ..., done: true/false} (check, exactly what generator does).
 *
 */

/**
 *
 *
 ******************  Generators may continue forever *************************
 *
 * In the examples above we generated finite sequences, but we can also make a generator that yields values forever.
 * For instance, an unending sequence of pseudo-random numbers.
 * That surely would require a break in for..of , otherwise the loop would repeat forever and hang
 *
 * *********************** Generator composition ************************
 *
 * Generator composition is a special feature of generators that allows to transparently “embed” generators in each other.
 *
 */

function* generateSequence8(start, end) {
  for (let i = start; i <= end; i++) yield i;
}
function* generatePasswordCodes() {
  // 0..9
  yield* generateSequence8(48, 57);
  // A..Z
  yield* generateSequence8(65, 90);
  // a..z
  yield* generateSequence8(97, 122);
}
let str = "";
for (let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}
alert(str); // 0..9A..Za..z

/**
 *
 *
 * The result is the same as if we inlined the code from nested generators:
 *
 *  */

function* generateSequence0(start, end) {
  for (let i = start; i <= end; i++) yield i;
}
function* generateAlphaNum() {
  // yield* generateSequence(48, 57);
  for (let i = 48; i <= 57; i++) yield i;
  // yield* generateSequence(65, 90);
  for (let i = 65; i <= 90; i++) yield i;
  // yield* generateSequence(97, 122);
  for (let i = 97; i <= 122; i++) yield i;
}
let str1 = "";
for (let code of generateAlphaNum()) {
  str1 += String.fromCharCode(code);
}
alert(str1); // 0..9A..Za..z

//=============================== “yield” is a two-way road =======================

/***
 *
 *
 * Till this moment, generators were like “iterators on steroids”. And that’s how they are often used.
 * But in fact they are much more powerful and flexible.
 * That’s because yield is a two-way road: it not only returns the result outside, but also can pass the value inside the generator.
 * To do so, we should call generator.next(arg) , with an argument. That argument becomes the result of yield .
 *
 *
 */

function* gen() {
  // Pass a question to the outer code and wait for an answer
  let result = yield "2 + 2?"; // (*)
  alert(result);
}
let generator0 = gen();
let question = generator0.next().value; // <-- yield returns the value
generator0.next(4); // --> pass the result into the generator

function* gen1() {
  let ask1 = yield "2 + 2?";
  alert(ask1); // 4
  let ask2 = yield "3 * 3?";
  alert(ask2); // 9
}
let generator01 = gen();
alert(generator01.next().value); // "2 + 2?"
alert(generator01.next(4).value); // "3 * 3?"
alert(generator01.next(9).done); // true
