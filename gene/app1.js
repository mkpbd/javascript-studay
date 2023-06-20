//========= Async iterators and generators ==========

/**
 *
 * Asynchronous iterators allow to iterate over data that comes asynchronously, on-demand.
 * For instance, when we download something chunk-by-chunk, and expect data fragments to
 * come asynchronously and would like to iterate over them – async iterators and generators maycome in handy.
 * Let’s see a simple example first, to grasp the syntax, and then review a real-life use case.
 *
 */

//== Async iterators =========

//========== Asynchronous iterators are similar to regular iterators, with a few syntactic differences. ============

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
        // (2)
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

for (let value of range) {
  alert(value); // 1 then 2, then 3, then 4, then 5
}

/***
 *
 *
 * 1. We need to use Symbol.asyncIterator instead of Symbol.iterator .
 * 2. next() should return a promise.
 * 3. To iterate over such an object, we should use for await (let item of iterable) loop.
 * Let’s make an iterable range object, like the one before, but now it will return values asynchronously, one per second:
 *
 *
 */

let range3 = {
  from: 1,
  to: 5,
  // for await..of calls this method once in the very beginning
  [Symbol.asyncIterator]() {
    // (1)
    // ...it returns the iterator object:
    // onward, for await..of works only with that object, asking it for next values
    return {
      current: this.from,
      last: this.to,
      // next() is called on each iteration by the for..of loop
      async next() {
        // (2)
        // it should return the value as an object {done:.., value :...}
        // (automatically wrapped into a promise by async)
        // can use await inside, do async stuff:
        await new Promise((resolve) => setTimeout(resolve, 1000)); // (3)
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

(async () => {
  for await (let value of range) {
    // (4)
    alert(value); // 1,2,3,4,5
  }
})();

//============= As we can see, the structure is similar to regular iterators: =============

/**
 *
 *
 * 1. To make an object asynchronously iterable, it must have a method Symbol.asyncIterator (1) .
 * 2. It must return the object with next() method returning a promise (2) .
 * 3. The next() method doesn’t have to be async , it may be a regular method returning a promise, but async allows to use await inside.
 * Here we just delay for a second (3) .
 * 4. To iterate, we use for await(let value of range) (4) , namely add “await” after “for”.
 *  It calls range[Symbol.asyncIterator]() once, and then its next() for values.
 *
 *
 *
 */

//=================== Async generators ================

/**
 *
 *
 * As we already know, JavaScript also supports generators, and they are iterable. Let’s recall a sequence generator from the chapter Generators.
 * It generates a sequence of values from start to end :
 *
 *
 *
 */

function* generateSequence2(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}
for (let value of generateSequence2(1, 5)) {
  alert(value); // 1, then 2, then 3, then 4, then 5
}

/***
 *
 *
 * But what if we need to use await in the generator body? To perform network requests, for instance.
 * No problem, just prepend it with async , like this:
 *
 *
 *
 */

async function* generateSequence12(start, end) {
  for (let i = start; i <= end; i++) {
    // yay, can use await!
    await new Promise((resolve) => setTimeout(resolve, 1000));
    yield i;
  }
}
(async () => {
  let generator = generateSequence12(1, 5);
  for await (let value of generator) {
    alert(value); // 1, then 2, then 3, then 4, then 5
  }
})();


let result = await generator.next(); // result = {value: ..., done: true/false}