
let arr = [4,5,6,7,8,9,10, 11, 12];

let index =0; 

function next() {
   return arr[index++];
}


// console.log(next())   // 4
// console.log(next()) // 5
// console.log(next())// 6
// console.log(next()); //7



// real iterator

let  stringData = 'hello bangaldesh we have a plane';

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
      let n =0;
   return   {
         next(){
            n += 10;
         
            return {data:n, done:false}
         }
   }

}


const number = myNumberIterator();

console.log(number.next())
console.log(number.next())
console.log(number.next())
console.log(number.next())
console.log(number.next().data)