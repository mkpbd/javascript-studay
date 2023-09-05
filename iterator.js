let arr = [4, 5, 6, 7, 8, 9, 10, 11, 12];

let index = 0;

function next() {
  return arr[index++];
}

// console.log(next())   // 4
// console.log(next()) // 5
// console.log(next())// 6
// console.log(next()); //7

// real iterator

let stringData = "hello bangaldesh we have a plane";

// build in iterator
let stringIterator = stringData[Symbol.iterator]();

// console.log(stringIterator.next()) //{value: 'h', done: false}
// console.log(stringIterator.next()) // {value: 'e', done: false}
// console.log(stringIterator.next()) // {value: 'l', done: false}
// console.log(stringIterator.next())
// console.log(stringIterator.next())

// Iterator Protocal

// Satisfies both the Iterator Protocol and Iterable
const myIterator = {
  next() {
    // ...
  },
  [Symbol.iterator]() {
    return this;
  },
};

// Home made Iterator

function myNumberIterator() {
  let n = 0;
  return {
    next() {
      n += 10;

      return { data: n, done: false };
    },
  };
}

const number = myNumberIterator();

// console.log(number.next())
// console.log(number.next())
// console.log(number.next())
// console.log(number.next())
// console.log(number.next().data);

// iterator Object create

const numberIteratorObject = {};

numberIteratorObject[Symbol.iterator] = function () {
  // number
  let number = 0;

  return {
    next() {
      number += 10;

      let done = false;

      if (number == 100) {
        done = true;
      }

      return {
        value: number,
        done: done,
      };
    },
  };
};

// console.log(numberIteratorObject.next());
// console.log(numberIteratorObject.next());
// console.log(numberIteratorObject.next());

// for(let num of numberIteratorObject){

//    console.log(num);
// }

let secondNumber = {
  start: 0,
  step: 20,
  stop: 500,
};

secondNumber[Symbol.iterator] = function () {
  let currentNumber = this.start;
  const stepNumber = this.step;
  const stopNumber = this.stop;

  return {
    next() {
      // debugger;
       currentNumber = currentNumber + stepNumber;
      let done = false;

       secondNumber.start = currentNumber

      if (currentNumber >= stopNumber) done = true;
   
      return { value: currentNumber, done };
    }
  };
}









while(true){

   let numbers = secondNumber[Symbol.iterator]();
   console.log(numbers.next().value);

   if(numbers.next().done == true) break;
}




const Iterable = {
  [Symbol.iterator]() {
      let step = 0;
      const iterator = {
          next() {
              step++;
              if (step === 1)
                  return { value: 'Example', done: 'false' }
              else if (step === 2)
                  return { value: 'for', done: 'false' }
              else if (step === 3)
                  return { value: 'Iterator', done: 'false' }
              return { value: undefined, done: 'true' }
          }
      };
      return iterator;
  }
}
var iterator = Iterable[Symbol.iterator]();
console.log(iterator.next()) // {value: 'Example', done: 'false'}
console.log(iterator.next() )// {value: 'for', done: 'false'}
console.log(iterator.next() )// {value: 'iterator', done: 'false'}
console.log(iterator.next()) // {value: undefined, done: 'false'}


const favourtieMovies = [
  'Harry Potter',
  'Lord of the Rings',
  'Rush Hour', 
  'Interstellar',
  'Evolution',
];


const moveIterators = favourtieMovies[Symbol.iterator]();

console.log(moveIterators.next())
console.log(moveIterators.next())
console.log(moveIterators.next())
console.log(moveIterators.next())
console.log(moveIterators.next())
console.log(moveIterators.next())


const favouriteMoviesObject = {
  a: 'Harry Potter',
  b: 'Lord of the Rings',
  c: 'Rush Hour',
  d: 'Evolution',
  e: 'Interstellar',
}



favouriteMoviesObject[Symbol.iterator] = function() {
  const ordered = Object.values(this).sort((a, b) => a - b);
  let i = 0;
  return {
    next: () => ({
      done: i >= ordered.length,
      value: ordered[i++]
    })
  }
}

for (const v of favouriteMoviesObject) {
  console.log(v);
}

// prints 'Harry Potter', 'Lord of the Rings', 'Rush Hour', 'Evolution', 'Interstellar'